import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AddLogPage from '../AddLogPage/AddLogPage';
import AllLogsPage from '../AllLogsPage/AllLogsPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/logs/new" element={<AddLogPage />} />
            <Route path="/logs" element={<AllLogsPage />} />
            <Route path="/*" element={<Navigate to="/logs" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
