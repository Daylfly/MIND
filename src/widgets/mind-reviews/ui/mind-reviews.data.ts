import { MIND_IMAGES } from "@/data/images.data";

export interface MindReview {
    doctorName: string;
    doctorRole: string;
    doctorAvatarUrl: string;
    text: string;
    authorName: string;
    rating: number;
}

export const MIND_REVIEWS: MindReview[] = [
    {
        doctorName: "Александр Волков",
        doctorRole: "Главный кардиолог, д.м.н.",
        doctorAvatarUrl: MIND_IMAGES.doctors.volkov,
        text: "Потрясающий врач! Внимательно выслушал все жалобы, назначил только необходимые анализы. Благодаря его лечению я снова могу вести активный образ жизни без ограничений.",
        authorName: "Анна и Максим",
        rating: 5,
    },
    {
        doctorName: "Олег Петров",
        doctorRole: "Врач-невролог, к.м.н.",
        doctorAvatarUrl: MIND_IMAGES.doctors.petrova,
        text: "Обратилась с сильными головными болями. Доктор провела детальное обследование, нашла причину и подобрала терапию. Уже через две недели самочувствие значительно улучшилось.",
        authorName: "Елена К.",
        rating: 5,
    },
    {
        doctorName: "Игорь Соколов",
        doctorRole: "Эндокринолог, д.м.н.",
        doctorAvatarUrl: MIND_IMAGES.doctors.volkov,
        text: "Профессионал высочайшего уровня. Составил индивидуальную программу лечения, всё объяснил понятным языком. Результаты анализов улучшились уже через месяц.",
        authorName: "Дмитрий В.",
        rating: 5,
    },
];

export const REVIEWS_SUBTITLE =
    "Лучшее подтверждение нашего профессионализма — это доверие и благодарность пациентов, чьё здоровье мы вернули.";
