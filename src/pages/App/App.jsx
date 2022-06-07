import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
<<<<<<< HEAD
import LogIndex from '../LogIndex/LogIndex';
import NewLogPage from '../NewLogPage/NewLogPage';
=======
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
>>>>>>> parent of a3cee67 (navbar changed)
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
            {/* Route components in here */}
<<<<<<< HEAD
            <Route path="/logs/new" element={< NewLogPage />} />
            <Route path="/logs" element={< LogIndex />} />
=======
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
>>>>>>> parent of a3cee67 (navbar changed)
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
