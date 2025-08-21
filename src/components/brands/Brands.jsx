// src/components/Brands.jsx
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Carrega automaticamente as imagens da pasta (Vite)
const logoModules = import.meta.glob(
  "../../assets/brands/*.{svg,png,jpg,jpeg,webp}",
  { eager: true, as: "url" }
);
const logos = Object.values(logoModules);

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function altFromUrl(url) {
  const name = (url.split("/").pop() || "").replace(/\.[^.]+$/, "");
  return name.replace(/[-_]+/g, " ").trim();
}

export default function Brands() {
  const slides = chunk(logos, 9);

  return (
    <section
    id="parceiros"
    className="py-18 bg-gray-950">
      <div
        data-aos="fade-up"
        data-aos-offset="120"
        data-aos-delay="100"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="mx-auto max-w-screen-xl px-4">
          <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Parceiros
          </h2>

          <div className="mt-8">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[
                Autoplay({
                  delay: 2500,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="relative"
            >
              <CarouselContent>
                {slides.length > 0 ? (
                  slides.map((slide, idx) => (
                    <CarouselItem key={idx}>
                      <div className="border-2 border-gray-800 rounded-2xl p-6">
                        {/* 3x3 = 9 logos por slide */}
                        <div className="grid grid-cols-3 gap-12 place-items-center">
                          {slide.map((src, i) => (
                            <div
                              key={`${idx}-${i}`}
                              className="w-full flex items-center justify-center"
                            >
                              <img
                                src={src}
                                alt={altFromUrl(src)}
                                loading="lazy"
                                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
                              />
                            </div>
                          ))}
                          {/* Preenche para manter 9 células quando faltar imagem */}
                          {slide.length < 9 &&
                            Array.from({ length: 9 - slide.length }).map(
                              (_, k) => (
                                <div key={`pad-${k}`} className="h-full" />
                              )
                            )}
                        </div>
                      </div>
                    </CarouselItem>
                  ))
                ) : (
                  <CarouselItem>
                    <div className="border-2 border-gray-800 rounded-2xl p-10 text-center text-gray-400">
                      Coloque suas imagens em <code>src/assets/brands/</code>
                    </div>
                  </CarouselItem>
                )}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
