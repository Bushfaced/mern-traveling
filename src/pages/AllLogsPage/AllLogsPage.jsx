import { useState, useEffect } from 'react';
import * as logsAPI from "../../utilities/logs-api";
import LogCard from "../../components/LogCard/LogCard";

export default function AllLogsPage({ user }) {
  const [logs, setLogs] = useState([]);

  useEffect(function() {
    async function getLogs() {
      const logs = await logsAPI.getAll();
      setLogs(logs);
    }
    getLogs();
  }, [])

  async function handleDeleteLog(id) {
    await logsAPI.deleteLog(id);
    const updatedLogs = logs.filter((l) => l._id !== id);
    setLogs(updatedLogs);
  }

  return (
    <main>
      <h1>All Logs</h1>
      {logs.map(function(log, index){
        return <LogCard className="logCard" key={index} log={log} handleDeleteLog={handleDeleteLog} user={user}/>
      })}

    </main>
  );
}
