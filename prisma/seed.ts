import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const status = await prisma.invoiceStatus.createManyAndReturn({
    data: [
      {
        name: "paid",
        value: "Payée",
      },
      {
        name: "pending",
        value: "En attente",
      },
      {
        name: "draft",
        value: "Brouillon",
      },
    ],
  });

  const paymentTerms = await prisma.paymentTerm.createManyAndReturn({
    data: [
      {
        delay: 1,
      },
      {
        delay: 7,
      },
      {
        delay: 15,
      },
      {
        delay: 30,
      },
    ],
  });

  const clients = await prisma.client.createManyAndReturn({
    data: [
      {
        name: "Jensen Huang",
        address: "106 Kendell Street",
        postal_code: "NR24 5WQ",
        city: "Sharrington",
        country: "United Kingdom",
        email: "jensenhuang@mail.com",
      },
      {
        name: "Alex Grim",
        address: "84 Church Way",
        postal_code: "BD1 9PB",
        city: "Bradford",
        country: "United Kingdom",
        email: "alexgrim@mail.com",
      },
      {
        name: "John Morrison",
        address: "79 Dover Road",
        postal_code: "IP19 3PF",
        city: "Westhall",
        country: "United Kingdom",
        email: "jm@myco.com",
      },
      {
        name: "Alysa Werner",
        address: "63 Warwick Road",
        postal_code: "CA20 2TG",
        city: "Carlisle",
        country: "United Kingdom",
        email: "alysa@email.co.uk",
      },
      {
        name: "Mellisa Clarke",
        address: "46 Abbey Row",
        postal_code: "CB5 6EG",
        city: "Cambridge",
        country: "United Kingdom",
        email: "mellisa.clarke@example.com",
      },
      {
        name: "Thomas Wayne",
        address: "3964  Queens Lan",
        postal_code: "60457",
        city: "Gotham",
        country: "United States of America",
        email: "thomas@dc.com",
      },
      {
        name: "Anita Wainwright",
        address: "",
        postal_code: "",
        city: "",
        country: "",
        email: "",
      },
    ],
  });

  await prisma.user.create({
    data: {
      email: "ptitlue@gmail.com",
      name: "Leorio21",
      image: "https://avatars.githubusercontent.com/u/102737876?v=4",
      createdAt: new Date("2024-07-12 08:36:38.555"),
      updatedAt: new Date("2024-07-12 08:36:38.555"),
      accounts: {
        create: {
          type: "oauth",
          provider: "github",
          providerAccountId: "102737876",
          access_token: "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",
          token_type: "bearer",
          scope: "read:user,user:email",
          createdAt: new Date("2024-07-12 08:36:38.573"),
          updatedAt: new Date("2024-07-12 08:36:38.573"),
        },
      },
      supplierInfo: {
        create: {
          name: "Web Solution Agency",
          address: "19 Union Terrace",
          postal_code: "E1 3EZ",
          city: "London",
          country: "United Kingdom",
        },
      },
      invoices: {
        create: [
          {
            reference: "RT3080",
            workType: "Re-branding",
            total: 1800.9,
            createdAt: new Date("2021-08-18"),
            items: {
              create: [
                {
                  name: "Brand Guidelines",
                  quantity: 1,
                  price: 1800.9,
                },
              ],
            },
            status: {
              connect: {
                id: status[0].id,
              },
            },
            payment_term: {
              connect: {
                id: paymentTerms[0].id,
              },
            },
            client: {
              connect: {
                id: clients[0].id,
              },
            },
          },
          {
            reference: "XM9141",
            workType: "Graphic Design",
            total: 556.0,
            createdAt: new Date("2021-08-21"),
            items: {
              create: [
                {
                  name: "Banner Design",
                  quantity: 1,
                  price: 156.0,
                },
                {
                  name: "Email Design",
                  quantity: 2,
                  price: 200.0,
                },
              ],
            },
            status: {
              connect: {
                id: status[1].id,
              },
            },
            payment_term: {
              connect: {
                id: paymentTerms[3].id,
              },
            },
            client: {
              connect: {
                id: clients[1].id,
              },
            },
          },
          {
            reference: "RG0314",
            workType: "Website Redesign",
            total: 14002.33,
            createdAt: new Date("2021-09-24"),
            items: {
              create: [
                {
                  name: "Website Redesign",
                  quantity: 1,
                  price: 14002.33,
                },
              ],
            },
            status: {
              connect: {
                id: status[0].id,
              },
            },
            payment_term: {
              connect: {
                id: paymentTerms[1].id,
              },
            },
            client: {
              connect: {
                id: clients[2].id,
              },
            },
          },
          {
            reference: "RT2080",
            workType: "Logo Concept",
            total: 102.04,
            createdAt: new Date("2021-10-11"),
            items: {
              create: [
                {
                  name: "Logo Design",
                  quantity: 1,
                  price: 102.04,
                },
              ],
            },
            status: {
              connect: {
                id: status[1].id,
              },
            },
            payment_term: {
              connect: {
                id: paymentTerms[0].id,
              },
            },
            client: {
              connect: {
                id: clients[3].id,
              },
            },
          },
          {
            reference: "AA1449",
            workType: "Re-branding",
            total: 4032.33,
            createdAt: new Date("2021-10-7"),
            items: {
              create: [
                {
                  name: "New Logo",
                  quantity: 1,
                  price: 1532.33,
                },
                {
                  name: "Brand Guidelines",
                  quantity: 1,
                  price: 2500.0,
                },
              ],
            },
            status: {
              connect: {
                id: status[1].id,
              },
            },
            payment_term: {
              connect: {
                id: paymentTerms[1].id,
              },
            },
            client: {
              connect: {
                id: clients[4].id,
              },
            },
          },
          {
            reference: "TY9141",
            workType: "Landing Page Design",
            total: 6155.91,
            createdAt: new Date("2021-10-01"),
            items: {
              create: [
                {
                  name: "Web Design",
                  quantity: 1,
                  price: 6155.91,
                },
              ],
            },
            status: {
              connect: {
                id: status[1].id,
              },
            },
            payment_term: {
              connect: {
                id: paymentTerms[3].id,
              },
            },
            client: {
              connect: {
                id: clients[5].id,
              },
            },
          },
          {
            reference: "FV2353",
            workType: "Logo Re-design",
            total: 3102.04,
            createdAt: new Date("2021-11-05"),
            items: {
              create: [
                {
                  name: "Logo Re-design",
                  quantity: 1,
                  price: 3102.04,
                },
              ],
            },
            status: {
              connect: {
                id: status[2].id,
              },
            },
            payment_term: {
              connect: {
                id: paymentTerms[1].id,
              },
            },
            client: {
              connect: {
                id: clients[6].id,
              },
            },
          },
        ],
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
