import { HeartPulse, Brain, Eye, Activity, Stethoscope } from "lucide-react";
import { MIND_IMAGES } from "@/data/images.data";
import type { MindServiceDetail } from "@/types/service-detail.interface";

export type { MindServiceDetail };

export const MIND_SERVICES: MindServiceDetail[] = [
    {
        id: "heart-checkup",
        icon: HeartPulse,
        iconColor: "text-red-500",
        iconBg: "bg-red-50",
        title: "Чек-ап «Здоровое сердце»",
        description:
            "Комплексное обследование сердечно-сосудистой системы с использованием современного диагностического оборудования.",
        fullDescription:
            "Комплексное обследование сердечно-сосудистой системы. Включает консультацию кардиолога, ЭКГ, УЗИ сердца и анализы крови. Рекомендуется проходить ежегодно для профилактики сердечно-сосудистых заболеваний.",
        price: 4500,
        specialists: ["Д-р Иванов А.С.", "Д-р Смирнова Е.В."],
        schedule: {
            hours: "Пн–Вс: 08:00 – 21:00",
            note: "По предварительной записи",
        },
        image: MIND_IMAGES.services.heart,
    },
    {
        id: "neurology",
        icon: Brain,
        iconColor: "text-green-600",
        iconBg: "bg-green-50",
        title: "Неврология",
        description:
            "Диагностика и лечение заболеваний нервной системы. Консультации ведущих неврологов с многолетним опытом.",
        fullDescription:
            "Диагностика и лечение заболеваний нервной системы: головные боли, головокружения, нарушения сна, невралгии. Проводим ЭЭГ, МРТ-консультации и нейросонографию. Индивидуальный план лечения для каждого пациента.",
        price: 3200,
        specialists: ["Д-р Петрова О.В.", "Д-р Козлов Д.И."],
        schedule: {
            hours: "Пн–Пт: 09:00 – 20:00",
            note: "Сб: 10:00 – 16:00",
        },
        image: MIND_IMAGES.services.neurology,
    },
    {
        id: "ophthalmology",
        icon: Eye,
        iconColor: "text-purple-600",
        iconBg: "bg-purple-50",
        title: "Офтальмология",
        description:
            "Полный спектр услуг по диагностике и лечению заболеваний глаз. Лазерная коррекция зрения.",
        fullDescription:
            "Полный спектр услуг по диагностике и лечению заболеваний глаз: проверка остроты зрения, подбор очков и линз, лечение конъюнктивитов и глаукомы. Лазерная коррекция зрения по современным протоколам.",
        price: 2800,
        specialists: ["Д-р Волкова М.А.", "Д-р Лебедев С.П."],
        schedule: {
            hours: "Пн–Сб: 08:00 – 19:00",
            note: "По предварительной записи",
        },
        image: MIND_IMAGES.services.ophthalmology,
    },
    {
        id: "endocrinology",
        icon: Activity,
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50",
        title: "Эндокринология",
        description:
            "Диагностика и лечение заболеваний эндокринной системы. Индивидуальные программы коррекции обмена веществ.",
        fullDescription:
            "Диагностика и лечение заболеваний щитовидной железы, сахарного диабета, ожирения и нарушений обмена веществ. Разработка индивидуальных программ питания и медикаментозной терапии под контролем эндокринолога.",
        price: 3500,
        specialists: ["Д-р Морозова Т.К.", "Д-р Фёдоров А.Н."],
        schedule: {
            hours: "Пн–Вс: 08:00 – 20:00",
            note: "По предварительной записи",
        },
        image: MIND_IMAGES.services.endocrinology,
    },
];

export const GENERAL_APPOINTMENT: MindServiceDetail = {
    id: "general",
    icon: Stethoscope,
    iconColor: "text-mind-teal",
    iconBg: "bg-mind-mint",
    title: "Запись на приём",
    description: "Первичная консультация с врачом-терапевтом клиники SKIN EXPERT.",
    fullDescription:
        "Первичный приём в клинике SKIN EXPERT. Врач проведёт осмотр, соберёт анамнез и направит к нужному специалисту или назначит обследование. Подходит, если вы не уверены, к какому врачу обратиться.",
    price: 2500,
    specialists: ["Д-р Соколова Н.Р.", "Д-р Белов И.М."],
    schedule: {
        hours: "Пн–Вс: 08:00 – 21:00",
        note: "По предварительной записи",
    },
    image: MIND_IMAGES.services.general,
};

export function formatPrice(price: number): string {
    return `${price.toLocaleString("ru-RU")} ₽`;
}
