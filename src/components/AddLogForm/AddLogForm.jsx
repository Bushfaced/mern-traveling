export default function AddLogForm({ log, handleAddLog }) {
  return (
    <main>
      <div><input type="text" placeholder="Title"/></div>
      <div><input type="text" placeholder="Destination"/></div>
      <div><textarea name="content" placeholder="Your Experience"></textarea></div>
      <button onClick={() => handleAddLog(log._id)}>
        ADD LOG
      </button>
    </main>
  );
}