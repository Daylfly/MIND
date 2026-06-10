"use client";

import type { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderProps {
    slides: React.ReactNode[];
    spaceBetween?: number;
    slidesPerView?: number | "auto";
    breakpoints?: SwiperOptions["breakpoints"];
    className?: string;
    navigation?: boolean;
    loop?: boolean;
    autoplay?: boolean | { delay: number; disableOnInteraction: boolean };
}

export const Slider: React.FC<SliderProps> = ({
                                                  slides,
                                                  spaceBetween = 30,
                                                  slidesPerView = 1,
                                                  breakpoints,
                                                  className = "",
                                                  navigation = true,
                                                  loop = true,
                                                  autoplay = { delay: 4500, disableOnInteraction: false },
                                              }) => {
    return (
        <div className={`relative ${className}`}>
            {/* Стрелки */}
            {navigation && (
                <>
                    <button className="swiper-button-prev-custom absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all">
                        <ChevronLeft size={28} className="text-gray-700" />
                    </button>
                    <button className="swiper-button-next-custom absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all">
                        <ChevronRight size={28} className="text-gray-700" />
                    </button>
                </>
            )}

            <Swiper

                modules={[Navigation, Autoplay]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                breakpoints={breakpoints}
                loop={loop}
                autoplay={autoplay}
                speed={800}
                navigation={
                    navigation
                        ? {
                            prevEl: ".swiper-button-prev-custom",
                            nextEl: ".swiper-button-next-custom",
                        }
                        : undefined // ← ВОТ ГЛАВНОЕ ИСПРАВЛЕНИЕ: undefined, а не false!
                }
                className="py-4"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>{slide}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};