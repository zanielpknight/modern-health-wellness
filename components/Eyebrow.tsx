import type { ElementType, ReactNode } from "react";

/**
 * Eyebrow — the small label that sits above a heading. Sentence case, body
 * face at medium weight, text-sm, preceded by a 24px hairline. Replaces the
 * old all-caps tracked labels.
 */
export default function Eyebrow({
  children,
  tone = "gold",
  as: Tag = "p",
  className = "",
}: {
  children: ReactNode;
  tone?: "gold" | "clay" | "light";
  as?: ElementType;
  className?: string;
}) {
  const tones = {
    gold: "text-gold before:bg-gold",
    clay: "text-clay before:bg-clay/50",
    light: "text-white/70 before:bg-white/50",
  };
  return (
    <Tag
      className={`flex items-center gap-3 font-[family-name:var(--font-body)] font-medium text-sm tracking-normal before:content-[''] before:block before:h-px before:w-6 before:shrink-0 ${tones[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}
