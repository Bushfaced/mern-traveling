import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as logsAPI from "../../utilities/logs-api";
import './AddLogForm.css'

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
    <form className="container" id="addLogForm" onSubmit={handleAddLog}>
      <div className="mb-3">
        <input className="form-control" id="addlogForm" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' required/>
      </div>
      <div className="mb-3">
        <input className="form-control" id="addlogForm" value={destination} onChange={(e) => setDestination(e.target.value)} type="text" placeholder='Destination' required/>
      </div>
      <div className="mb-3">
        <textarea className="form-control" id="addlogForm" value={content} onChange={(e) => setContent(e.target.value)} placeholder='Your Experience' required></textarea>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" type="submit" id="addlogForm">
          ADD LOG
        </button>
      </div>
    </form>
  );
}
