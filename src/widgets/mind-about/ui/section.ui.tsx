import Image from "next/image";
import { cn } from "@/lib/utils";
import Container from "@/components/shared/container";
import { StatItem } from "@/components/shared/stat-item";
import { MIND_IMAGES } from "@/data/images.data";
import { ABOUT_STATS } from "./mind-about.data";

interface MindAboutProps {
    className?: string;
}

export const SectionUi: React.FC<MindAboutProps> = ({ className }) => {
    return (
        <section id="about" className={cn("py-12 sm:py-16 lg:py-20 bg-mind-section", className)}>
            <Container>
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                        <Image
                            src={MIND_IMAGES.about}
                            alt="Команда врачей клиники MIND"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                            Мы объединили{" "}
                            <span className="text-mind-primary">опыт</span> и передовые технологии
                        </h2>

                        <p className="text-mind-muted text-base sm:text-lg leading-relaxed">
                            Наша клиника оснащена современным диагностическим оборудованием экспертного
                            класса. Каждый специалист проходит регулярное повышение квалификации и
                            применяет доказательные методы лечения.
                        </p>

                        <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-2">
                            {ABOUT_STATS.map((stat) => (
                                <StatItem key={stat.label} value={stat.value} label={stat.label} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
