"use client";

import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { ServiceCard } from "@/components/shared/service-card";
import { MIND_SERVICES } from "./mind-services.data";

interface MindServicesProps {
    className?: string;
}

export const SectionUi: React.FC<MindServicesProps> = ({ className }) => {
    return (
        <section id="services" className={cn("py-12 sm:py-16 lg:py-20", className)}>
            <Container>
                <SectionHeader
                    badge="Наши направления"
                    title="Высококвалифицированная медицинская помощь"
                    description="Предоставляем полный спектр медицинских услуг с использованием современного оборудования и передовых методик лечения."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                    {MIND_SERVICES.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </Container>
        </section>
    );
};
