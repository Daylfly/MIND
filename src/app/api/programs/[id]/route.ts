import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const body = await request.json();

  const program = await prisma.program.update({
    where: { id },
    data: {
      ...(body.title !== undefined && { title: body.title }),
      ...(body.description !== undefined && { description: body.description }),
      ...(body.price !== undefined && { price: body.price != null ? Number(body.price) : null }),
      ...(body.active !== undefined && { active: body.active }),
    },
  });

  return NextResponse.json(program);
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  await prisma.program.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
