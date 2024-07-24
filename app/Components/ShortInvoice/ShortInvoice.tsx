import React from "react";
import classNames from "classnames";
import styles from "./ShortInvoice.module.css";
import type { ShortInvoice } from "@/services/scheme";
import dayjs from "dayjs";
import Status from "../Status/Status";

type ShortInvoiceProps = {
  invoice: ShortInvoice;
};

const ShortInvoice = ({ invoice }: ShortInvoiceProps) => {
  const dueDate = dayjs(invoice.createdAt)
    .add(invoice.payment_term.delay, "day")
    .format("DD MMM YYYY");
  return (
    <article className={classNames(styles.container)}>
      <h4 className={classNames(styles.reference)}>
        <span className={classNames(styles.hashtag)}>#</span>
        {invoice.reference}
      </h4>
      <p className={classNames(styles.dueDate)}>Ech. : {dueDate}</p>
      <p className={classNames(styles.name)}>{invoice.client.name}</p>
      <p className={classNames(styles.total)}>{invoice.total} €</p>
      <Status cssClass={classNames(styles.status)} status={invoice.status} />
      <svg
        className={classNames(styles.arrow)}
        width="7"
        height="10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1l4 4-4 4"
          stroke="#7C5DFA"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </article>
  );
};

export default ShortInvoice;
