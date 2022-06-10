import { deleteLog } from "../../utilities/logs-api"

export default function LogCard({log}) {
  return (
    <main>
    <p>{log.title}</p>
    <p>{log.destination}</p>
    <p>{log.content}</p>
    <button onClick={(d) => deleteLog(d.target.value)}>X</button>
    tried to wrap the onClick in a function here 
    </main>
  )
}
