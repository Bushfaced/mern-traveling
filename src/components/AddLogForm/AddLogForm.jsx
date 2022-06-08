export default function AddLogForm() {
  return (
    <main>
      <div><input type="text" placeholder="Title"/></div>
      <div><input type="text" placeholder="Destination"/></div>
      <div><textarea name="content"></textarea></div>
      <button>Add Log</button>
    </main>
  );
}