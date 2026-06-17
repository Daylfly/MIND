import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const body = await request.json();

  const doctor = await prisma.doctor.update({
    where: { id },
    data: {
      ...(body.name !== undefined && { name: body.name }),
      ...(body.role !== undefined && { role: body.role }),
      ...(body.qualification !== undefined && { qualification: body.qualification }),
      ...(body.schedule !== undefined && { schedule: body.schedule }),
      ...(body.avatarUrl !== undefined && { avatarUrl: body.avatarUrl }),
      ...(body.active !== undefined && { active: body.active }),
    },
  });

  return NextResponse.json(doctor);
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  await prisma.doctor.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
