import { useState, useEffect } from 'react';

export default function LogIndex() {
  const [logs, setLogs] = useState([]);
  useEffect(function() {
    async function getLogs() {
      const logs = await logsAPI.getAll();
      setLogs(logs);
    }
    getLogs();
  }, []);
  async function handleNewLog(logData) {
    const log = await logsAPI.add(logData);
    setLogs([...logs, log])
  }
  return (
    <h1>All Travel Logs</h1>
  );
}