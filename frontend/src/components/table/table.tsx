import { FC, useEffect, useState } from "react";
import styles from "./table.module.css";
import data from "../../data";

const Table: FC = () => {

  const [requestData, setRequestData] = useState(data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/src/data.json');
  //       const data = await response.json();
  //       setRequestData(data);
  //     } catch (error) {
  //       console.error('Ошибка при загрузке данных:', error);
  //     }
  //   }
  //   fetchData();
  // }, [])

  return (
    <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableString}>
            <th>Номер запроса</th>
            <th>Тип запроса</th>
            <th>Описание</th>
            <th>Пользователь</th>
            <th>Дата</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {requestData.map((el: any, index: number) => (
            <tr key={index} className={styles.tableString}>
            <td><a className={styles.tableNumber} href="#">{el.id}</a></td>
            <td>{el.type}</td>
            <td>{el.description}</td>
            <td>{el.user}</td>
            <td>{el.date}</td>
            <td>{el.status}</td>
          </tr>
          ))}
          {Array.from({ length: 11 - requestData.length }).map((_, index) => (
          <tr key={index + requestData.length} className={styles.tableString}>
            <td><a className={styles.tableNumber} href="#"></a></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
        </tbody>
      </table>
  )
}

export default Table;