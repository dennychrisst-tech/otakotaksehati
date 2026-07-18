import FAQItem from "./FAQItem";
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
              <FAQItem question={item.question} answer={item.answer} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
