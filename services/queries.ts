import { InvoiceScheme, InvoicesScheme } from "./scheme";

export const getInvoices = () => ({
  queryKey: ["invoices"],
  queryFn: async () => {
    const res = await fetch(`${process.env.BASE_URL}/invoices`);
    const data = await res.json();
    return InvoicesScheme.parse(data.invoices);
  },
});

export const getInvoice = (id: string) => ({
  queryKey: ["invoice", id],
  queryFn: async () => {
    const res = await fetch(`${process.env.BASE_URL}/invoices/${id}`);
    const data = await res.json();
    console.log(data);
    console.log(InvoiceScheme.parse(data.invoice));
    return InvoiceScheme.parse(data.invoice);
  },
});
