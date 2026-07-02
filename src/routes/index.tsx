import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { z } from "zod";

import hero from "../assets/hero.jpeg";
import g2 from "..//assets/g2.jpeg";
import g3 from "../assets/g3.jpeg";
import g4 from "../assets/g4.jpeg";
import g5 from "../assets/g5.jpeg";
import g6 from "../assets/g6.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://project--3202e7a0-e4ec-4d62-a998-d4e3e3f8221d.lovable.app/og.jpg" },
    ],
  }),
});

const PHONE = "(619) 435-2094";
const PHONE_HREF = "tel:+16194352094";
const ADDRESS = "1106 10th St, Coronado, CA 92118";
const MAPS = "https://maps.google.com/?q=1106+10th+St,+Coronado,+CA+92118";

const HOURS: Array<[string, string]> = [
  ["Mon – Sat", "9:00 – 4:30"],
  ["Sunday", "10:00 – 3:30"],
];

const SERVICES = [
  { no: "01", name: "The Classic Cut", price: "$35", desc: "Scissor-and-clipper work, hot towel finish, styled to how you actually wear it." },
  { no: "02", name: "Straight-Razor Shave", price: "$40", desc: "Hot lather, cold towel, a proper edge. The kind of shave your grandfather remembered." },
  { no: "03", name: "Cut & Shave", price: "$65", desc: "The whole ceremony. About an hour. Bring a good story." },
  { no: "04", name: "The Little Gentleman", price: "$25", desc: "For the kids. Patient hands, a booster seat, and a lollipop on the way out." },
  { no: "05", name: "Beard Trim & Line-Up", price: "$25", desc: "Shape, edge, oil. Walk out looking like you meant it." },
  { no: "06", name: "Bow-Tie Service", price: "By appt.", desc: "Wedding party? Groomsmen? We'll tie every last bow. It's in the name." },
];

const WHY = [
  { k: "Since forever", v: "Coronado's neighborhood barbershop. Half the peninsula has sat in the chair." },
  { k: "Old-school craft", v: "Straight-razor shaves, precision fades, and hot towels — done the way they used to be." },
  { k: "Good with kids", v: "Little gentlemen welcome. Booster seats, calm voices, no rush." },
  { k: "Walk-in friendly", v: "Grab a coffee across the street. We'll flag you when the chair's warm." },
];

const FAQ = [
  { q: "Do I need an appointment?", a: "Nope. Walk-ins are the rhythm of the shop. If you'd rather book, give us a ring at (619) 435-2094 and we'll hold a chair." },
  { q: "Do you cut kids' hair?", a: "Every day. We keep it easy — booster seat, patient hands, a lollipop for the road." },
  { q: "How much is a cut?", a: "Classic cuts start at $35. A cut and a proper straight-razor shave run $65. See the services list above for the whole menu." },
  { q: "Do you do wedding parties?", a: "We do. Groomsmen packages, bow-tying, and a coordinated morning-of are our love language. Call to book the whole group." },
  { q: "Where do I park?", a: "Street parking on 10th and along Orange Ave. It's Coronado — you'll find a spot within a block." },
  { q: "Do you take walk-ins on weekends?", a: "Yes. Saturdays are busy, so mornings are your friend. Sundays we open at 10." },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Your name, please").max(80),
  phone: z.string().trim().min(7, "A number we can reach you at").max(30),
  service: z.string().trim().max(80).optional(),
  message: z.string().trim().max(600).optional(),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Toaster />
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <Gallery />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

/* ─────────── NAV ─────────── */
function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-background/85 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 font-display text-lg tracking-tight">
          <span className="text-primary">✂</span>
          <span>Bow Ties <span className="italic font-light">&</span> Haircuts</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#why" className="hover:text-primary transition-colors">Why us</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </nav>
        <a
          href={PHONE_HREF}
          className="hidden sm:inline-flex items-center gap-2 rounded-none border border-ink/80 bg-ink text-cream px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-primary hover:border-primary transition-colors"
          style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}
        >
          Call · {PHONE}
        </a>
      </div>
    </header>
  );
}

