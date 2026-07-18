import Image from "next/image";
import LeafBackground from "./LeafBackground";
import { NAV_LINKS, SOCIAL_LINKS, WHATSAPP_NUMBER } from "@/app/lib/site";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  shopee: (
    <path
      d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8Zm3 0V6a3 3 0 0 1 6 0v2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-gold-light/10 bg-forest-dark py-12">
      <LeafBackground />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
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

        <p className="max-w-sm text-sm text-cream/60">
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

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-light/30 text-cream/70 transition-colors hover:border-gold-light hover:text-gold-light"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                className="h-5 w-5"
              >
                {SOCIAL_ICONS[social.icon]}
              </svg>
            </a>
          ))}
        </div>

        <p className="text-xs text-cream/55">
          WhatsApp: +{WHATSAPP_NUMBER} &middot; &copy;{" "}
          {new Date().getFullYear()} Otak-Otak Sehati. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}
