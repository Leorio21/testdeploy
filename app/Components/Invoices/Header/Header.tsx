import React from "react";
import classNames from "classnames";
import styles from "./Header.module.css";

type HeaderProps = {
  totalInvoices?: number;
};

const Header = ({ totalInvoices }: HeaderProps) => {
  return (
    <header className={classNames(styles.header)}>
      <div className={classNames(styles.title)}>
        <h1>Invoices</h1>
        <p className={classNames(styles.invoicesSum)}>
          {totalInvoices === 0 ? (
            <span>No invoices</span>
          ) : (
            <>
              <span className={classNames(styles.sumText)}>
                Il y a un total de{" "}
              </span>
              <span>{totalInvoices} factures</span>
            </>
          )}
        </p>
      </div>
    </header>
  );
};

export default Header;
