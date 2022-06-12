import "./LogCard.css"

export default function LogCard({log, handleDeleteLog, user}) {
  return (
    <main className="accordion accordion-flush">
      <div className="card">
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse" aria-expanded="true" aria-controls="flush-collapseOne">{log.title}
            </button>
          </h4>
          <div id="flush-collapse" className="accordion-collapse collapse" aria-labelledby="flush-headingOne">
            <div className="accordion-body">
              <h6 className="card-title">{log.destination}</h6>
              <br />
              <textarea className="card-text" value={log.content}></textarea>
            </div>
          </div>
          {log.user === user._id && <button onClick={() => handleDeleteLog(log._id)} type="button" className="btn btn-danger btn-sm" id="deleteBtn">DELETE</button>}
        </div>
      </div>
    </main>
  )
}