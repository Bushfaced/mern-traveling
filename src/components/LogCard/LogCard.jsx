import { deleteLog } from "../../utilities/logs-api"

export default function LogCard({log}) {
  return (
    <main>
    <p>{log.title}</p>
    <p>{log.destination}</p>
    <p>{log.content}</p>
    <button onClick={deleteLog(log._id)}>X</button>
    </main>
  )
}
