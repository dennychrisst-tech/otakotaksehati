import Reveal from "./Reveal";
import { FAQ_ITEMS } from "@/app/lib/site";

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Pertanyaan Umum
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-forest sm:text-4xl">
            FAQ
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.question} delay={i * 80}>
              <details className="group rounded-2xl border border-forest/10 bg-white px-6 py-4 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base font-semibold text-forest marker:content-none">
                  {item.question}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5 flex-shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
