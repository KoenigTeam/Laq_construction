import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type GlassCardProps = PropsWithChildren<{
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}>;

export function GlassCard({ children, className, as: Tag = "div" }: GlassCardProps) {
  return <Tag className={cn("glass rounded-2xl border border-white/20", className)}>{children}</Tag>;
}

