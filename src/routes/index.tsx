import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Calendar,
  Camera,
  Car,
  Coffee,
  Heart,
  MapPin,
  Mountain,
  Snowflake,
  Star,
  Sun,
  Trees,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingBand, IconFeature, SectionHeading } from "@/components/site-sections";
import { MarqueeBanner } from "@/components/marquee-banner";
import { Reveal } from "@/components/reveal";
import { useParallax } from "@/hooks/use-scroll-reveal";
import { details, pageHead, photos, whatsappUrl } from "@/lib/site-data";

const description =
  "Stay at Paradise Homestay Kalpa in Rakpa for wooden mountain-view rooms, homemade Kinnauri food and sweeping Kinner Kailash views.";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead("Paradise Homestay Kalpa | Mountain View Stay", description, "/"),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LodgingBusiness", "LocalBusiness"],
          name: details.name,
          telephone: details.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rakpa, House No. 56",
            addressLocality: "Kalpa",
            addressRegion: "Himachal Pradesh",
            postalCode: "172108",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: details.rating,
            reviewCount: details.reviews,
          },
          priceRange: "₹₹",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const heroParallax = useParallax<HTMLDivElement>(0.4);
  const ctaParallax = useParallax<HTMLDivElement>(-0.2);

  return (
    <>
      {/* Hero with parallax + slow zoom */}
      <section className="relative min-h-[92vh] overflow-hidden bg-header pt-20 text-header-foreground">
        <img
          src={photos.balcony}
          alt="Kinner Kailash snow peaks seen from Paradise Homestay Kalpa balcony"
          className="hero-zoom absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-[1440px] flex-col justify-end px-5 pb-10 sm:px-8 lg:px-12">
          <div ref={heroParallax} className="reveal max-w-5xl">
            <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.15em] text-header-muted">
              <span className="flex items-center gap-2"><MapPin className="size-4 text-gold" /> Rakpa · Kalpa</span>
              <span className="flex items-center gap-2"><Star className="size-4 fill-gold text-gold" /> {details.rating} from {details.reviews} reviews</span>
            </div>
            <h1 className="text-balance font-display text-6xl leading-[0.9] sm:text-8xl lg:text-[7.5rem]">
              Stay above<br />the mountains.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-header-muted sm:text-lg">
              A quiet wooden homestay in Kalpa, where every morning begins with Kinner Kailash at your window.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-full bg-gold px-6 text-header hover:bg-gold/90">
                <a href={whatsappUrl()} target="_blank" rel="noreferrer">Check availability <ArrowRight /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-header-line bg-header-soft px-6 text-header-foreground hover:bg-header-soft hover:text-header-foreground">
                <Link to="/stay">Explore the stay</Link>
              </Button>
            </div>
          </div>
          <div className="mt-10 flex items-end justify-between border-t border-header-line pt-5">
            <div>
              <span className="text-xs text-header-muted">Stays from</span>
              <span className="ml-3 font-display text-2xl">{details.price}<small className="font-sans text-xs text-header-muted"> / night*</small></span>
            </div>
            <ArrowDown className="hidden size-5 animate-bounce text-gold sm:block" />
          </div>
        </div>
      </section>

      {/* Scrolling marquee banner */}
      <MarqueeBanner />

      {/* Intro section with reveal animations */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <Reveal direction="up">
            <SectionHeading
              eyebrow="A rare point of view"
              title="Come for the peaks. Stay for the feeling."
              text="Set in Rakpa, away from the rush, Paradise is an intimate family homestay shaped by timber rooms, orchard seasons and genuine mountain hospitality."
            />
            <Button asChild variant="link" className="mt-6 h-auto p-0 text-gold-dark">
              <Link to="/about">Our story <ArrowRight /></Link>
            </Button>
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            <Reveal direction="up" delay={150}>
              <img src={photos.exterior} alt="Paradise Homestay exterior" className="mt-12 aspect-[3/4] w-full object-cover" />
            </Reveal>
            <Reveal direction="up" delay={300}>
              <img src={photos.morningTea} alt="Morning tea with the mountain view" className="aspect-[3/4] w-full object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats band with animated gradient background */}
      <section className="bg-animated-gradient py-20 text-header-foreground">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
          <Reveal direction="scale" delay={0}>
            <StatItem value={details.rating} label="Guest Rating" sub="/ 5" />
          </Reveal>
          <Reveal direction="scale" delay={100}>
            <StatItem value={details.reviews} label="Happy Guests" sub="reviews" />
          </Reveal>
          <Reveal direction="scale" delay={200}>
            <StatItem value="3,700m" label="Above Sea Level" sub="Kalpa" />
          </Reveal>
          <Reveal direction="scale" delay={300}>
            <StatItem value={details.price} label="Starting From" sub="/ night" />
          </Reveal>
        </div>
      </section>

      {/* Experience section */}
      <section className="bg-header py-24 text-header-foreground lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="The Paradise experience"
              title="Simple comforts, extraordinary setting."
              text="Everything you need for slow days in the high Himalaya."
            />
          </Reveal>
          <div className="mt-14 grid gap-x-10 md:grid-cols-3">
            <Reveal direction="up" delay={0}>
              <IconFeature icon={<Mountain />} title="Unbroken mountain views" text="Balconies and windows open towards the Kinner Kailash range and the vast Sutlej valley." />
            </Reveal>
            <Reveal direction="up" delay={150}>
              <IconFeature icon={<UtensilsCrossed />} title="Food from the home" text="Fresh, comforting Himachali and Kinnauri meals prepared with care and seasonal produce." />
            </Reveal>
            <Reveal direction="up" delay={300}>
              <IconFeature icon={<Heart />} title="Warm, local hospitality" text="A personal stay rooted in the rhythms, stories and generous welcome of Kinnaur." />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Room showcase split with parallax image */}
      <section className="grid lg:grid-cols-2">
        <div className="relative overflow-hidden">
          <img src={photos.room} alt="Wooden mountain-view room" className="size-full min-h-[520px] object-cover transition-transform duration-700 hover:scale-105" />
        </div>
        <div className="flex items-center bg-card px-5 py-20 sm:px-12 lg:px-20">
          <Reveal direction="left">
            <p className="eyebrow">Rest well</p>
            <h2 className="mt-4 max-w-xl font-display text-5xl leading-[1.02] sm:text-6xl">Wood-warm rooms. Snow-peak mornings.</h2>
            <p className="mt-6 max-w-lg leading-8 text-muted-foreground">Comfortable wooden interiors, clean attached baths with hot water, and a view that quietly changes with the light.</p>
            <div className="mt-8 flex items-center gap-8 border-y border-border py-5 text-sm">
              <span><strong className="block font-display text-2xl">{details.price}</strong>starting rate*</span>
              <span><strong className="block font-display text-2xl">{details.rating}/5</strong>guest rating</span>
            </div>
            <Button asChild className="mt-8 rounded-full"><Link to="/stay">View the rooms <ArrowRight /></Link></Button>
          </Reveal>
        </div>
      </section>

      {/* Quick amenities strip */}
      <section className="bg-muted py-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-5 sm:px-8 md:grid-cols-4 lg:px-12">
          <QuickAmenity icon={<Wifi />} label="Free Wi-Fi" />
          <QuickAmenity icon={<Car />} label="Parking" />
          <QuickAmenity icon={<Coffee />} label="Hot Water" />
          <QuickAmenity icon={<Mountain />} label="Mountain Views" />
        </div>
      </section>

      {/* Full-width parallax CTA banner */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-header text-header-foreground">
        <img src={photos.panorama} alt="Panoramic Kinner Kailash view" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div ref={ctaParallax} className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal direction="up">
            <p className="eyebrow text-gold">An invitation</p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] sm:text-7xl">The mountains are waiting. So is your room.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-header-muted">Book directly with us on WhatsApp for the best rates and a personal welcome.</p>
            <Button asChild size="lg" className="mt-8 h-12 rounded-full bg-gold px-6 text-header hover:bg-gold/90">
              <a href={whatsappUrl()} target="_blank" rel="noreferrer">Book on WhatsApp <ArrowRight /></a>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Seasons section — new content */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="When to visit"
              title="Every season writes its own Kalpa."
              text="From snow-draped winters to golden apple harvests, the landscape transforms throughout the year."
            />
          </Reveal>
          <div className="mt-14 grid gap-3 md:grid-cols-4">
            <Reveal direction="up" delay={0}>
              <SeasonCard icon={<Snowflake />} season="Winter" text="Deep snow, crystalline peaks and cosy evenings by the fire." months="Dec – Feb" />
            </Reveal>
            <Reveal direction="up" delay={100}>
              <SeasonCard icon={<Trees />} season="Spring" text="Blossoms in the orchards and the first green returning to the valley." months="Mar – May" />
            </Reveal>
            <Reveal direction="up" delay={200}>
              <SeasonCard icon={<Sun />} season="Summer" text="Warm days, clear skies and the best time for high-altitude walks." months="Jun – Aug" />
            </Reveal>
            <Reveal direction="up" delay={300}>
              <SeasonCard icon={<Camera />} season="Autumn" text="Golden light, apple harvest and the most photographed peaks of the year." months="Sep – Nov" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Attractions grid */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHeading align="center" eyebrow="Nearby wonders" title="Kalpa, at your own pace." />
          </Reveal>
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            <Reveal direction="up" delay={0}>
              <HomeAttraction image={photos.panorama} title="Kinner Kailash views" text="Watch the sacred range change from rose-gold dawn to deep blue dusk." />
            </Reveal>
            <Reveal direction="up" delay={150}>
              <HomeAttraction image={photos.valley} title="Kalpa village walks" text="Wander through traditional villages, forest paths and quiet mountain roads." />
            </Reveal>
            <Reveal direction="up" delay={300}>
              <HomeAttraction image={photos.orchard} title="Kinnaur orchards" text="Experience the celebrated apple country in its green and harvest seasons." />
            </Reveal>
          </div>
        </div>
      </section>

      {/* How to reach — new content */}
      <section className="bg-muted py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal direction="up">
              <SectionHeading eyebrow="Getting here" title="The journey is half the magic." text="Kalpa sits high in the Kinnaur valley, reachable by one of India's most scenic mountain roads." />
              <Button asChild className="mt-8 rounded-full" variant="outline">
                <Link to="/contact">View directions <ArrowRight /></Link>
              </Button>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              <Reveal direction="up" delay={0}>
                <TravelCard icon={<MapPin />} title="By Road" text="Approx. 230 km from Shimla via the spectacular Hindustan–Tibet highway." />
              </Reveal>
              <Reveal direction="up" delay={150}>
                <TravelCard icon={<Mountain />} title="Nearest Pass" text="Roghi village and suicide point are a short drive from the homestay." />
              </Reveal>
              <Reveal direction="up" delay={300}>
                <TravelCard icon={<Calendar />} title="Best Time" text="April to November for clear roads. Winter visits need weather planning." />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial with shimmer accent */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal direction="scale">
            <div className="flex justify-center gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-gold text-gold" />)}</div>
            <blockquote className="mt-8 font-display text-4xl leading-tight sm:text-5xl">"A home in the mountains, with views you remember long after the road back."</blockquote>
            <p className="mt-6 text-sm text-muted-foreground">Guest impression · {details.rating}/5 from {details.reviews} reviews</p>
          </Reveal>
        </div>
      </section>

      <BookingBand />
    </>
  );
}

function StatItem({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-5xl text-gold sm:text-6xl">{value}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-header-foreground">{label}</p>
      <p className="mt-1 text-[11px] text-header-muted">{sub}</p>
    </div>
  );
}

function QuickAmenity({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="grid size-12 place-items-center rounded-full border border-border bg-card text-gold-dark">{icon}</span>
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{label}</span>
    </div>
  );
}

function SeasonCard({ icon, season, text, months }: { icon: React.ReactNode; season: string; text: string; months: string }) {
  return (
    <div className="border-t-2 border-gold/30 pt-6">
      <div className="text-gold-dark">{icon}</div>
      <h3 className="mt-4 font-display text-3xl">{season}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{months}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function TravelCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="border-t border-border pt-6">
      <div className="text-gold-dark">{icon}</div>
      <h3 className="mt-4 font-display text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function HomeAttraction({ image, title, text }: { image: string; title: string; text: string }) {
  return (
    <article className="group relative min-h-[460px] overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-header-foreground">
        <h3 className="font-display text-3xl">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-header-muted">{text}</p>
      </div>
    </article>
  );
}
