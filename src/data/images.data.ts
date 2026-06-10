/**
 * Медицинские фото с Unsplash — подобраны по смыслу секций.
 * https://unsplash.com/license
 */
export const MIND_IMAGES = {
    /** Врач консультирует пациента в кабинете */
    hero: "https://images.unsplash.com/photo-1631217868264-e5b987cc2a88?w=840&q=80&auto=format&fit=crop",
    /** Портретное фото для hero-блока */
    heroPortrait:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=800&fit=crop&crop=center&q=80&auto=format",

    /** Команда врачей на совещании */
    about: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=840&q=80&auto=format&fit=crop",

    services: {
        /** Кардиолог с стетоскопом */
        heart: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=640&q=80&auto=format&fit=crop",
        /** МРТ / неврологическое обследование */
        neurology: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=640&q=80&auto=format&fit=crop",
        /** Проверка зрения */
        ophthalmology: "https://images.unsplash.com/photo-1579163533816-59bb8cedde08?w=640&q=80&auto=format&fit=crop",
        /** Консультация эндокринолога */
        endocrinology: "https://images.unsplash.com/photo-1579154200840-7f5664b736b4?w=640&q=80&auto=format&fit=crop",
        /** Первичный приём у терапевта */
        general: "https://images.unsplash.com/photo-1584982751601-97dcc0966596?w=640&q=80&auto=format&fit=crop",
    },

    /** Портреты врачей для карточек отзывов */
    doctors: {
        volkov: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face&auto=format",
        petrova: "https://img.freepik.com/free-photo/portrait-male-doctor_23-2148480369.jpg?w=200&h=200&fit=crop&crop=face&auto=format",
        sokolov: "https://images.unsplash.com/photo-1582750433449-63827b6db258?w=200&h=200&fit=crop&crop=face&auto=format",
    },
} as const;
