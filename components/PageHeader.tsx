import Eyebrow from "@/components/Eyebrow";

export default function PageHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="pt-32 pb-[var(--space-16)] bg-warm-white">
      <div className="grid-layout">
        <div className="col-full">
          <Eyebrow className="mb-[var(--space-4)]">{label}</Eyebrow>
          <h1
            className="font-[family-name:var(--font-heading)] font-semibold text-navy"
            style={{ fontSize: "var(--text-5xl)", lineHeight: 1.15 }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="mt-[var(--space-4)] max-w-lg font-[family-name:var(--font-body)] text-charcoal-light leading-relaxed"
              style={{ fontSize: "var(--text-lg)" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
