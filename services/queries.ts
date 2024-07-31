import { InvoiceScheme, InvoicesScheme } from "./scheme";

export const getInvoices = () => ({
  queryKey: ["invoices"],
  queryFn: async () => {
    const res = await fetch("/api/invoices");
    const data = await res.json();
    console.log(data);
    return InvoicesScheme.parse(data.invoices);
  },
});

export const getInvoice = (id: string) => ({
  queryKey: ["invoice", id],
  queryFn: async () => {
    const res = await fetch(`/api/invoices/${id}`);
    const data = await res.json();
    console.log(data);
    return InvoiceScheme.parse(data.invoice);
  },
});
