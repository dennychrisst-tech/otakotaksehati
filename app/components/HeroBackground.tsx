"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO_IMAGES } from "@/app/lib/site";

export default function HeroBackground() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-20">
      {HERO_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/75 via-forest-dark/55 to-forest-dark/80" />
    </div>
  );
}
