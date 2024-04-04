import { IModal } from "../../types/types";
import styles from "./modal-overlay.module.css";

const ModalOverlay: React.FC<IModal> = ({ children, onClosePopup }) => {
  return (
    <div className={styles.overlay} onClick={onClosePopup}>
      {children}
    </div>
  )
}

export default ModalOverlay;