/* ─────────── HERO ─────────── */
function Hero() {
  return (
    <section id="top" className="relative border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-10 lg:pt-16 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left: type block */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <span className="eyebrow">Est. Coronado, California</span>
            <div className="flex-1 rule-dashed" />
            <span className="eyebrow !text-muted-foreground">No. 001</span>
          </div>

          <h1 className="font-display text-[13vw] leading-[0.86] lg:text-[9.5rem] tracking-[-0.04em]">
            Bow Ties
            <span className="block italic font-light text-primary">&amp; Haircuts</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A quiet corner in the city where the clippers still hum, the towels come hot,
            and the straight razor hasn't gone out of style. Walk in, sit down, stay a while.
          </p>

          <div className="mt-10 grid sm:grid-cols-[1fr_1.5fr_1fr] gap-6 border-t border-border pt-6">
            <Stat label="On 10th Street" value="1106" sub="Coronado, CA" />
            <Stat label="Chair opens from" value="9:00 AM - 4:30 PM" sub="Mon – Sat · 10 Sun" />
            <Stat label="Rated" value="4.5★" sub="42 reviews · Google" />
          </div>

          
        </div>

        {/* Right: contact form */}
        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <ContactCard />
          </div>
        </aside>
      </div>
    </section>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div>
      <div className="eyebrow !text-muted-foreground mb-2">{label}</div>
      <div className="font-display text-3xl leading-none">{value}</div>
      <div className="text-xs mt-1 text-muted-foreground">{sub}</div>
    </div>
  );
}

function ContactCard() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      service: fd.get("service") || undefined,
      message: fd.get("message") || undefined,
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Got it — we'll ring you back to confirm.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <div className="deckle bg-card p-7 lg:p-9 relative grain">
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <div className="eyebrow">Reserve a chair</div>
          <h2 className="font-display text-3xl mt-2 leading-tight">Drop us a line.</h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground">№ 1106</span>
      </div>

      

        <button
          className="w-full mt-4 py-3.5 text-sm uppercase tracking-[0.28em] font-semibold border border-ink bg-ink text-cream hover:bg-primary hover:border-primary transition-colors disabled:opacity-60 mb-2"
          style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}
        >
          <a href={PHONE_HREF} className="">
            Call to Book
          </a>
        </button>

        <div className="rule-dashed my-2" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          Just call{" "}
          <a href={PHONE_HREF} className="text-primary underline underline-offset-4">
            {PHONE}
          </a>
          . Walk-ins always welcome.
        </p>
    </div>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow !text-muted-foreground block mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border py-2 text-base focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/60"
      />
    </div>
  );
}

