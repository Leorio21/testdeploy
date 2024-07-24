"use client";
import React from "react";
import classNames from "classnames";
import styles from "./InvoiceDetail.module.css";
import Header from "./Header/Header";
import { useQuery } from "@tanstack/react-query";
import { getInvoice } from "@/services/queries";

type InvoiceDetailProps = {
  id: string;
};

const InvoiceDetail = ({ id }: InvoiceDetailProps) => {
  const { data: invoice, isFetching } = useQuery(getInvoice(id));

  if (isFetching) return <p>Loading</p>; //<InvoiceDetailSkeleton />;
  return (
    <section className={classNames(styles.container)}>
      <Header />
      <div className={classNames(styles.info)}>
        <p>
          <span className={classNames(styles.hashtag)}>#</span>
          {invoice?.reference}
        </p>
      </div>
    </section>
  );
};

export default InvoiceDetail;
