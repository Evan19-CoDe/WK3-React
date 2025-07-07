import { NavLink } from 'react-router-dom';

// Navigation bar component
function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'font-bold' : 'hover:underline'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive ? 'font-bold' : 'hover:underline'
            }
          >
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/api-data"
            className={({ isActive }) =>
              isActive ? 'font-bold' : 'hover:underline'
            }
          >
            API Data
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;