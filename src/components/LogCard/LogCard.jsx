import "./LogCard.css"

export default function LogCard({log, handleDeleteLog, user}) {
  return (
    <main className="card">
    <h4 className="card-header">{log.title}</h4>
    <h6 className="card-title">{log.destination}</h6>
    <p className="card-text">{log.content}</p>
    {log.user === user._id && <button onClick={() => handleDeleteLog(log._id)} type="button" class="btn btn-danger btn-sm">X</button>}
    </main>
  )
}