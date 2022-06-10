import{ deleteLog } from "../../utilities/logs-api";

export default function LogCard({log, handleDeleteLog}) {
 
  return (
    <main>
    <p>{log.title}</p>
    <p>{log.destination}</p>
    <p>{log.content}</p>
    <button onClick={() => handleDeleteLog(log._id)}>X</button>
    </main>
  )
}
