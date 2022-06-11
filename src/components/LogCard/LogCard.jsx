// const bootstrap = require('bootstrap');

export default function LogCard({log, handleDeleteLog, user}) {
  return (
    <main>
    <p>{log.title}</p>
    <p>{log.destination}</p>
    <p>{log.content}</p>
    {log.user === user._id && <button onClick={() => handleDeleteLog(log._id)}>X</button>}
    </main>
  )
}