/**
 * AuroraBackground — pure-CSS aurora layer ported from StrokesMotionKit
 * (ui/aurora-background.tsx). Fills its parent, which must be
 * `relative overflow-hidden`; pointer-events none; recoloured for this site
 * in aurora.css (stone ground, navy / gold / teal at 6–10%). The drift
 * pauses under prefers-reduced-motion.
 */
import type { HTMLAttributes } from "react";
import "./aurora.css";

interface AuroraBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  showRadialGradient?: boolean;
}

export default function AuroraBackground({
  className = "",
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      <div className={showRadialGradient ? "mhw-aurora mhw-aurora--masked" : "mhw-aurora"} />
    </div>
  );
}
