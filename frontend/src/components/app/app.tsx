import styles from "./app.module.css";
import Table from "../table/table";
import { useMessagesStore } from "../../services/store";
import { useEffect, useState } from "react";

function App() {

  const { messages, fetchMessages } = useMessagesStore();

  console.log(messages);

  useEffect(() => {
    fetchMessages();
  }, [])

  return (
    <div className={styles.app}>
      {/* <Header /> */}
      <Table />
    </div>
  );
}

export default App;
