"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
  isValidPhoneNumber,
  type CountryCode,
} from "libphonenumber-js";

// A phone field with a searchable country-code dropdown on the left (flag + dial code) and the number on the
// right, styled as ONE field. The form posts a single hidden value, "phone", already in international form
// (e.g. +919876543210), so the server action and the API receive exactly one string.

interface CountryOption {
  code: CountryCode;
  name: string;
  dial: string;
}

const DEFAULT_COUNTRY: CountryCode = "IN";

function buildCountries(): CountryOption[] {
  const names = new Intl.DisplayNames(["en"], { type: "region" });
  const all = getCountries().map((code) => ({
    code,
    name: names.of(code) ?? code,
    dial: getCountryCallingCode(code),
  }));
  all.sort((a, b) => a.name.localeCompare(b.name));
  // India first (our primary market), the rest alphabetical.
  const india = all.filter((c) => c.code === DEFAULT_COUNTRY);
  return [...india, ...all.filter((c) => c.code !== DEFAULT_COUNTRY)];
}

function Flag({ code }: { code: string }) {
  const lower = code.toLowerCase();
  return (
    // eslint-disable-next-line @next/next/no-img-element -- tiny static flag, no optimisation needed
    <img
      src={`https://flagcdn.com/w40/${lower}.png`}
      srcSet={`https://flagcdn.com/w80/${lower}.png 2x`}
      width={20}
      height={15}
      alt=""
      loading="lazy"
      className="h-[15px] w-5 flex-none rounded-[2px] object-cover ring-1 ring-black/10"
    />
  );
}

// Combine the chosen country and the typed number into one E.164 string. A number that cannot be fully parsed still
// goes out as "+<dial><digits>" so nothing the visitor typed is lost.
export function toInternational(country: CountryCode, national: string): string {
  const digits = national.replace(/\D/g, "");
  if (!digits) return "";
  const parsed = parsePhoneNumberFromString(digits, country);
  if (parsed) return parsed.number; // E.164
  return `+${getCountryCallingCode(country)}${digits}`;
}

export default function PhoneField({ id = "phone", name = "phone", required = true }: { id?: string; name?: string; required?: boolean }) {
  const countries = useMemo(() => buildCountries(), []);
  const [country, setCountry] = useState<CountryCode>(DEFAULT_COUNTRY);
  const [national, setNational] = useState("");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  const selected = countries.find((c) => c.code === country) ?? countries[0];
  const value = toInternational(country, national);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/^\+/, "");
    if (!q) return countries;
    return countries.filter((c) => c.name.toLowerCase().includes(q) || c.code.toLowerCase() === q || c.dial.startsWith(q));
  }, [countries, query]);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    searchRef.current?.focus();
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // The parent form resets after a successful send: go back to India and an empty number.
  useEffect(() => {
    const form = inputRef.current?.form;
    if (!form) return;
    const onReset = () => {
      setCountry(DEFAULT_COUNTRY);
      setNational("");
      setQuery("");
      setOpen(false);
    };
    form.addEventListener("reset", onReset);
    return () => form.removeEventListener("reset", onReset);
  }, []);

  // Native browser validation message when the number does not fit the chosen country.
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    if (!national.trim()) {
      el.setCustomValidity("");
      return;
    }
    el.setCustomValidity(isValidPhoneNumber(national.replace(/\D/g, ""), country) ? "" : `Enter a valid phone number for ${selected.name}`);
  }, [national, country, selected.name]);

  function choose(code: CountryCode) {
    setCountry(code);
    setOpen(false);
    setQuery("");
    inputRef.current?.focus();
  }

  return (
    <div ref={wrapperRef} className="relative">
      <div className="flex w-full items-stretch rounded-lg border border-slate-300 bg-white transition focus-within:border-accent-500 focus-within:ring-2 focus-within:ring-accent-500/20">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-label={`Country code, ${selected.name} +${selected.dial}`}
          className="flex flex-none items-center gap-2 rounded-l-lg border-r border-slate-200 px-3 py-2.5 text-sm text-navy-900 hover:bg-slate-50 focus:outline-none"
        >
          <Flag code={selected.code} />
          <span className="tabular-nums">+{selected.dial}</span>
          <svg className={`h-4 w-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
        <input
          ref={inputRef}
          id={id}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          required={required}
          value={national}
          onChange={(e) => setNational(e.target.value.replace(/[^\d\s\-()]/g, ""))}
          placeholder={country === "IN" ? "98765 43210" : "Phone number"}
          className="min-w-0 flex-1 rounded-r-lg bg-transparent px-4 py-2.5 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none"
        />
      </div>
      {/* The one value the form submits: the full international number. */}
      <input type="hidden" name={name} value={value} />

      {open && (
        <div className="absolute left-0 z-30 mt-2 w-full min-w-[18rem] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          <div className="border-b border-slate-100 p-2">
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country or code"
              aria-label="Search country"
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-navy-900 placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
            />
          </div>
          <ul id={listId} role="listbox" className="max-h-64 overflow-y-auto py-1">
            {filtered.length === 0 && <li className="px-4 py-3 text-sm text-slate-500">No country found</li>}
            {filtered.map((c) => (
              <li key={c.code} role="option" aria-selected={c.code === country}>
                <button
                  type="button"
                  onClick={() => choose(c.code)}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm hover:bg-accent-50 ${c.code === country ? "bg-accent-50 font-medium" : ""}`}
                >
                  <Flag code={c.code} />
                  <span className="min-w-0 flex-1 truncate text-navy-900">{c.name}</span>
                  <span className="flex-none tabular-nums text-slate-500">+{c.dial}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
