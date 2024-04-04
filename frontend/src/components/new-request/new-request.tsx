import { FC } from "react";
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
  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: {},
  });

  const submit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit(submit)}>
      <input type="text" {...register("user")} />
      <select id="" {...register("type")}>
        <option value="">Ошибка</option>
        <option value="Ошибка">Ошибка</option>
        <option value="Новая функциональность">Новая функциональность</option>
        <option value="Улучшение">Улучшение</option>
        <option value="Документация">Документация</option>
      </select>
      <div className={styles.buttons}>
        <Button text="Сохранить" />
        <Button text="Закрыть" />
      </div>
    </form>
  );
};

export default RequestNew;
