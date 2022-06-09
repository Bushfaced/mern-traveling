import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as logsAPI from "../../utilities/logs-api";

export default function AddLogForm() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  async function handleAddLog(e) {
    e.preventDefault();
    const payload = {content, title, destination};
    await logsAPI.add(payload);
    navigate('/logs');
  }

  return (
    <form onSubmit={handleAddLog}>
      <input key={title} value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' required/>
      <input key={destination} value={destination} onChange={(e) => setDestination(e.target.value)} type="text" placeholder='Destination' required/>
      <textarea key={content} value={content} onChange={(e) => setContent(e.target.value)} placeholder='Your Experience' required></textarea>
      <button type='submit'>
        ADD LOG
      </button>
    </form>
  );
}