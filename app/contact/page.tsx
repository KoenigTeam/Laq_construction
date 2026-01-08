"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s scope your project"
        subtitle="We respond within 48 hours with availability for site walks around San Antonio and South Texas."
      />

      <GlassCard className="rounded-3xl p-6">
        {submitted ? (
          <p className="text-sm text-muted">Thanks! We&apos;ll reach out to schedule a walkthrough.</p>
        ) : (
          <form
            className="grid gap-4 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label className="space-y-1 text-sm">
              <span className="text-muted">Name</span>
              <input required className="w-full rounded-xl border border-border/20 bg-white/50 px-3 py-2 text-foreground outline-none focus:border-primary" />
            </label>
            <label className="space-y-1 text-sm">
              <span className="text-muted">Email</span>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-border/20 bg-white/50 px-3 py-2 text-foreground outline-none focus:border-primary"
              />
            </label>
            <label className="space-y-1 text-sm md:col-span-2">
              <span className="text-muted">Project Description</span>
              <textarea
                required
                rows={4}
                className="w-full rounded-xl border border-border/20 bg-white/50 px-3 py-2 text-foreground outline-none focus:border-primary"
              />
            </label>
            <div className="flex items-center justify-between md:col-span-2">
              <p className="text-xs text-muted">We protect your data and never spam.</p>
              <Button type="submit">Send</Button>
            </div>
          </form>
        )}
      </GlassCard>
    </div>
  );
}

