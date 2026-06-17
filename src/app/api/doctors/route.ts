import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const doctors = await prisma.doctor.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(doctors);
}

export async function POST(request: Request) {
  const body = await request.json();
  const doctor = await prisma.doctor.create({
    data: {
      name: body.name,
      role: body.role,
      qualification: body.qualification ?? "",
      schedule: body.schedule ?? "",
      avatarUrl: body.avatarUrl ?? null,
      active: body.active ?? true,
    },
  });
  return NextResponse.json(doctor, { status: 201 });
}
