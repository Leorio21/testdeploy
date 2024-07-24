import React from "react";
import classNames from "classnames";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <p className={classNames(styles.container)}>
      <span className={classNames(styles.cursor)}></span>
    </p>
  );
};

export default Loading;
