import { Snowflake, Mountain, Sun, Trees, Star, UtensilsCrossed } from "lucide-react";

const items = [
  { icon: Mountain, text: "Kinner Kailash Views" },
  { icon: Snowflake, text: "Snow Peaks Year-Round" },
  { icon: Sun, text: "Golden Sunrise Mornings" },
  { icon: Trees, text: "Apple Orchard Country" },
  { icon: UtensilsCrossed, text: "Homemade Kinnauri Food" },
  { icon: Star, text: "4.9 / 5 Guest Rating" },
];

export function MarqueeBanner() {
  return (
    <div className="relative overflow-hidden border-y border-header-line bg-header py-3.5 text-header-foreground">
      <div className="marquee-track flex">
        <div className="marquee-content flex shrink-0 items-center">
          {items.map((item, i) => (
            <MarqueeItem key={i} icon={item.icon} text={item.text} />
          ))}
          {items.map((item, i) => (
            <MarqueeItem key={`dup-${i}`} icon={item.icon} text={item.text} />
          ))}
        </div>
        <div className="marquee-content flex shrink-0 items-center" aria-hidden="true">
          {items.map((item, i) => (
            <MarqueeItem key={`dup2-${i}`} icon={item.icon} text={item.text} />
          ))}
          {items.map((item, i) => (
            <MarqueeItem key={`dup3-${i}`} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MarqueeItem({ icon: Icon, text }: { icon: typeof Mountain; text: string }) {
  return (
    <span className="flex items-center gap-2.5 px-7 text-xs font-semibold uppercase tracking-[0.14em] text-header-muted">
      <Icon className="size-3.5 text-gold" strokeWidth={1.5} />
      {text}
      <span className="ml-7 size-1 rounded-full bg-gold/40" />
    </span>
  );
}