/* ─────────── MARQUEE ─────────── */
function Marquee() {
  const items = ["Hot Towels", "Straight Razors", "Classic Cuts", "Since Coronado Was Coronado", "Bow Ties Tied", "Good With Kids", "Walk-Ins Welcome"];
  return (
    <div className="border-b border-border overflow-hidden py-4" style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_45s_linear_infinite] font-display text-2xl italic">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t} <span className="opacity-50">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

/* ─────────── SERVICES ─────────── */
function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
        <SectionHead eyebrow="The Menu" title={<>What we do,<br /><span className="italic font-light text-primary">and how it's done.</span></>} />

        <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-2">
          {SERVICES.map((s) => (
            <article key={s.no} className="group grid grid-cols-[auto_1fr_auto] gap-6 items-baseline py-6 border-b border-border">
              <span className="font-mono text-xs text-muted-foreground pt-1">{s.no}</span>
              <div>
                <h3 className="font-display text-2xl leading-tight group-hover:text-primary transition-colors">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">{s.desc}</p>
              </div>
              <span className="font-display text-xl tabular-nums">{s.price}</span>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground max-w-xl">
          Prices are a starting point — long hair, specialty work, and wedding parties may vary. Call and we'll be square with you.
        </p>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <div className="flex items-center gap-4 mb-6">
          <span className="eyebrow">{eyebrow}</span>
          <div className="flex-1 rule-dashed" />
        </div>
        <h2 className="font-display text-6xl lg:text-8xl leading-[0.92] tracking-tight">{title}</h2>
      </div>
    </div>
  );
}

/* ─────────── WHY US ─────────── */
function WhyUs() {
  return (
    <section id="why" className="border-b border-border relative overflow-hidden" style={{ backgroundColor: "color-mix(in oklab, var(--ink) 92%, var(--sienna))", color: "var(--cream)" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <span className="eyebrow !text-ochre" style={{ color: "var(--ochre)" }}>Why the chair</span>
            <div className="flex-1" style={{ height: 1, background: "color-mix(in oklab, var(--cream) 40%, transparent)" }} />
          </div>
          <h2 className="font-display text-6xl lg:text-7xl leading-[0.92]">
            Coronado's<br />
            <span className="italic font-light" style={{ color: "var(--ochre)" }}>quiet institution.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed" style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}>
            
          </p>
        </div>

        <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-12 self-center">
          {WHY.map((w, i) => (
            <li key={w.k} className="relative">
              <span className="font-mono text-xs opacity-60">0{i + 1}</span>
              <h3 className="font-display text-2xl mt-3 mb-3" style={{ color: "var(--cream)" }}>{w.k}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}>{w.v}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────── GALLERY ─────────── */
function Gallery() {
  return (
    <section id="gallery" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
        <SectionHead
          eyebrow="From the shop"
          title={<>A few frames <span className="italic font-light text-primary">.</span></>}
        />

        <div className="mt-14 grid grid-cols-12 gap-4 lg:gap-6">
          {/* <Frame src={g1} alt="Straight razor shave with hot towel steam" cls="col-span-6 md:col-span-4 aspect-[3/4]" caption="The hot shave" /> */}
          <Frame src={g2} alt="Vintage barber tools on leather" cls="col-span-6 md:col-span-4 aspect-square mt-8"  />
          <Frame src={g4} alt="Exterior of the barbershop on a Coronado street" cls="col-span-12 md:col-span-4 aspect-[4/3]"  />
          <Frame src={g5} alt="Man's classic haircut side profile" cls="col-span-6 md:col-span-5 aspect-[4/5] mt-4"  />
          <Frame src={g6} alt="Silk bow tie and scissors on marble" cls="col-span-6 md:col-span-3 aspect-[3/4]"  />
          <Frame src={g3} alt="A young boy smiling in a barber chair" cls="col-span-12 md:col-span-4 aspect-[4/5]"  />
        </div>
      </div>
    </section>
  );
}

function Frame({ src, alt, cls }: { src: string; alt: string; cls: string;  }) {
  return (
    <figure className={cls}>
      <div className="relative w-full h-full overflow-hidden deckle grain group">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
    </figure>
  );
}

/* ─────────── FAQ ─────────── */
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="eyebrow">Common questions</span>
          </div>
          <h2 className="font-display text-5xl lg:text-6xl leading-[0.95]">
            The things<br />
            <span className="italic font-light text-primary">folks ask.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-sm">
            If your question isn't here, the answer's a phone call away.
          </p>
        </div>

        <ul className="lg:col-span-8 border-t border-border">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-8 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    <span className="font-display text-xl lg:text-2xl leading-snug group-hover:text-primary transition-colors">
                      {f.q}
                    </span>
                  </div>
                  <span
                    className="font-display text-2xl text-primary shrink-0 transition-transform"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pl-10 pb-6 pr-12 text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ─────────── FINAL CTA ─────────── */
function FinalCta() {
  return (
    <section
      className="relative overflow-hidden border-b border-border grain"
      style={{ backgroundColor: "var(--ochre)", color: "var(--ink)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 text-center">
        <div className="eyebrow mb-6">Come by</div>
        <h2 className="font-display text-[14vw] lg:text-[11rem] leading-[0.86] tracking-[-0.04em]">
          The chair
          <span className="block italic font-light">is warm.</span>
        </h2>
        <p className="mt-8 text-lg max-w-xl mx-auto">
          Ring us, walk in, or send a note through the form up top.
          Either way, we'll be here — clippers on, coffee on.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={PHONE_HREF}
            className="px-8 py-4 text-sm uppercase tracking-[0.28em] font-semibold border border-ink"
            style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}
          >
            Call {PHONE}
          </a>
          <a
            href={MAPS}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 text-sm uppercase tracking-[0.28em] font-semibold border border-ink hover:bg-ink hover:text-cream transition-colors"
            style={{ color: "var(--ink)" }}
          >
            Get directions
          </a>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-left border-t border-ink/25 pt-10">
          <div>
            <div className="eyebrow mb-2" style={{ color: "var(--ink)", opacity: 0.7 }}>Address</div>
            <div className="font-display text-xl leading-snug">{ADDRESS}</div>
          </div>
          <div>
            <div className="eyebrow mb-2" style={{ color: "var(--ink)", opacity: 0.7 }}>Hours</div>
            {HOURS.map(([d, t]) => (
              <div key={d} className="flex justify-between font-display text-lg">
                <span>{d}</span>
                <span className="tabular-nums">{t}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="eyebrow mb-2" style={{ color: "var(--ink)", opacity: 0.7 }}>Phone</div>
            <a href={PHONE_HREF} className="font-display text-xl underline underline-offset-4">{PHONE}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── FOOTER ─────────── */
function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="font-display text-base text-foreground">
          Bow Ties <span className="italic font-light">&</span> Haircuts
        </div>
        <div className="font-mono uppercase tracking-[0.24em]">
          Coronado, California · MCMLXXVI-esque
        </div>
        <div>© {new Date().getFullYear()} — All haircuts reserved.</div>
      </div>
    </footer>
  );
}
