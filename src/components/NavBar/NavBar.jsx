import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
// const bootstrap = require('bootstrap');

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navBar'>
      <Link to="/logs">All Logs</Link>
      &nbsp; | &nbsp;
      <Link to="/logs/new">Add Log</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}