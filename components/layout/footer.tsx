import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-b from-transparent to-black/5 py-12 dark:to-white/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5">
        <div className="glass rounded-3xl border border-border/20 px-8 py-8 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">
              Build with confidence
            </p>
            <h3 className="mt-3 text-2xl font-heading uppercase text-foreground">
              Licensed, insured, San Antonio proud.
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              HUB Certified by the State of Texas. Serving San Antonio, Hill Country, and South Texas with
              safety-first delivery.
            </p>
          </div>
          <Button className="mt-4 md:mt-0" size="lg">
            Schedule a Walkthrough
          </Button>
        </div>

        <div className="grid gap-8 text-sm text-muted md:grid-cols-3">
          <div>
            <p className="font-heading text-lg text-foreground">Laq Construction</p>
            <p>San Antonio, TX</p>
            <p className="mt-1">Mon–Fri · 8am–6pm</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Contact</p>
            <p>(210) 555-0147</p>
            <p>build@laqconstruction.com</p>
          </div>
          <div className="space-x-4">
            <Link href="/projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-border/20 pt-4 text-xs text-muted">
          © 2026 Laq Construction — HUB Certified · Licensed & Insured
        </div>
      </div>
    </footer>
  );
}
