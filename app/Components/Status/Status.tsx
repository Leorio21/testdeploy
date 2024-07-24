import React from "react";
import classNames from "classnames/bind";
import styles from "./Status.module.css";

const cx = classNames.bind(styles);

type StatusProps = {
  cssClass?: string;
  status: {
    name: string;
    value: string;
  };
};

const Status = ({ status, cssClass = "" }: StatusProps) => {
  return (
    <p className={cx("container", status.name, cssClass)}>
      <span className={cx("status")}></span>
      {status.value}
    </p>
  );
};

export default Status;
