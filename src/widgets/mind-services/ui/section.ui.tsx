"use client";

import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { ServiceCard } from "@/components/shared/service-card";
import { useAppData } from "@/components/shared/data-provider";

interface MindServicesProps {
    className?: string;
}

export const SectionUi: React.FC<MindServicesProps> = ({ className }) => {
    const { services, loading } = useAppData();
    const displayServices = services.filter((s) => s.slug !== "general");

    return (
        <section id="services" className={cn("py-12 sm:py-16 lg:py-20", className)}>
            <Container>
                <SectionHeader
                    badge="Наши направления"
                    title="Высококвалифицированная медицинская помощь"
                    description="Предоставляем полный спектр медицинских услуг с использованием современного оборудования и передовых методик лечения."
                />

                {loading ? (
                    <p className="text-center text-mind-muted">Загрузка услуг…</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                        {displayServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
};
