import Reveal from "./Reveal";
import { BENEFITS } from "@/app/lib/site";

const ICONS: Record<string, React.ReactNode> = {
  fish: (
    <>
      <path
        d="M3 12c0-3.2 3.2-6 7.2-6 3 0 5.3 1.9 6.3 4.2L21 7v10l-4.5-3.2C15.5 16.1 13.2 18 10.2 18 6.2 18 3 15.2 3 12Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.5 8.5v7" strokeLinecap="round" />
      <circle cx="7" cy="10.5" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  shield: (
    <path
      d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Zm-3 9 2 2 4-4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  sparkle: (
    <>
      <path
        d="M12 3c3 4.5 6 8.2 6 11.5a6 6 0 1 1-12 0C6 11.2 9 7.5 12 3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 15.5a2.5 2.5 0 0 0 2.5 2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  heart: (
    <path
      d="M12 20s-7-4.35-9.5-9C1 7.5 3 4 6.5 4c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 4 23 7.5 21.5 11 19 15.65 12 20 12 20Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Benefits() {
  return (
    <section id="keunggulan" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Kenapa Sehati
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-forest sm:text-4xl">
            Keunggulan Kami
          </h2>
          <p className="mt-4 text-foreground/70">
            Setiap potong otak-otak dibuat dengan standar premium, dari
            pemilihan bahan hingga cara penyajian.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-forest/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest/5 text-forest transition-colors group-hover:bg-gold-light/20 group-hover:text-gold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    className="h-7 w-7"
                  >
                    {ICONS[item.icon]}
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-forest">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
