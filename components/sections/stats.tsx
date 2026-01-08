"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/section-heading";

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
};

const stats: Stat[] = [
  {
    label: "Built Value",
    value: 750,
    prefix: "$",
    suffix: "K+",
    description: "Across commercial, industrial, and residential builds.",
  },
  {
    label: "Projects Completed",
    value: 50,
    suffix: "+",
    description: "Retail, restaurant, offices, and Hill Country homes.",
  },
  {
    label: "Service Area",
    value: 1,
    suffix: " Metro",
    description: "San Antonio & South Texas within rapid-response distance.",
  },
  {
    label: "Since",
    value: 2018,
    description: "Family-built, safety-first and locally trusted.",
  },
];

export function StatsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.3 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-16 space-y-10" ref={containerRef}>
      <SectionHeading
        eyebrow="Our impact"
        title="San Antonio-focused results"
        subtitle="Transparent delivery, schedule discipline, and safety KPIs that match top competitors."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <GlassCard
            key={stat.label}
            className="relative overflow-hidden rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            <div className="relative space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">{stat.label}</p>
              <AnimatedNumber
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                active={visible}
              />
              <p className="text-sm text-muted">{stat.description}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  active,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const duration = 900;

  useEffect(() => {
    if (!active) return;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, value]);

  const formatted = useMemo(() => {
    if (value >= 1000) return display.toLocaleString();
    return display.toString();
  }, [display, value]);

  return (
    <div className="text-3xl font-heading uppercase text-foreground md:text-4xl">
      {prefix}
      {formatted}
      {suffix}
    </div>
  );
}
