import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const MIND_IMAGES = {
  services: {
    heart: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=640&q=80&auto=format&fit=crop",
    neurology: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=640&q=80&auto=format&fit=crop",
    ophthalmology: "https://images.unsplash.com/photo-1579163533816-59bb8cedde08?w=640&q=80&auto=format&fit=crop",
    endocrinology: "https://images.unsplash.com/photo-1579154200840-7f5664b736b4?w=640&q=80&auto=format&fit=crop",
    general: "https://images.unsplash.com/photo-1584982751601-97dcc0966596?w=640&q=80&auto=format&fit=crop",
  },
  doctors: {
    volkov: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face&auto=format",
    petrova: "https://img.freepik.com/free-photo/portrait-male-doctor_23-2148480369.jpg?w=200&h=200&fit=crop&crop=face&auto=format",
    sokolov: "https://i.pinimg.com/736x/0f/67/42/0f6742dba7aa0232a583b21bbcbe1486.jpg?w=200&h=200&fit=crop&crop=face&auto=format",
  },
};

async function main() {
  await prisma.booking.deleteMany();
  await prisma.service.deleteMany();
  await prisma.doctor.deleteMany();
  await prisma.review.deleteMany();
  await prisma.program.deleteMany();
  await prisma.contact.deleteMany();

  await prisma.service.createMany({
    data: [
      {
        slug: "heart-checkup",
        iconKey: "heart",
        iconColor: "text-red-500",
        iconBg: "bg-red-50",
        title: "Чек-ап «Здоровое сердце»",
        description:
          "Комплексное обследование сердечно-сосудистой системы с использованием современного диагностического оборудования.",
        fullDescription:
          "Комплексное обследование сердечно-сосудистой системы. Включает консультацию кардиолога, ЭКГ, УЗИ сердца и анализы крови.",
        price: 4500,
        specialists: JSON.stringify(["Д-р Иванов А.С.", "Д-р Смирнова Е.В."]),
        scheduleHours: "Пн–Вс: 08:00 – 21:00",
        scheduleNote: "По предварительной записи",
        image: MIND_IMAGES.services.heart,
      },
      {
        slug: "neurology",
        iconKey: "brain",
        iconColor: "text-green-600",
        iconBg: "bg-green-50",
        title: "Неврология",
        description:
          "Диагностика и лечение заболеваний нервной системы. Консультации ведущих неврологов с многолетним опытом.",
        fullDescription:
          "Диагностика и лечение заболеваний нервной системы: головные боли, головокружения, нарушения сна, невралгии.",
        price: 3200,
        specialists: JSON.stringify(["Д-р Петрова О.В.", "Д-р Козлов Д.И."]),
        scheduleHours: "Пн–Пт: 09:00 – 20:00",
        scheduleNote: "Сб: 10:00 – 16:00",
        image: MIND_IMAGES.services.neurology,
      },
      {
        slug: "ophthalmology",
        iconKey: "eye",
        iconColor: "text-purple-600",
        iconBg: "bg-purple-50",
        title: "Офтальмология",
        description:
          "Полный спектр услуг по диагностике и лечению заболеваний глаз. Лазерная коррекция зрения.",
        fullDescription:
          "Полный спектр услуг по диагностике и лечению заболеваний глаз: проверка остроты зрения, подбор очков и линз.",
        price: 2800,
        specialists: JSON.stringify(["Д-р Волкова М.А.", "Д-р Лебедев С.П."]),
        scheduleHours: "Пн–Сб: 08:00 – 19:00",
        scheduleNote: "По предварительной записи",
        image: MIND_IMAGES.services.ophthalmology,
      },
      {
        slug: "endocrinology",
        iconKey: "activity",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50",
        title: "Эндокринология",
        description:
          "Диагностика и лечение заболеваний эндокринной системы. Индивидуальные программы коррекции обмена веществ.",
        fullDescription:
          "Диагностика и лечение заболеваний щитовидной железы, сахарного диабета, ожирения и нарушений обмена веществ.",
        price: 3500,
        specialists: JSON.stringify(["Д-р Морозова Т.К.", "Д-р Фёдоров А.Н."]),
        scheduleHours: "Пн–Вс: 08:00 – 20:00",
        scheduleNote: "По предварительной записи",
        image: MIND_IMAGES.services.endocrinology,
      },
      {
        slug: "general",
        iconKey: "stethoscope",
        iconColor: "text-mind-teal",
        iconBg: "bg-mind-mint",
        title: "Запись на приём",
        description: "Первичная консультация с врачом-терапевтом клиники SKIN EXPERT.",
        fullDescription:
          "Первичный приём в клинике SKIN EXPERT. Врач проведёт осмотр, соберёт анамнез и направит к нужному специалисту.",
        price: 2500,
        specialists: JSON.stringify(["Д-р Соколова Н.Р.", "Д-р Белов И.М."]),
        scheduleHours: "Пн–Вс: 08:00 – 21:00",
        scheduleNote: "По предварительной записи",
        image: MIND_IMAGES.services.general,
      },
    ],
  });

  await prisma.doctor.createMany({
    data: [
      {
        name: "Александр Волков",
        role: "Главный кардиолог",
        qualification: "д.м.н.",
        schedule: "Пн–Пт: 09:00 – 18:00",
        avatarUrl: MIND_IMAGES.doctors.volkov,
      },
      {
        name: "Олег Петров",
        role: "Врач-невролог",
        qualification: "к.м.н.",
        schedule: "Вт–Сб: 10:00 – 19:00",
        avatarUrl: MIND_IMAGES.doctors.petrova,
      },
      {
        name: "Игорь Соколов",
        role: "Эндокринолог",
        qualification: "д.м.н.",
        schedule: "Пн–Чт: 08:00 – 17:00",
        avatarUrl: MIND_IMAGES.doctors.sokolov,
      },
    ],
  });

  await prisma.review.createMany({
    data: [
      {
        doctorName: "Александр Волков",
        doctorRole: "Главный кардиолог, д.м.н.",
        doctorAvatarUrl: MIND_IMAGES.doctors.volkov,
        text: "Потрясающий врач! Внимательно выслушал все жалобы, назначил только необходимые анализы.",
        authorName: "Анна и Максим",
        rating: 5,
      },
      {
        doctorName: "Олег Петров",
        doctorRole: "Врач-невролог, к.м.н.",
        doctorAvatarUrl: MIND_IMAGES.doctors.petrova,
        text: "Обратилась с сильными головными болями. Доктор провела детальное обследование и подобрала терапию.",
        authorName: "Елена К.",
        rating: 5,
      },
      {
        doctorName: "Игорь Соколов",
        doctorRole: "Эндокринолог, д.м.н.",
        doctorAvatarUrl: MIND_IMAGES.doctors.sokolov,
        text: "Профессионал высочайшего уровня. Составил индивидуальную программу лечения.",
        authorName: "Дмитрий В.",
        rating: 5,
      },
    ],
  });

  await prisma.program.createMany({
    data: [
      {
        title: "Программа «Здоровое сердце»",
        description: "Годовое сопровождение кардиолога с регулярными обследованиями.",
        price: 45000,
        active: true,
      },
      {
        title: "Программа «Диабет под контролем»",
        description: "Комплексное ведение пациентов с сахарным диабетом.",
        price: 38000,
        active: true,
      },
    ],
  });

  await prisma.contact.create({
    data: {
      id: "main",
      address: "г. Москва, ул. Медицинская, д. 15",
      phone: "8 (800) 400-20-20",
      email: "info@mind.ru",
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
