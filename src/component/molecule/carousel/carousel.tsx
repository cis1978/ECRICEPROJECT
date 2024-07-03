"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import {
  DotButton,
  useDotButton,
} from "@/component/molecule/carousel/carousel-dot";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
}

const Carousel = ({ slides, options }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, []);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section className="embla mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((node, index) => (
            <div
              className="flex-[0_0_32%] min-w-0 mx-1"
              key={index}>
              {node}
            </div>
          ))}
        </div>
      </div>

      <div className="grid justify-center mt-5">
        <div className="embla__dots flex gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"bg-slate-200/80 rounded-full border-slate-400 border-2 w-4 h-4".concat(
                index === selectedIndex ? " bg-lime-300" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
