import { FC } from "react";
import { IMessage } from "../../types/types";
import styles from "./message-info.module.css";
import Button from "../button/button";
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/modal";
import MessagePhoto from "../photo-message/photo-message";

interface IMessageInfoProps {
  currentMessage: IMessage | null;
  closeModal: Function;
}

const MessageInfo: FC<IMessageInfoProps> = ({ currentMessage, closeModal }) => {
  
  const haveImage = currentMessage?.image;

  const {
    isModalOpen: isModalOpenPhoto,
    openModal: openModalPhoto,
    closeModal: closeModalPhoto,
  } = useModal();

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

      <div className={styles.buttons}>
        <Button
          text="Показать изображение"
          disabled={haveImage ? false : true}
          onClick={openModalPhoto}
        />
        <Button text="Закрыть" onClick={() => closeModal()} />
      </div>

      {isModalOpenPhoto && (
        <Modal onClosePopup={closeModalPhoto}>
          <MessagePhoto image={haveImage} closeModalPhoto={closeModalPhoto}/>
        </Modal>
      )}
    </div>
  );
};

export default MessageInfo;
