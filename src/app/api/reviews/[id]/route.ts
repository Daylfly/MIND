import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const body = await request.json();

  const review = await prisma.review.update({
    where: { id },
    data: {
      ...(body.doctorName !== undefined && { doctorName: body.doctorName }),
      ...(body.doctorRole !== undefined && { doctorRole: body.doctorRole }),
      ...(body.doctorAvatarUrl !== undefined && { doctorAvatarUrl: body.doctorAvatarUrl }),
      ...(body.text !== undefined && { text: body.text }),
      ...(body.authorName !== undefined && { authorName: body.authorName }),
      ...(body.rating !== undefined && { rating: Number(body.rating) }),
    },
  });

  return NextResponse.json(review);
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  await prisma.review.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
