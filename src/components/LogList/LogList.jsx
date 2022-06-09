export default function LogList({logs}) {
  const logList = logs.map((l, index) => <p key={index}>{l.title}</p>)

  return(
    <main>
    <ul>{logList}</ul>
    </main>
  );

}
