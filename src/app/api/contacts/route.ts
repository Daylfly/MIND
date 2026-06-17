import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const contact = await prisma.contact.findFirst({ where: { id: "main" } });
  return NextResponse.json(contact);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const contact = await prisma.contact.upsert({
    where: { id: "main" },
    create: {
      id: "main",
      address: body.address,
      phone: body.phone,
      email: body.email,
    },
    update: {
      address: body.address,
      phone: body.phone,
      email: body.email,
    },
  });
  return NextResponse.json(contact);
}
