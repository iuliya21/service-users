import { FC, useEffect, useState } from "react";
import styles from "./table.module.css";
import data from "../../data";
import Button from "../button/button";

const Table: FC = () => {
  const [requestData, setRequestData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [authorFilter, setAuthorFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    filterData();
  }, [authorFilter, dateFilter, statusFilter, typeFilter]);

  const pageSize = 12;

  const totalPage = Math.ceil(requestData.length / pageSize);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return requestData.slice(startIndex, endIndex);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => {
      const prevPageValue = prevPage - 1;
      return prevPageValue >= 1 ? prevPageValue : prevPage;
    });
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => {
      const nextPageValue = prevPage + 1;
      return nextPageValue <= totalPage ? nextPageValue : prevPage;
    });
  };
  const filterData = () => {
    let filteredData = data;

    if (authorFilter) {
      filteredData = filteredData.filter((item) => item.user === authorFilter);
    }

    if (dateFilter) {
      filteredData = filteredData.filter((item) => item.date === dateFilter);
    }

    if (statusFilter) {
      filteredData = filteredData.filter(
        (item) => item.status === statusFilter
      );
    }

    if (typeFilter) {
      filteredData = filteredData.filter((item) => item.type === typeFilter);
    }

    setRequestData(filteredData);
    setCurrentPage(1);
  };

  const filterReset = () => {
    setRequestData(data);
    setCurrentPage(1);
    setAuthorFilter("");
    setDateFilter("");
    setStatusFilter("");
    setTypeFilter("");
  };

  return (
    <div>
      <header className={styles.header}>
        <Button text="Новый запрос" />
        <p className={styles.pagination}>
          {currentPage} из {totalPage}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="14"
          viewBox="0 0 60 14"
          fill="none"
        >
          <path
            onClick={prevPage}
            className={styles.back}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.89779 11.9514L3.75524 6.76492L8.89779 1.57848L7.33267 0L0.625 6.76492L7.33267 13.5298L8.89779 11.9514Z"
            fill="#6B7280"
          />
          <path
            onClick={nextPage}
            className={styles.next}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.6035 12.1745L56.7461 7.10085L51.6035 1.91442L53.1686 0.335938L59.8763 7.10085L53.1686 13.8658L51.6035 12.1745Z"
            fill="#6B7280"
          />
        </svg>
      </header>
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
          {getCurrentPageData().map((el: any, index: number) => (
            <tr key={index} className={styles.tableString}>
              <td>
                <a className={styles.tableNumber} href="#">
                  {el.id}
                </a>
              </td>
              <td
                className={styles.type}
                onClick={() => setTypeFilter(el.type)}
              >
                <span
                  className={
                    el.type === "Ошибка"
                      ? `${styles.error} ${styles.td}`
                      : el.type === "Новая функциональность" ? `${styles.newFunctional} ${styles.td}` : `${styles.td}`
                  }
                >
                  {el.type}
                </span>
              </td>
              <td>{el.description}</td>
              <td
                className={styles.user}
                onClick={() => setAuthorFilter(el.user)}
              >
                {el.user}
              </td>
              <td
                className={styles.date}
                onClick={() => setDateFilter(el.date)}
              >
                {el.date}
              </td>
              <td
                className={styles.status}
                onClick={() => setStatusFilter(el.status)}
              >
                {el.status}
              </td>
            </tr>
          ))}
          {Array.from({ length: 12 - getCurrentPageData().length }).map(
            (_, index) => (
              <tr
                key={index + getCurrentPageData().length}
                className={styles.tableString}
              >
                <td>
                  <a className={styles.tableNumber} href="#"></a>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <div className={styles.footer} onClick={filterReset}>
        <Button text="Сбросить фильтрацию" />
        {authorFilter && <p className={styles.tag}>{authorFilter}</p>}
        {dateFilter && <p className={styles.tag}>{dateFilter}</p>}
        {statusFilter && <p className={styles.tag}>{statusFilter}</p>}
        {typeFilter && <p className={styles.tag}>{typeFilter}</p>}
      </div>
    </div>
  );
};

export default Table;
