import { FC } from "react";
import { IMessage } from "../../types/types";
import styles from "./message-info.module.css";
import Button from "../button/button";

interface IMessageInfoProps {
  currentMessage: IMessage | null;
  closeModal: Function;
}

const MessageInfo: FC<IMessageInfoProps> = ({ currentMessage, closeModal }) => {
  return (
    <div>
      <div className={styles.messageInfo}>
        <div className={styles.group}>
          <h3 className={`${styles.text} ${styles.title}`}>Номер запроса</h3>
          <p className={styles.text}>{currentMessage?.id}</p>
        </div>
        <div className={styles.group}>
          <h3 className={`${styles.text} ${styles.title}`}>Тип запроса</h3>
          <p className={styles.text}>{currentMessage?.type}</p>
        </div>
        <div className={styles.group}>
          <h3 className={`${styles.text} ${styles.title}`}>Описание</h3>
          <p className={styles.text}>{currentMessage?.description}</p>
        </div>
        <div className={styles.group}>
          <h3 className={`${styles.text} ${styles.title}`}>Пользователь</h3>
          <p className={styles.text}>{currentMessage?.user}</p>
        </div>
        <div className={styles.group}>
          <h3 className={`${styles.text} ${styles.title}`}>Дата</h3>
          <p className={styles.text}>{currentMessage?.date}</p>
        </div>
        <div className={styles.group}>
          <h3 className={`${styles.text} ${styles.title}`}>Статус</h3>
          <p className={styles.text}>{currentMessage?.status}</p>
        </div>
      </div>
      <div onClick={() => closeModal()}>
        <Button text="Закрыть" />
      </div>
    </div>
  );
};

export default MessageInfo;
