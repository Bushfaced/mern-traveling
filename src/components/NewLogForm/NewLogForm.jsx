import { useState } from 'react';

export function NewLogForm({handleNewLog}) {
  const [content, setContent] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
    handleNewLog(content);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={content} onChange={e => setContent(e.target.value)}/>
      <button type="submit">ADD LOG</button>
    </form>
  );
}