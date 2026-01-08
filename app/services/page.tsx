import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Demolition & Site Prep",
    detail: "Selective demo, haul-off, site grading, and safe separations ahead of build-outs.",
  },
  {
    title: "Design-Build",
    detail: "Integrated design coordination, permitting support, and construction with single-point accountability.",
  },
  {
    title: "Concrete & Structural",
    detail: "Flatwork, foundations, tilt-wall retrofits, mezzanines, and steel coordination.",
  },
  {
    title: "Interiors",
    detail: "Framing, drywall, glazing, millwork coordination, and premium finish standards.",
  },
  {
    title: "Exteriors",
    detail: "Facade refreshes, storefront systems, canopies, decks, and weatherproofing tuned to Texas climate.",
  },
  {
    title: "MEP Coordination",
    detail: "Trusted partners for mechanical, electrical, and plumbing scopes with schedule discipline.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Services"
        title="Full-scope construction built for San Antonio"
        subtitle="From selective demo to interiors and MEP coordination, we deliver glassmorphism-grade polish and performance."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <GlassCard key={service.title} className="space-y-2 rounded-2xl p-5">
            <h3 className="text-lg font-heading uppercase text-foreground">{service.title}</h3>
            <p className="text-sm text-muted">{service.detail}</p>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="mt-4 flex flex-col gap-3 rounded-3xl p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">Not seeing your scope?</p>
          <p className="text-lg font-heading uppercase text-foreground">We tailor packages for retail & industrial.</p>
          <p className="text-sm text-muted">Send us your plans or schedule a walkthrough to start estimating.</p>
        </div>
        <Button size="lg">Start a Bid</Button>
      </GlassCard>
    </div>
  );
}

