"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Safe: close mobile menu after navigation
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-xl" : "",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4",
          "glass border border-border/20 rounded-2xl mt-4",
          scrolled ? "shadow-lg shadow-black/10" : "",
        )}
      >
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="rounded-full bg-primary/80 px-3 py-1 text-xs font-bold text-primary-foreground shadow">
            SA
          </span>
          <span className="font-heading text-xl uppercase">Laq Construction</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold uppercase tracking-[0.08em] transition hover:text-primary",
                pathname === link.href ? "text-primary" : "text-foreground/80",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button size="md" variant="primary">
            Get Estimate
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
          </div>
        </button>
      </div>

      {open && (
        <div className="glass mx-5 mt-3 rounded-2xl border border-border/20 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold uppercase tracking-[0.08em] py-2 border-b border-border/20 last:border-b-0",
                  pathname === link.href ? "text-primary" : "text-foreground/90",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              <Button size="md" className="w-32">
                Get Estimate
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
