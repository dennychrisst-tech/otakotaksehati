import Image from "next/image";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { ABOUT } from "@/app/lib/site";

export default function About() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-cream py-24">
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-gold/15 blur-2xl" />
            <Image
              src="/logo.png"
              alt="Otak-Otak Sehati"
              width={340}
              height={340}
              className="animate-float-slow rounded-full shadow-[0_0_80px_-15px_rgba(212,175,55,0.5)]"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {ABOUT.eyebrow}
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-forest sm:text-4xl">
              {ABOUT.title}
            </h2>
          </Reveal>

          {ABOUT.paragraphs.map((p, i) => (
            <Reveal key={i} delay={100 + i * 100}>
              <p className="mt-4 leading-relaxed text-foreground/70">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-forest/10 pt-8 sm:grid-cols-4">
              {ABOUT.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-semibold text-forest">
                    {"display" in stat ? (
                      stat.display
                    ) : (
                      <Counter value={stat.value} suffix={stat.suffix} />
                    )}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-foreground/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
