import Image from "next/image";
import Reveal from "./Reveal";
import { MENU_CATEGORY_BG, MENU_ITEMS, MENU_NOTE, waLink } from "@/app/lib/site";

function MenuCard({
  item,
  delay,
}: {
  item: (typeof MENU_ITEMS)[number];
  delay: number;
}) {
  const featured = "featured" in item && item.featured;

  return (
    <Reveal delay={delay}>
      <div
        className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-cream/5 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/10 ${
          featured ? "border-gold shadow-lg shadow-gold/10" : "border-cream/10"
        }`}
      >
        <div className="relative aspect-square overflow-hidden bg-forest/40">
          <Image
            src={MENU_CATEGORY_BG[item.category]}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/15 to-transparent" />
          {featured && (
            <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-forest-dark">
              Favorit
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-serif text-xl font-semibold text-cream">
            {item.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/60">
            {item.description}
          </p>
          <div className="mt-5 flex items-baseline gap-1.5">
            <span className="font-serif text-2xl font-semibold text-gold-light">
              {item.price}
            </span>
            <span className="text-xs text-cream/50">{item.unit}</span>
          </div>
          <a
            href={waLink(`Halo, saya ingin memesan ${item.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 rounded-full border border-gold-light/40 py-2 text-center text-sm font-medium text-cream transition-colors group-hover:border-gold-light group-hover:bg-gold-light/10"
          >
            Pesan
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Menu() {
  const otakOtak = MENU_ITEMS.filter((item) => item.category === "otak-otak");
  const puding = MENU_ITEMS.filter((item) => item.category === "puding");

  return (
    <section id="menu" className="bg-forest-dark py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Varian &amp; Ukuran
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-cream sm:text-4xl">
            Menu &amp; Harga
          </h2>
          <p className="mt-4 text-cream/65">{MENU_NOTE}</p>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <h3 className="font-serif text-xl font-semibold text-gold-light">
              Otak-Otak
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otakOtak.map((item, i) => (
              <MenuCard key={item.name} item={item} delay={i * 100} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="font-serif text-xl font-semibold text-gold-light">
              Puding
            </h3>
          </Reveal>
          <div className="mx-auto mt-6 grid max-w-2xl gap-6 sm:grid-cols-2">
            {puding.map((item, i) => (
              <MenuCard key={item.name} item={item} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
