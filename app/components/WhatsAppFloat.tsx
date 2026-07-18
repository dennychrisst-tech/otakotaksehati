import { waLink } from "@/app/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Halo, saya ingin memesan Otak-Otak Sehati.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50 motion-reduce:animate-none" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M17.6 6.32A8.86 8.86 0 0 0 3.2 16.86L2 22l5.28-1.38a8.86 8.86 0 0 0 4.24 1.08h.01c4.9 0 8.87-3.97 8.87-8.86 0-2.37-.92-4.6-2.6-6.52ZM11.53 20.1h-.01a7.36 7.36 0 0 1-3.75-1.03l-.27-.16-2.79.73.75-2.72-.18-.28a7.36 7.36 0 0 1-1.13-3.93 7.4 7.4 0 0 1 12.63-5.24 7.34 7.34 0 0 1 2.17 5.25c0 4.08-3.33 7.38-7.42 7.38Zm4.04-5.53c-.22-.11-1.31-.65-1.51-.72-.2-.07-.35-.11-.5.11-.15.22-.57.72-.7.87-.13.15-.26.16-.48.06-.22-.11-.94-.35-1.79-1.1-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.21-.69-1.66-.18-.44-.36-.38-.5-.38-.13-.01-.28-.01-.43-.01a.83.83 0 0 0-.6.28c-.2.22-.79.77-.79 1.87s.81 2.17.92 2.32c.11.15 1.6 2.44 3.87 3.42.54.23.96.37 1.29.48.54.17 1.03.15 1.42.09.43-.06 1.31-.54 1.5-1.05.18-.51.18-.95.13-1.05-.05-.1-.2-.16-.42-.27Z" />
        </svg>
      </span>
    </a>
  );
}
