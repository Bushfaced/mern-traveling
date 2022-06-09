export default function LogList({logs}) {
  const logList = logs.map(l => <p>{l.title}</p>)

  return(
    <>
    {logList}
    </>
  );

}
