import { FC, useState } from "react";
import styles from "./new-request.module.css";
import Button from "../button/button";
import { SubmitHandler, useForm } from "react-hook-form";

// interface IRequest {
//   closeModal: Function;
// }

interface IForm {
  user: string;
  type: string;
  // description: string;
}

const RequestNew: FC = () => {
  const [droplistShow, setDroplistShow] = useState(false);

  const { register, handleSubmit, setValue, watch } = useForm<IForm>({
    defaultValues: {
      type: "Ошибка",
    },
  });

  const inputValue = watch("type");

  const submit: SubmitHandler<IForm> = (data) => {};

  const toggleDroplist = () => {
    setDroplistShow((prevState) => !prevState);
  };

  const handleClickItem = (value: string) => {
    setValue("type", value);
    toggleDroplist();
  };

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit(submit)}>
      <fieldset className={`${styles.fieldset} ${styles.fieldsetUser}`}>
        <legend className={styles.legend}>Автор обращения</legend>
        <input
          type="text"
          {...register("user")}
          className={styles.inputText}
          placeholder="Введите свое имя"
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Тип запроса</legend>
        <div className={styles.customSelect}>
          <button className={styles.buttonDpordown} onClick={toggleDroplist}>
            {inputValue}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              className={styles.arrow}
            >
              <path d="M0 0L6.5 8L13 0H0Z" fill="#6B7280" />
            </svg>
          </button>

          <ul
            className={
              droplistShow
                ? `${styles.dropList}`
                : `${styles.dropList} ${styles.dropdownHidden}`
            }
          >
            <li
              className={styles.dropListItem}
              onClick={() => handleClickItem("Ошибка")}
            >
              Ошибка
            </li>
            <li
              className={styles.dropListItem}
              onClick={() => handleClickItem("Новая функциональность")}
            >
              Новая функциональность
            </li>
            <li
              className={styles.dropListItem}
              onClick={() => handleClickItem("Улучшение")}
            >
              Улучшение
            </li>
            <li
              className={styles.dropListItem}
              onClick={() => handleClickItem("Документация")}
            >
              Документация
            </li>
          </ul>
          <input
            type="text"
            value={inputValue}
            {...register("type")}
            className={styles.dropdownHidden}
          />
        </div>
      </fieldset>
      <h3 className={styles.descriptionTitle}>Добавить описание</h3>
      <textarea
        name=""
        id=""
        placeholder="Введите описание запроса"
        className={styles.textarea}
      ></textarea>
      <h3 className={`${styles.descriptionTitle} ${styles.imageTitle}`}>
        Добавить изображение
      </h3>
      <div className={styles.addImage}>
        <input type="file" className={styles.inputAddImage} id="fileInput"/>
        <button id="uploadButton">123</button>
      </div>

      <div className={styles.buttons}>
        <Button text="Сохранить" />
        <Button text="Закрыть" type="button" />
      </div>
    </form>
  );
};

export default RequestNew;
