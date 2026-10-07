"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

export type Stat = { value: number; suffix?: string; label: string };

const MAX_TILT = 4; // degrees

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();

  // Count-up on first view, driven by a MotionValue (no React state churn).
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => `${Math.round(v)}${stat.suffix ?? ""}`);
  useEffect(() => {
    if (reduceMotion) {
      count.set(stat.value);
      return;
    }
    if (!inView) return;
    const controls = animate(count, stat.value, {
      duration: 1.4,
      delay: index * 0.12,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, reduceMotion, stat.value, index, count]);

  // Pointer tilt, clamped to ±MAX_TILT.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]), { stiffness: 200, damping: 20 });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onPointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      // Same initial markup on server and client (useReducedMotion differs between the two);
      // reduced-motion users get an instant reveal instead of a different first render.
      initial={{ opacity: 0, y: 16 }}
      animate={inView || reduceMotion ? { opacity: 1, y: 0 } : undefined}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.5, delay: index * 0.08, ease: "easeOut" }
      }
      className="rounded-2xl border border-white/10 bg-white/[0.06] px-8 py-8 text-center will-change-transform"
    >
      <motion.span
        className="font-[family-name:var(--font-heading)] font-semibold text-white tabular-nums"
        style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", lineHeight: 1 }}
      >
        {display}
      </motion.span>
      <p className="mt-[var(--space-3)] font-[family-name:var(--font-body)] text-sm text-white/60">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function StatsCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-4)] md:gap-[var(--space-6)]">
      {stats.map((s, i) => (
        <StatCard key={s.label} stat={s} index={i} />
      ))}
    </div>
  );
}
