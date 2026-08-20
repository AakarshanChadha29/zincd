"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

export function ProductGallery({
  images,
}: {
  images: readonly GalleryImage[];
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  if (!current) return null;

  const move = (direction: number) => {
    setActive((index) => (index + direction + images.length) % images.length);
  };

  return (
    <div className="mt-12">
      <figure className="relative min-h-[30rem] overflow-hidden rounded-[var(--radius-panel)] md:min-h-[42rem]">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[color:var(--teal-900)]/80 via-transparent to-transparent"
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-white md:p-8">
          <div>
            <p className="text-technical text-[color:var(--aqua-400)]">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
            <p className="text-h2 mt-2 text-white">{current.label}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              className="flex size-11 items-center justify-center rounded-full border border-white/35 bg-black/20 transition hover:bg-white hover:text-[color:var(--teal-900)]"
              aria-label="Previous product image"
            >
              <ArrowLeft className="size-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="flex size-11 items-center justify-center rounded-full border border-white/35 bg-black/20 transition hover:bg-white hover:text-[color:var(--teal-900)]"
              aria-label="Next product image"
            >
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
        </figcaption>
      </figure>

      <div className="mt-4 grid grid-cols-4 gap-2 md:gap-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "relative aspect-[16/10] overflow-hidden rounded-[var(--radius-control)] border-2 transition",
              active === index
                ? "border-[color:var(--teal-700)]"
                : "border-transparent opacity-55 hover:opacity-100"
            )}
            aria-label={`Show ${image.label}`}
            aria-pressed={active === index}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="25vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
