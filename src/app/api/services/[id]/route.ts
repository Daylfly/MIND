import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { dbServiceToClient } from "@/lib/service-mapper";

type Params = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const body = await request.json();

  const service = await prisma.service.update({
    where: { id },
    data: {
      ...(body.slug !== undefined && { slug: body.slug }),
      ...(body.iconKey !== undefined && { iconKey: body.iconKey }),
      ...(body.iconColor !== undefined && { iconColor: body.iconColor }),
      ...(body.iconBg !== undefined && { iconBg: body.iconBg }),
      ...(body.title !== undefined && { title: body.title }),
      ...(body.description !== undefined && { description: body.description }),
      ...(body.fullDescription !== undefined && { fullDescription: body.fullDescription }),
      ...(body.price !== undefined && { price: Number(body.price) }),
      ...(body.specialists !== undefined && {
        specialists: JSON.stringify(body.specialists),
      }),
      ...(body.scheduleHours !== undefined && { scheduleHours: body.scheduleHours }),
      ...(body.scheduleNote !== undefined && { scheduleNote: body.scheduleNote }),
      ...(body.image !== undefined && { image: body.image }),
    },
  });

  return NextResponse.json(dbServiceToClient(service));
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  await prisma.service.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
