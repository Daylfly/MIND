"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import { MindBadge } from "@/components/shared/mind-badge";
import { BookButton } from "@/components/shared/book-button";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { MIND_IMAGES } from "@/data/images.data";
import { useAppData } from "@/components/shared/data-provider";
import { HERO_CONTENT } from "./mind-hero.data";

interface MindHeroProps {
    className?: string;
}

export const SectionUi: React.FC<MindHeroProps> = ({ className }) => {
    const { generalService } = useAppData();

    return (
        <section id="hero" className={cn("py-12 sm:py-16 lg:py-24 bg-white", className)}>
            <Container>
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-6 sm:space-y-8">
                        <MindBadge>{HERO_CONTENT.badge}</MindBadge>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight">
                            <span className="block text-gray-900">{HERO_CONTENT.titleLine1}</span>
                            <span className="block text-mind-primary">{HERO_CONTENT.titleLine2}</span>
                        </h1>

                        <p className="max-w-lg text-base sm:text-lg leading-relaxed text-mind-muted">
                            {HERO_CONTENT.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                            {generalService && (
                                <BookButton
                                    service={generalService}
                                    className="h-12 rounded-2xl cursor-pointer bg-mind-primary px-8 text-base font-medium text-white shadow-sm hover:bg-mind-primary-dark"
                                >
                                    Записаться на прием
                                </BookButton>
                            )}
                            <Button
                                variant="outline"
                                className=" border-border border-2 cursor-pointer h-12 rounded-2xl border-gray-200 bg-white px-8 text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                                <Phone className="h-4 w-4 text-red-500 " />
                                Экстренная связь
                            </Button>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:justify-end py-4 lg:py-0">
                        <div className="relative w-[260px] sm:w-[400px] lg:w-[540px]">
                            <div
                                className="absolute -right-3 -top-3 bottom-3 left-3 rounded-[2rem] bg-mind-mint rotate-6"
                                aria-hidden
                            />
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.75rem] bg-gray-200 shadow-lg">
                                <Image
                                    src={MIND_IMAGES.heroPortrait}
                                    alt="Врач консультирует пациента в клинике SKIN EXPERT"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 70vw, 640px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
