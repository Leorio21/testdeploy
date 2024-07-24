"use client";
import React from "react";
import classNames from "classnames";
import styles from "./Invoices.module.css";
import { getInvoice, getInvoices } from "@/services/queries";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import NoInvoices from "../NoInvoices/NoInvoices";
import ShortInvoice from "../ShortInvoice/ShortInvoice";
import InvoicesSkeleton from "./InvoicesSkeleton";
import Header from "./Header/Header";
import Link from "next/link";

const Invoices = () => {
  const queryClient = useQueryClient();
  const { data: invoices, isFetching } = useQuery(getInvoices());

  if (isFetching) return <InvoicesSkeleton />;

  return (
    <section className={classNames(styles.container)}>
      <Header totalInvoices={invoices?.length} />
      {invoices?.length === 0 ? (
        <NoInvoices />
      ) : (
        invoices?.map((invoice) => (
          <Link
            key={invoice.id}
            className={classNames(styles.link)}
            href={`/invoices/${invoice.id}`}
            onMouseEnter={() =>
              queryClient.prefetchQuery(getInvoice(invoice.id))
            }
          >
            <ShortInvoice invoice={invoice} />
          </Link>
        ))
      )}
    </section>
  );
};

export default Invoices;
