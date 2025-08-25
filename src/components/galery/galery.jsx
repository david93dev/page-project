import React, { useEffect, useState } from "react";
import img1 from "../../assets/img/img1.webp";
import img2 from "../../assets/img/img2.webp";
import img3 from "../../assets/img/img3.webp";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Galery() {
  const images = [
    { src: img1, alt: "Imagem 1" },
    { src: img2, alt: "Imagem 2" },
    { src: img3, alt: "Imagem 3" },
    // adicione mais aqui… quando passar de 3 ativa o carousel
  ];

  const useCarousel = images.length > 3;

  // lightbox
  const [active, setActive] = useState(null);
  const isOpen = active !== null;

  // ESC para fechar e travar scroll quando aberto
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 scroll-mt-28">
      <div className="mx-auto max-w-screen-2xl px-4">
        {/* <= 3 imagens: grade simples */}
        {!useCarousel && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActive(idx)}
                className="group block overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-64 md:h-74 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
            ))}
          </div>
        )}

        {/* > 3 imagens: carrossel shadcn/embla */}
        {useCarousel && (
          <Carousel 
          opts={{ align: "start", loop: true }} 
          className="relative"
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          >
            <CarouselContent>
              {images.map((img, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <button
                    type="button"
                    onClick={() => setActive(idx)}
                    className="group block overflow-hidden rounded-sm"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>

          
          </Carousel>
        )}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[active].src}
              alt={images[active].alt}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setActive(null)}
              aria-label="Fechar"
              className="absolute text-2xl -top-3 -right-3 rounded-full bg-white/90 px-2 py-1 text-gray-900 shadow hover:bg-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
