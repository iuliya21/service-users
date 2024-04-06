import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { IModal } from "../../types/types";
import { FC, useEffect } from "react";

const modalRoot: HTMLElement | null = document.getElementById("react-modals");

const Modal: FC<IModal> = ({ children, onClosePopup }) => {
  useEffect(() => {
    const closeByEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClosePopup();
      }
    };
    document.addEventListener("keydown", closeByEsc);

    return () => {
      document.removeEventListener("keydown", closeByEsc);
    };
  }, [onClosePopup]);

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <ModalOverlay onClosePopup={onClosePopup}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;