import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/app/lib/site";

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Kata Mereka
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-forest sm:text-4xl">
            Testimoni Pelanggan
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className="h-full rounded-2xl border border-forest/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s}>★</span>
                  ))}
                </div>
                <p className="mt-4 text-sm italic leading-relaxed text-foreground/75">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-forest/10 pt-4">
                  <p className="font-serif font-semibold text-forest">
                    {t.name}
                  </p>
                  <p className="text-xs text-foreground/50">{t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
