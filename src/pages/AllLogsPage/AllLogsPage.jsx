import { useState, useEffect } from 'react';
import * as logsAPI from "../../utilities/logs-api";
import LogList from "../../components/LogList/LogList";

export default function AllLogsPage() {
  const [logs, setLogs] = useState([]);

  useEffect(function() {
    async function getLogs() {
      const logs = await logsAPI.getAll();
      setLogs(logs);
    }
    getLogs();
  }, [])

  async function deleteLog(logData) {
    const log = await logsAPI.deleteLog(logData);
    setLogs([...logs, log])
  }

  return (
    <main>
      <h1>All Logs</h1>
      <LogList logs={logs}/>
    </main>
  );
}