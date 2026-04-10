export default function ImageLabel({ text }: { text: string }) {
  return (
    <span
      className="absolute top-2 left-2 z-10 inline-block font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.15em] text-white bg-black/50 px-2 py-1 rounded-sm pointer-events-none"
      style={{ fontSize: "9px" }}
    >
      📷 {text}
    </span>
  );
}
