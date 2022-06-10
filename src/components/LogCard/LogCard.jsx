export default function LogCard({log, handleDeleteLog, user}) {
  console.log(log.user);
  console.log(user._id);
  return (
    <main>
    <p>{log.title}</p>
    <p>{log.destination}</p>
    <p>{log.content}</p>
    {log.user === user._id && <button onClick={() => handleDeleteLog(log._id)}>X</button>}
    </main>
  )
}
