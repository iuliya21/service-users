import Table from "../table/table";
import { useMessagesStore } from "../../services/store";
import { useEffect, useState } from "react";

const App = () => {
  const { fetchMessages } = useMessagesStore();
  const [reloadData, setReloadData] = useState<boolean>(false);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages, reloadData]);

  const handleReloadData = () => {
    setReloadData(prevState => !prevState);
  };

  return (
    <Table handleReloadData={handleReloadData}/>
  );
}

export default App;
