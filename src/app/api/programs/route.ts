import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const programs = await prisma.program.findMany({ orderBy: { title: "asc" } });
  return NextResponse.json(programs);
}

export async function POST(request: Request) {
  const body = await request.json();
  const program = await prisma.program.create({
    data: {
      title: body.title,
      description: body.description,
      price: body.price != null ? Number(body.price) : null,
      active: body.active ?? true,
    },
  });
  return NextResponse.json(program, { status: 201 });
}
