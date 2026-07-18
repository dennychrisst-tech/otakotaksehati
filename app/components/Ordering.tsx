import Reveal from "./Reveal";
import {
  DELIVERY_INFO,
  ORDER_STEPS,
  SOCIAL_LINKS,
  WHATSAPP_NUMBER,
  waLink,
} from "@/app/lib/site";

const DELIVERY_ICONS: Record<string, React.ReactNode> = {
  clock: (
    <path
      d="M12 7v5l3.5 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  map: (
    <path
      d="M9 20l-5-2V6l5 2m0 12 6-2m-6 2V8m6 10 5-2V4l-5 2m0 12V6m0 0L9 4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  truck: (
    <path
      d="M3 7h11v9H3V7Zm11 3h4l3 3v3h-7v-6Zm-9 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  wallet: (
    <path
      d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 4h18m-5 4h2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Ordering() {
  return (
    <section id="pesan" className="bg-forest py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Mudah &amp; Cepat
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-cream sm:text-4xl">
            Cara Pemesanan
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ORDER_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 120}>
              <div className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold-light/50 font-serif text-xl font-semibold text-gold-light">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERY_INFO.map((info, i) => (
            <Reveal key={info.title} delay={i * 100}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-gold-light/15 bg-cream/5 p-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold-light/10 text-gold-light">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    className="h-5 w-5"
                  >
                    {DELIVERY_ICONS[info.icon]}
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-cream">
                    {info.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-cream/60">
                    {info.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-gold-light/30 bg-gradient-to-b from-gold-light/10 to-transparent p-10 text-center">
            <h3 className="font-serif text-2xl font-semibold text-cream">
              Siap Menikmati Otak-Otak Sehati?
            </h3>
            <p className="mt-2 text-sm text-cream/65">
              Chat kami sekarang, pesanan Anda kami proses dengan sepenuh hati.
            </p>
            <a
              href={waLink("Halo, saya ingin memesan Otak-Otak Sehati.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-gold-light to-gold px-8 py-3 text-sm font-semibold text-forest-dark shadow-lg shadow-gold/20 transition-transform hover:scale-105"
            >
              Chat WhatsApp Sekarang
            </a>
            <p className="mt-4 text-xs text-cream/55">+{WHATSAPP_NUMBER}</p>

            <div className="mt-8 flex flex-col items-center gap-3 border-t border-gold-light/15 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-cream/55">
                Belanja Juga Di
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gold-light/30 px-5 py-2 text-sm font-medium text-cream/80 transition-colors hover:border-gold-light hover:text-gold-light"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
