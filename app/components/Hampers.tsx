import Image from "next/image";
import Reveal from "./Reveal";
import { HAMPERS, waLink } from "@/app/lib/site";

export default function Hampers() {
  return (
    <section id="hampers" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Edisi Spesial
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-forest sm:text-4xl">
            Paket Hampers
          </h2>
          <p className="mt-4 text-foreground/70">
            Rayakan momen spesial dengan hampers Otak-Otak Sehati — dikemas
            elegan untuk hadiah maupun suguhan keluarga.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {HAMPERS.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="group overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/10">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-dark/80 to-transparent p-4">
                    <span className="inline-block rounded-full bg-gold-light/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-forest-dark">
                      {item.occasion}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {item.description}
                  </p>
                  <a
                    href={waLink(`Halo, saya ingin menanyakan ${item.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block rounded-full border border-forest/15 px-5 py-2 text-sm font-medium text-forest transition-colors group-hover:border-gold group-hover:bg-gold-light/10"
                  >
                    Tanya Detail
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
