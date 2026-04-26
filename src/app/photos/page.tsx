"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { photoAlbums } from "@/data/photos";
import { BASE_PATH } from "@/lib/basePath";
import { X } from "lucide-react";

export default function PhotosPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Container className="pt-10">
      <h1 className="text-2xl font-semibold">Photos</h1>
      <p className="mt-2 text-sm text-white/70">
        Conference presentations, research milestones, and academic events.
      </p>

      <div className="mt-8 space-y-10">
        {photoAlbums.map((album) => (
          <section key={album.id}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-xl font-semibold">{album.title}</h2>
              <span className="text-sm text-white/50">{album.date} · {album.location}</span>
            </div>

            {album.description && (
              <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-2xl">
                {album.description}
              </p>
            )}

            <div
              className={[
                "mt-4 grid gap-3",
                album.photos.length === 1
                  ? "grid-cols-1 max-w-lg"
                  : album.photos.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2",
              ].join(" ")}
            >
              {album.photos.map((photo) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightbox({ src: photo.src, alt: photo.alt })}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                >
                  <img
                    src={`${BASE_PATH}${photo.src}`}
                    alt={photo.alt}
                    className="w-full object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-90"
                    style={{ aspectRatio: "4/3" }}
                  />
                  {photo.caption && (
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent px-3 py-2">
                      <p className="text-xs text-white/80">{photo.caption}</p>
                    </div>
                  )}
                </button>
              ))}
            </div>

          </section>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 rounded-full border border-white/15 bg-white/10 p-2 text-white hover:bg-white/20 transition"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <img
            src={`${BASE_PATH}${lightbox.src}`}
            alt={lightbox.alt}
            className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Container>
  );
}
