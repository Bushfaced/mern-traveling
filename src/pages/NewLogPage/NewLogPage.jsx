import { checkToken } from "../../utilities/users-service";
import { NewLogForm } from "../../components/NewLogForm/NewLogForm";

export default function NewLogPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
      <h1>Add Travel Logs</h1>
      <NewLogForm />
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}