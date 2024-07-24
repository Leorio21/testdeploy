import React from "react";
import classNames from "classnames";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={classNames(styles.container)}>
      <nav>
        <Link href="/invoices" className={classNames(styles.link)}>
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.342.886L2.114 5.114l4.228 4.228"
              stroke="#9277FF"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <h4>Go Back</h4>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
