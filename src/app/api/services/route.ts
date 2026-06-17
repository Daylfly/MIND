import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { dbServiceToClient } from "@/lib/service-mapper";

export async function GET() {
  const services = await prisma.service.findMany({ orderBy: { createdAt: "asc" } });
  return NextResponse.json(services.map(dbServiceToClient));
}

export async function POST(request: Request) {
  const body = await request.json();
  const service = await prisma.service.create({
    data: {
      slug: body.slug,
      iconKey: body.iconKey ?? "stethoscope",
      iconColor: body.iconColor ?? "text-mind-teal",
      iconBg: body.iconBg ?? "bg-mind-mint",
      title: body.title,
      description: body.description,
      fullDescription: body.fullDescription ?? body.description,
      price: Number(body.price),
      specialists: JSON.stringify(body.specialists ?? []),
      scheduleHours: body.scheduleHours ?? "",
      scheduleNote: body.scheduleNote ?? "",
      image: body.image ?? null,
    },
  });
  return NextResponse.json(dbServiceToClient(service), { status: 201 });
}
