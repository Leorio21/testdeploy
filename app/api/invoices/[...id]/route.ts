import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.match(/\/api\/invoices\/(?<id>.+)/)
    ?.groups?.id;
  const invoice = await prisma.invoice.findUnique({
    where: {
      id: id,
    },
    include: {
      client: true,
      items: true,
    },
  });
  await prisma.$disconnect();
  return NextResponse.json({ invoice });
}
