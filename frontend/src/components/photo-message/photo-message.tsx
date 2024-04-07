import { FC } from "react";
import styles from "./photo-message.module.css";
import Button from "../button/button";

interface IMessagePhoto {
  image: string | undefined;
  closeModalPhoto: () => void;
}

const MessagePhoto: FC<IMessagePhoto> = ({ image, closeModalPhoto }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="Прикрепленное фото" className={styles.img} />
      <div>
        <Button text="Закрыть" onClick={closeModalPhoto} />
      </div>
    </div>
  );
};

export default MessagePhoto;
