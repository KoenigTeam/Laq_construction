import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center mx-auto")}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-heading uppercase leading-tight text-foreground md:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-muted">{subtitle}</p>}
    </div>
  );
}
