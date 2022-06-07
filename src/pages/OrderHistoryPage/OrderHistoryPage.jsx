import { checkToken } from "../../utilities/users-service";
import { NewLogForm } from "../../components/NewLogForm/NewLogForm";

export default function NewLogPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
<<<<<<<< HEAD:src/pages/NewLogPage/NewLogPage.jsx
      <h1>Add Travel Logs</h1>
      <NewLogForm />
========
      <h1>OrderHistoryPage</h1>
>>>>>>>> parent of a3cee67 (navbar changed):src/pages/OrderHistoryPage/OrderHistoryPage.jsx
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}