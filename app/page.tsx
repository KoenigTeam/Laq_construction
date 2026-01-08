import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    title: "Commercial & Retail",
    copy: "Tenant finish-out, white-boxing, ground-up retail, and restaurant build-outs with fast turnarounds.",
  },
  {
    title: "Residential & Hill Country",
    copy: "Modern Texas and Spanish Colonial Revival remodels, additions, and outdoor living spaces.",
  },
  {
    title: "Industrial & Logistics",
    copy: "Warehouse retrofits, tilt-wall improvements, loading docks, and safety upgrades.",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <StatsSection />

      <section className="space-y-10">
        <SectionHeading
          eyebrow="What we do"
          title="Built for San Antonio speed and quality"
          subtitle="Service lines tuned to local permitting, climate, and code requirements."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((cap) => (
            <GlassCard key={cap.title} className="space-y-3 rounded-2xl p-6">
              <h3 className="text-xl font-heading uppercase text-foreground">{cap.title}</h3>
              <p className="text-sm text-muted">{cap.copy}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <GlassCard className="flex flex-col items-start justify-between gap-4 rounded-3xl p-8 md:flex-row md:items-center">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">Ready for the next bid</p>
            <h3 className="text-2xl font-heading uppercase leading-tight text-foreground">
              Let&apos;s walk your site this week
            </h3>
            <p className="text-sm text-muted">
              We align scope, schedule, and budget in a single glassmorphism-forward proposal deck.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button size="lg">Schedule a Walkthrough</Button>
            <Button variant="glass" size="lg">
              Download Capability Sheet
            </Button>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
