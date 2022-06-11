import "./LogCard.css"

export default function LogCard({log, handleDeleteLog, user}) {
  return (
    <main className="card">
      <h4 className="card-header">{log.title}</h4>
      <h6 className="card-title">{log.destination}</h6>
      <content className="card-text">{log.content}</content>
      <br />
      {log.user === user._id && <button onClick={() => handleDeleteLog(log._id)} type="button" className="btn btn-danger btn-sm">X</button>}
    </main>
  )
}