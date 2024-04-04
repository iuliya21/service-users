import Table from "../table/table";
import { useMessagesStore } from "../../services/store";
import { useEffect } from "react";

const App = () => {
  const { fetchMessages } = useMessagesStore();

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return (
    <Table />
  );
}

export default App;
