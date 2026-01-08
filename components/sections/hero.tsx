"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative mt-6 min-h-[85vh] overflow-hidden rounded-[28px] lg:min-h-[90vh]">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-75 dark:opacity-50"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/laq_video.webm" type="video/webm" />
          <source src="/videos/laq_video_optimized.mp4" type="video/mp4" />
          <source src="/videos/laq_video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent dark:from-black/60 dark:via-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full min-h-[85vh] flex-col justify-end p-8 lg:min-h-[90vh] lg:justify-center lg:p-12 xl:p-16">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">
            San Antonio · South Texas
          </p>
          <h1 className="text-4xl font-heading uppercase leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
            LAQ Construction
          </h1>
          <p className="max-w-2xl text-lg text-white/90 md:text-xl">
            Building San Antonio&apos;s Future Since 2019
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" className="h-12 rounded-full pl-5 pr-3 text-base">
              <Link href="/projects">
                <span className="text-nowrap">View Our Projects</span>
                <span className="ml-1">→</span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 rounded-full border-white/20 bg-white/10 px-5 text-base text-white backdrop-blur-sm hover:bg-white/20 dark:border-white/30 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <Link href="/contact">
                <span className="text-nowrap">Get a Quote</span>
              </Link>
            </Button>
          </div>
          <div className="grid gap-3 pt-4 text-sm text-white/80 sm:grid-cols-2">
            <FeatureLine text="Spanish Colonial to modern Texas design fluency." />
            <FeatureLine text="Licensed, insured, HUB certified in Texas." />
            <FeatureLine text="Fast estimates within 48 hours." />
            <FeatureLine text="Safety metrics aligned to top competitors." />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureLine({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
      <span>{text}</span>
    </div>
  );
}
