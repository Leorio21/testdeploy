import React from "react";
import classNames from "classnames";
import styles from "./ShortInvoice.module.css";
import Loading from "../Loading/Loading";

const ShortInvoiceSkeleton = () => {
  return (
    <article className={classNames(styles.container)}>
      <h4 className={classNames(styles.reference)}>
        <Loading />
      </h4>
      <div className={classNames(styles.dueDate)}>
        <Loading />
      </div>
      <div className={classNames(styles.name)}>
        <Loading />
      </div>
      <div className={classNames(styles.total)}>
        <Loading />
      </div>
      <div className={classNames(styles.status)}>
        <Loading />
      </div>
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

export default ShortInvoiceSkeleton;
