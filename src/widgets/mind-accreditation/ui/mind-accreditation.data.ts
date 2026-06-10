import {
    FileCheck,
    ShieldCheck,
    Award,
    Users,
    TrendingUp,
    BadgeCheck,
    type LucideIcon,
} from "lucide-react";

export interface Certificate {
    icon: LucideIcon;
    iconColor: string;
    iconBg: string;
    title: string;
    subtitle: string;
    footer: string;
}

export const CERTIFICATES: Certificate[] = [
    {
        icon: FileCheck,
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50",
        title: "Лицензия на медицинскую деятельность",
        subtitle: "№ ЛО-77-01-012345 от 15.03.2010",
        footer: "Действует бессрочно",
    },
    {
        icon: ShieldCheck,
        iconColor: "text-green-600",
        iconBg: "bg-green-50",
        title: "Сертификат ISO 9001:2015",
        subtitle: "Система менеджмента качества",
        footer: "Международный стандарт",
    },
    {
        icon: Award,
        iconColor: "text-purple-600",
        iconBg: "bg-purple-50",
        title: "Аккредитация Минздрава",
        subtitle: "Соответствие федеральным стандартам",
        footer: "Пересмотр: 2026 год",
    },
];

export const BANNER_STATS = [
    { icon: Users, value: "50 000+", label: "Довольных пациентов" },
    { icon: TrendingUp, value: "99.2%", label: "Положительных отзывов" },
    { icon: BadgeCheck, value: "15 лет", label: "Опыта работы" },
];
