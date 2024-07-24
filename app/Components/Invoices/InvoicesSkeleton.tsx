"use client";
import React from "react";
import classNames from "classnames";
import styles from "./Invoices.module.css";
import ShortInvoicesSkeleton from "../ShortInvoice/ShortInvoiceSkeleton";
import HeaderSkeleton from "./Header/HeaderSkeleton";

const InvoicesSkeleton = () => {
  return (
    <section className={classNames(styles.container)}>
      <HeaderSkeleton />
      <ShortInvoicesSkeleton />
      <ShortInvoicesSkeleton />
      <ShortInvoicesSkeleton />
    </section>
  );
};

export default InvoicesSkeleton;
