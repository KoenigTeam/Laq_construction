"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Category = "Commercial" | "Residential" | "Industrial";

type Project = {
  title: string;
  location: string;
  category: Category;
  image: string;
  status: string;
};

const projects: Project[] = [
  {
    title: "Stone Oak Retail Shell",
    location: "Stone Oak, San Antonio",
    category: "Commercial",
    status: "On schedule",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Alamo Heights Renovation",
    location: "Alamo Heights, San Antonio",
    category: "Residential",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Warehouse Retrofit",
    location: "South San Antonio",
    category: "Industrial",
    status: "In construction",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Downtown Restaurant TI",
    location: "Downtown San Antonio",
    category: "Commercial",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Hill Country Modern Home",
    location: "Boerne",
    category: "Residential",
    status: "Design-build",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  },
];

const filters: Array<Category | "All"> = ["All", "Commercial", "Residential", "Industrial"];

export default function ProjectsPage() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Projects"
        title="Glassmorphism gallery of recent work"
        subtitle="Commercial, residential, and industrial projects across San Antonio & South Texas."
      />

      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={active === filter ? "primary" : "glass"}
            size="md"
            className="capitalize"
            onClick={() => setActive(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <GlassCard
            key={project.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-200 hover:-translate-y-1"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              className="h-72 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <div className="flex items-center justify-between">
                <p className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                  {project.category}
                </p>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    project.status === "Completed"
                      ? "bg-secondary/90 text-secondary-foreground"
                      : project.status === "On schedule"
                        ? "bg-primary/90 text-primary-foreground"
                        : "bg-secondary/70 text-secondary-foreground",
                  )}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-heading uppercase leading-tight">{project.title}</h3>
              <p className="text-sm text-white/80">{project.location}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

