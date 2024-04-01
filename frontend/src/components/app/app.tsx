import styles from "./app.module.css";
import Header from "../header/header";
import Table from "../table/table";

function App() {

  return (
    <div className={styles.app}>
      {/* <Header /> */}
      <Table />
    </div>
  );
}

export default App;
