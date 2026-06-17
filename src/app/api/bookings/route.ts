import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const bookings = await prisma.booking.findMany({
    orderBy: { createdAt: "desc" },
    include: { service: true },
  });
  return NextResponse.json(bookings);
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.serviceId || !body.serviceTitle || !body.patientName || !body.phone || !body.date) {
    return NextResponse.json({ error: "Заполните все поля" }, { status: 400 });
  }

  const booking = await prisma.booking.create({
    data: {
      serviceId: body.serviceId,
      serviceTitle: body.serviceTitle,
      patientName: body.patientName,
      phone: body.phone,
      date: body.date,
    },
  });

  return NextResponse.json(booking, { status: 201 });
}
