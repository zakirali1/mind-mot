import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
    MindMOT
    </Link>
    <div>
    <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink
            to="/"
            end
            className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
            }
        >
            Home
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
            to="/about"
            end
            className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
            }
        >
            About
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
            to="/eat"
            className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
            }
        >
            Eat
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
            to="/move"
            className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
            }
        >
            Move
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
            to="/relax"
            className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
            }
        >
            Relax
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
            to="/sleep"
            className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
            }
        >
            Sleep
        </NavLink>
        </li>
    </ul>
    </div>
</nav>
);
}

export default Navbar;
