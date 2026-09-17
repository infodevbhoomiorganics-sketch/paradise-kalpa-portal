import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, MessageCircle, Mountain, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { details, whatsappUrl } from "@/lib/site-data";

const nav = [
  ["Home", "/"],
  ["Stay", "/stay"],
  ["About", "/about"],
  ["Dining", "/dining"],
  ["Amenities", "/amenities"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-header-line bg-header/90 text-header-foreground backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="group flex items-center gap-3" aria-label="Paradise Homestay Kalpa home">
          <span className="grid size-10 place-items-center rounded-full border border-header-line bg-header-soft">
            <Mountain className="size-5 text-gold" strokeWidth={1.5} />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl text-header-foreground">Paradise</span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.28em] text-header-muted">Homestay · Kalpa</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          {nav.map(([label, to]) => (
            <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-header-muted transition-colors hover:text-header-foreground" activeProps={{ className: "text-gold" }}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <a href={`tel:${details.phoneDigits}`} className="hidden text-xs text-header-muted hover:text-header-foreground lg:inline">{details.phone}</a>
          <Button asChild size="lg" className="rounded-full bg-gold px-5 text-header hover:bg-gold/90">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> Book on WhatsApp</a>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild><Button variant="ghost" size="icon" className="text-header-foreground hover:bg-header-soft hover:text-header-foreground xl:hidden" aria-label="Open menu"><Menu /></Button></SheetTrigger>
          <SheetContent className="border-header-line bg-header p-0 text-header-foreground">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex h-full flex-col p-8 pt-20">
              <p className="font-display text-3xl">Paradise</p>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-header-muted">Homestay · Kalpa</p>
              <nav className="mt-12 flex flex-col" aria-label="Mobile navigation">
                {nav.map(([label, to], index) => (
                  <SheetClose asChild key={to}><Link to={to} className="flex items-center justify-between border-b border-header-line py-4 font-display text-2xl"><span><span className="mr-4 font-sans text-[10px] text-gold">0{index + 1}</span>{label}</span><ArrowUpRight className="size-4" /></Link></SheetClose>
                ))}
              </nav>
              <Button asChild size="lg" className="mt-auto rounded-full bg-gold text-header"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> Enquire on WhatsApp</a></Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-header text-header-foreground">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
        <div><Mountain className="size-7 text-gold" /><h2 className="mt-5 font-display text-4xl">Paradise Homestay</h2><p className="mt-3 max-w-sm text-sm leading-7 text-header-muted">A quiet Himalayan home in Rakpa, Kalpa, looking directly towards the snow-covered Kinner Kailash range.</p></div>
        <div><p className="eyebrow text-gold">Explore</p><div className="mt-5 grid grid-cols-2 gap-3">{nav.slice(1).map(([label,to])=><Link key={to} to={to} className="text-sm text-header-muted hover:text-header-foreground">{label}</Link>)}</div></div>
        <div><p className="eyebrow text-gold">Reach us</p><p className="mt-5 text-sm leading-7 text-header-muted">{details.address}</p><a className="mt-4 inline-flex items-center gap-2 text-sm" href={`tel:${details.phoneDigits}`}><Phone className="size-4 text-gold" />{details.phone}</a></div>
      </div>
      <div className="border-t border-header-line px-5 py-5 text-center text-[11px] text-header-muted">© 2026 Paradise Homestay Kalpa · Rakpa, Himachal Pradesh</div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return <Button asChild size="icon" className="fixed bottom-5 right-5 z-30 size-13 rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl hover:bg-whatsapp/90" title="Chat on WhatsApp"><a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Chat with Paradise Homestay on WhatsApp"><MessageCircle className="size-6" /></a></Button>;
}
