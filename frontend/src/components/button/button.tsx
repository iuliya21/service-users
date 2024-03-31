import { FC } from "react";
import styles from "./button.module.css";

interface IButton {
  text: string;
}

const Button: FC<IButton> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
