import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <main className='container'>
      <nav className='nav flex-column nav-pills nav-fill shadow-lg' id='navBar'>
        <span>Welcome, {user.name}</span>
        <Link to="/logs" className="nav-link" id='itemLink'>All Logs</Link>
        <Link to="/logs/new" className="nav-link" id='itemLink'>Add Log</Link>
        <Link to="" className="nav-link" id='itemLink' onClick={handleLogOut}>Log Out</Link>
      </nav>
    </main>
  );
}