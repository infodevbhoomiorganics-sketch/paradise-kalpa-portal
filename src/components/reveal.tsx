import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "fade" | "scale";

const directionClasses: Record<Direction, string> = {
  up: "translate-y-12 opacity-0",
  down: "-translate-y-12 opacity-0",
  left: "translate-x-12 opacity-0",
  right: "-translate-x-12 opacity-0",
  fade: "opacity-0",
  scale: "scale-95 opacity-0",
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span" | "p";
}) {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "transition-all ease-out will-change-transform",
        visible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : directionClasses[direction],
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

export function StaggerGroup({
  children,
  className,
  stagger = 100,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <Reveal key={i} delay={i * stagger} direction="up">
              {child}
            </Reveal>
          ))
        : children}
    </div>
  );
}
