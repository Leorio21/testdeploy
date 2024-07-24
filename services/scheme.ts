import email from "next-auth/providers/email";
import { z } from "zod";

export const ShortInvoiceScheme = z.object({
  id: z.string(),
  reference: z.string(),
  createdAt: z.string(),
  total: z.string(),
  client: z.object({
    name: z.string(),
  }),
  status: z.object({
    name: z.string(),
    value: z.string(),
  }),
  payment_term: z.object({
    delay: z.number(),
  }),
});

export const InvoiceScheme = z.object({
  id: z.string(),
  reference: z.string(),
  createdAt: z.string(),
  total: z.string(),
  client: z.object({
    id: z.string(),
    name: z.string(),
    address: z.string(),
    cpl_address: z.string().nullable(),
    postal_code: z.string(),
    city: z.string(),
    country: z.string(),
    email: z.string(),
  }),
  status: z.object({
    name: z.string(),
    value: z.string(),
  }),
  payment_term: z.object({
    delay: z.number(),
  }),
  items: z.array(
    z.object({
      name: z.string(),
      quantity: z.number(),
      price: z.string(),
    }),
  ),
});

export const InvoicesScheme = z.array(ShortInvoiceScheme);

export type Invoices = z.infer<typeof InvoicesScheme>;
export type ShortInvoice = z.infer<typeof ShortInvoiceScheme>;
export type Invoice = z.infer<typeof InvoiceScheme>;
