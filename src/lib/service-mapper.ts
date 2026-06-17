import type { Service } from "@prisma/client";
import { getServiceIcon } from "@/lib/service-icons";
import type { MindServiceDetail } from "@/types/service-detail.interface";

export function dbServiceToDetail(service: Service): MindServiceDetail {
  return {
    id: service.id,
    slug: service.slug,
    icon: getServiceIcon(service.iconKey),
    iconColor: service.iconColor,
    iconBg: service.iconBg,
    title: service.title,
    description: service.description,
    fullDescription: service.fullDescription,
    price: service.price,
    specialists: JSON.parse(service.specialists) as string[],
    schedule: {
      hours: service.scheduleHours,
      note: service.scheduleNote,
    },
    image: service.image ?? undefined,
  };
}

export function dbServiceToClient(service: Service) {
  return {
    id: service.id,
    slug: service.slug,
    iconKey: service.iconKey,
    iconColor: service.iconColor,
    iconBg: service.iconBg,
    title: service.title,
    description: service.description,
    fullDescription: service.fullDescription,
    price: service.price,
    specialists: JSON.parse(service.specialists) as string[],
    schedule: {
      hours: service.scheduleHours,
      note: service.scheduleNote,
    },
    image: service.image ?? undefined,
  };
}

export type ServiceClient = ReturnType<typeof dbServiceToClient>;
