"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const stored = (window.localStorage.getItem("theme") as Theme | null) ?? undefined;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return stored || (prefersDark ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleToggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle dark mode"
      className={cn(
        "glass flex h-10 w-10 items-center justify-center rounded-full border border-border/20 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-lg",
        theme === "dark" ? "text-secondary" : "text-foreground",
      )}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
