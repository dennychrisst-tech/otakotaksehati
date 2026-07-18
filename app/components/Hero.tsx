import Image from "next/image";
import Reveal from "./Reveal";
import Marquee from "./Marquee";
import HeroBackground from "./HeroBackground";
import { waLink } from "@/app/lib/site";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate overflow-hidden bg-forest-dark pt-24 sm:pt-28"
    >
      <HeroBackground />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-gold-light/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 pb-14 pt-10 text-center sm:gap-8 sm:pb-20 sm:pt-12">
        <Reveal>
          <Image
            src="/logo.png"
            alt="Logo Otak-Otak Sehati"
            width={140}
            height={140}
            priority
            className="animate-float rounded-full shadow-[0_0_60px_-10px_rgba(212,175,55,0.6)]"
          />
        </Reveal>

        <Reveal delay={100}>
          <span className="inline-block rounded-full border border-gold-light/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Kualitas Premium, Dibuat Dengan Hati
          </span>
        </Reveal>

        <Reveal delay={200}>
          <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl md:text-6xl">
            Otak-Otak <span className="text-shimmer italic">Sehati</span>
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="max-w-xl text-balance text-lg leading-relaxed text-cream/75">
            Kelezatan otak-otak ikan tenggiri asli, diracik dengan resep
            rumahan tanpa pengawet — untuk keluarga yang mengutamakan rasa dan
            kesehatan.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={waLink("Halo, saya ingin memesan Otak-Otak Sehati.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-gold-light to-gold px-8 py-3 text-sm font-semibold text-forest-dark shadow-lg shadow-gold/20 transition-transform hover:scale-105"
            >
              Pesan Sekarang via WhatsApp
            </a>
            <a
              href="#menu"
              className="rounded-full border border-gold-light/40 px-8 py-3 text-sm font-semibold text-cream transition-colors hover:border-gold-light hover:text-gold-light"
            >
              Lihat Menu &amp; Harga
            </a>
          </div>
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-4 text-sm text-cream/70">
          <Reveal delay={500}>
            <span className="flex items-center gap-2">
              <span className="text-gold-light">✓</span> 100% Ikan Tenggiri Asli
            </span>
          </Reveal>
          <Reveal delay={550}>
            <span className="flex items-center gap-2">
              <span className="text-gold-light">✓</span> Tanpa Pengawet
            </span>
          </Reveal>
          <Reveal delay={600}>
            <span className="flex items-center gap-2">
              <span className="text-gold-light">✓</span> Higienis Terjamin
            </span>
          </Reveal>
        </div>

        <Reveal delay={600}>
          <a
            href="#tentang"
            aria-label="Scroll ke bawah"
            className="mt-2 flex flex-col items-center gap-1 text-cream/60 transition-colors hover:text-gold-light"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              className="h-5 w-5 animate-bounce motion-reduce:animate-none"
            >
              <path
                d="M6 9l6 6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Reveal>
      </div>

      <Marquee />
    </section>
  );
}
