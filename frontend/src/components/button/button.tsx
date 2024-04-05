import { FC } from "react";
import styles from "./button.module.css";

interface IButton {
  text: string;
  type?: "button" | "submit" | "reset";
}

const Button: FC<IButton> = ({ text, type }) => {
  return <button className={styles.button} type={type} >{text}</button>;
};

export default Button;
