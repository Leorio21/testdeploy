import React from "react";
import classNames from "classnames";
import styles from "./Header.module.css";
import Loading from "../../Loading/Loading";

const HeaderSkeleton = () => {
  return (
    <header className={classNames(styles.header)}>
      <div className={classNames(styles.title)}>
        <h1>Invoices</h1>
        <div className={classNames(styles.invoicesSum)}>
          <Loading />
        </div>
      </div>
    </header>
  );
};

export default HeaderSkeleton;
