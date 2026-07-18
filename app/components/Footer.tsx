import Image from "next/image";
import { NAV_LINKS, WHATSAPP_NUMBER } from "@/app/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-gold-light/10 bg-forest-dark py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Otak-Otak Sehati"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-serif text-lg font-semibold text-cream">
            Otak-Otak Sehati
          </span>
        </div>

        <p className="max-w-sm text-sm text-cream/50">
          Otak-otak ikan tenggiri asli, dibuat dengan sepenuh hati.
        </p>

        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/60 transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-cream/40">
          WhatsApp: +{WHATSAPP_NUMBER} &middot; &copy;{" "}
          {new Date().getFullYear()} Otak-Otak Sehati. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}
