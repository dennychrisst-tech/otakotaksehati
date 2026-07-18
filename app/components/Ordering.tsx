import Reveal from "./Reveal";
import { ORDER_STEPS, WHATSAPP_NUMBER, waLink } from "@/app/lib/site";

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

        <Reveal delay={300}>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-gold-light/30 bg-gradient-to-b from-gold-light/10 to-transparent p-10 text-center">
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
            <p className="mt-4 text-xs text-cream/40">+{WHATSAPP_NUMBER}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
