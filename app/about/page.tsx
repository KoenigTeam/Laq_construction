import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const heroImage =
  "https://images.unsplash.com/photo-1600585154340-0ef3c08de670?auto=format&fit=crop&w=1600&q=80";

const timeline = [
  {
    year: "2018",
    title: "Founded in San Antonio",
    detail: "Family-owned with deep trades partnerships across the Alamo City and Hill Country.",
  },
  {
    year: "2020",
    title: "Safety-first delivery",
    detail: "Embedded safety officer for projects over $250K; OSHA-driven training culture.",
  },
  {
    year: "2023",
    title: "Glass & steel expertise",
    detail: "Expanded into modern facade refreshes, structural glass canopies, and premium interiors.",
  },
  {
    year: "2025+",
    title: "San Antonio metro scale",
    detail: "Faster estimates, tighter schedules, and AVIF-optimized digital showcases of our builds.",
  },
];

const values = [
  { title: "Safety", detail: "Zero compromise. Toolbox talks, PPE compliance, and safety KPIs on every job." },
  { title: "Integrity", detail: "Transparent schedules, budget clarity, and documented change orders." },
  { title: "Quality", detail: "Finish standards tuned to retail and hospitality expectations." },
  { title: "Communication", detail: "Weekly owner updates with photos, milestones, and risks." },
];

const team = [
  {
    name: "Alex Ramirez",
    role: "Founder & Project Lead",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
    bio: "15 years delivering commercial interiors and fast-track tenant improvements across Texas.",
  },
  {
    name: "Maria Torres",
    role: "Operations & Safety",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    bio: "OSHA-certified safety champion focused on site readiness, logistics, and crew coordination.",
  },
  {
    name: "Jordan Lee",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=600&q=80",
    bio: "Former structural engineer overseeing steel, concrete, and glazing scopes with precision.",
  },
];

const certifications = [
  "Licensed & Insured in Texas",
  "HUB Certified",
  "OSHA Trained Crews",
  "Member · San Antonio Chamber of Commerce",
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">About us</p>
          <h1 className="text-4xl font-heading uppercase leading-tight text-foreground md:text-5xl">
            Building San Antonio&apos;s future with glass, steel, and trust.
          </h1>
          <p className="text-base text-muted">
            We handle residential, commercial, industrial, federal, and government projects with demolition, design,
            and full construction services. Bilingual delivery (English/Spanish), meticulous scheduling, and safety as
            a core metric.
          </p>
          <div className="flex gap-3">
            <Button size="lg">Download Capability Sheet</Button>
            <Button variant="glass" size="lg">
              Meet the Team
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-5 rounded-[28px] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl" />
          <GlassCard className="relative overflow-hidden rounded-[28px]">
            <Image src={heroImage} alt="Team on site" width={1100} height={820} className="h-full w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/55 to-transparent p-5 text-white">
              <p className="text-xs uppercase tracking-[0.1em] text-secondary">San Antonio HQ</p>
              <p className="text-lg font-semibold">Spanish Colonial Revival + Modern Texas craft</p>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Our story"
          title="From family crew to metro-ready builder"
          subtitle="Rooted in El Paso origins, now focused on San Antonio growth with safety and schedule discipline."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {timeline.map((item) => (
            <GlassCard key={item.year} className="space-y-3 rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">{item.year}</p>
              <h3 className="text-xl font-heading uppercase text-foreground">{item.title}</h3>
              <p className="text-sm text-muted">{item.detail}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="What we believe"
          title="Four values that keep us competitive"
          subtitle="Modeled after top Texas builders: safety metrics, transparent budgeting, and premium finishes."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <GlassCard key={value.title} className="space-y-2 rounded-2xl p-5">
              <h3 className="text-lg font-heading uppercase text-foreground">{value.title}</h3>
              <p className="text-sm text-muted">{value.detail}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Faces behind the builds"
          subtitle="Senior leadership that owns schedule, quality, and communication."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((person) => (
            <GlassCard key={person.name} className="space-y-3 rounded-2xl p-4">
              <div className="overflow-hidden rounded-2xl">
                <Image src={person.image} alt={person.name} width={400} height={300} className="h-52 w-full object-cover" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-heading uppercase text-foreground">{person.name}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">{person.role}</p>
                <p className="text-sm text-muted">{person.bio}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section>
        <GlassCard className="flex flex-wrap items-center gap-3 rounded-3xl px-6 py-5">
          {certifications.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-foreground shadow-sm dark:bg-white/10"
            >
              {item}
            </span>
          ))}
        </GlassCard>
      </section>
    </div>
  );
}

