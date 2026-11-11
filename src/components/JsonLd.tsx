// Renders one or more schema.org JSON-LD blocks. "<" is escaped so page text can never close the script tag.
export default function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }} />
      ))}
    </>
  );
}
