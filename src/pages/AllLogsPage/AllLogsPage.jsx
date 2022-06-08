import { checkToken } from "../../utilities/users-service";

export default function AllLogsPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
      <h1>All Logs</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}