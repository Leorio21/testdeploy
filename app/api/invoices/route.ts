import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
  const session = await auth();
  try {
    const invoices = await prisma.invoice.findMany({
      where: {
        userId: session?.user?.id,
      },
      select: {
        id: true,
        reference: true,
        createdAt: true,
        total: true,
        client: {
          select: {
            name: true,
          },
        },
        status: {
          select: {
            name: true,
            value: true,
          },
        },
        payment_term: {
          select: {
            delay: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    await prisma.$disconnect();
    return NextResponse.json(
      {
        invoices,
      },
      {
        status: 200,
      },
    );
  } catch (error) {}

  return NextResponse.json(
    {
      message: "GET route error",
    },
    {
      status: 400,
    },
  );
}

// export async function POST(req: NextRequest) {
//   const data: { [key: string]: string } = await req.json();
//   const session = await auth();

//   let boardName = "";
//   let columns: string[] = [];

//   for (const item in data) {
//     if (item === "boardName") {
//       boardName = data[item];
//     } else {
//       columns.push(data[item]);
//     }
//   }

//   try {
//     // board = await prisma.board.create({
//     //   data: {
//     //     userId: session?.user.id,
//     //     name: boardName,
//     //     columns: {
//     //       create: columns.map((column) => ({
//     //         name: column,
//     //       })),
//     //     },
//     //   },
//     // });
//     // await prisma.$disconnect();
//   } catch (error) {
//     console.log(error);
//   }

//   return NextResponse.json(
//     {
//       // message: "Create Board success",
//       // board: board,
//     },
//     {
//       status: 200,
//     },
//   );
// }
