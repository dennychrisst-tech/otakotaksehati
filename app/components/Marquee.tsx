import { TICKER_ITEMS } from "@/app/lib/site";

export default function Marquee() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="overflow-hidden border-y border-gold-light/30 bg-forest-dark py-3"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-sm font-medium tracking-wide text-gold-light/90"
          >
            {item}
            <span className="text-gold-light/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
