import { FC } from "react";
import styles from "./header.module.css";
import Button from "../button/button";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Button text="Новый запрос" />
      <p className={styles.pagination}>1 из 1</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="14"
        viewBox="0 0 60 14"
        fill="none"
      >
        <path className={styles.back}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.89779 11.9514L3.75524 6.76492L8.89779 1.57848L7.33267 0L0.625 6.76492L7.33267 13.5298L8.89779 11.9514Z"
          fill="#6B7280"
        />
        <path className={styles.next}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.6035 12.1745L56.7461 7.10085L51.6035 1.91442L53.1686 0.335938L59.8763 7.10085L53.1686 13.8658L51.6035 12.1745Z"
          fill="#6B7280"
        />
      </svg>
    </header>
  );
};

export default Header;
