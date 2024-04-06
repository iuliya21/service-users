import { FC } from "react";
import styles from "./button.module.css";

interface IButton {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IButton> = ({ text, type, onClick }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <button className={styles.button} type={type} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
