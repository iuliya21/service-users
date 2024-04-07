import { FC } from "react";
import styles from "./button.module.css";

interface IButton {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: FC<IButton> = ({ text, type, onClick, disabled }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <button
      className={
        disabled ? `${styles.button} ${styles.disabled}` : `${styles.button}`
      }
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
