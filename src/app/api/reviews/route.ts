import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const reviews = await prisma.review.findMany({ orderBy: { doctorName: "asc" } });
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  const body = await request.json();
  const review = await prisma.review.create({
    data: {
      doctorName: body.doctorName,
      doctorRole: body.doctorRole,
      doctorAvatarUrl: body.doctorAvatarUrl ?? "",
      text: body.text,
      authorName: body.authorName,
      rating: Number(body.rating) || 5,
    },
  });
  return NextResponse.json(review, { status: 201 });
}
