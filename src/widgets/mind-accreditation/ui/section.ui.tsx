import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { MindBadge } from "@/components/shared/mind-badge";
import { CERTIFICATES, BANNER_STATS } from "./mind-accreditation.data";

interface MindAccreditationProps {
    className?: string;
}

export const SectionUi: React.FC<MindAccreditationProps> = ({ className }) => {
    return (
        <section id="accreditation" className={cn("py-12 sm:py-16 lg:py-20", className)}>
            <Container>
                <SectionHeader
                    badge="Аккредитация и сертификация"
                    title="Работаем по всем стандартам качества"
                    description="Наша клиника имеет все необходимые лицензии и сертификаты, подтверждающие высокий уровень медицинской помощи."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
                    {CERTIFICATES.map((cert) => {
                        const Icon = cert.icon;
                        return (
                            <div
                                key={cert.title}
                                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                            >
                                <div
                                    className={cn(
                                        "mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-100",
                                        cert.iconBg
                                    )}
                                >
                                    <Icon className={cn("h-6 w-6", cert.iconColor)} />
                                </div>
                                <h3 className="mb-2 font-semibold text-gray-900">{cert.title}</h3>
                                <p className="text-sm text-mind-muted">{cert.subtitle}</p>
                                <p className="mt-auto pt-4 text-xs text-mind-muted">{cert.footer}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-mind-primary to-mind-teal p-8 sm:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {BANNER_STATS.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div key={stat.label} className="flex items-center gap-4 text-white">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
                                        <p className="text-sm text-white/80">{stat.label}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-6 flex justify-center">
                    <MindBadge className="px-6 py-2.5 text-center text-sm sm:text-base">
                        Все специалисты клиники имеют действующие сертификаты и регулярно проходят
                        повышение квалификации
                    </MindBadge>
                </div>
            </Container>
        </section>
    );
};
