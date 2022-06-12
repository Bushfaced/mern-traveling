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
      <nav className='nav flex-column nav-tabs' id='navBar'>
        <div><span>Welcome, {user.name}</span></div>
        <div><Link to="/logs" className="nav-link" id='itemLink'>All Logs</Link></div>
        <div><Link to="/logs/new" className="nav-link" id='itemLink'>Add Log</Link></div>
        <div><Link to="" className="nav-link" id='itemLink' onClick={handleLogOut}>Log Out</Link></div>
      </nav>
    </main>
  );
}