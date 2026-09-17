import type { ReactNode } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow: string; title: string; text?: string; align?: "left" | "center" }) {
  return <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">{title}</h2>{text && <p className="mt-5 text-base leading-8 text-muted-foreground">{text}</p>}</div>;
}

export function PageHero({ image, eyebrow, title, text, imageAlt }: { image: string; eyebrow: string; title: string; text: string; imageAlt: string }) {
  return <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-header pt-20 text-header-foreground"><img src={image} alt={imageAlt} className="absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-hero-overlay" /><div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-36 sm:px-8 lg:px-12 lg:pb-20"><p className="eyebrow text-gold">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">{title}</h1><p className="mt-6 max-w-xl text-base leading-7 text-header-muted sm:text-lg">{text}</p></div></section>;
}

export function BookingBand({ title = "The mountains are calling.", text = "Plan your stay in Kalpa and wake up to the Kinner Kailash range." }: { title?: string; text?: string }) {
  return <section className="bg-gold text-header"><div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:px-12"><div><p className="eyebrow text-header/65">Your Himalayan stay</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h2><p className="mt-3 text-sm text-header/70">{text}</p></div><Button asChild size="lg" className="h-12 rounded-full bg-header px-6 text-header-foreground hover:bg-header/90"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> Check availability <ArrowRight /></a></Button></div></section>;
}

export function IconFeature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <div className="border-t border-border py-6"><div className="text-gold-dark">{icon}</div><h3 className="mt-5 font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>;
}
