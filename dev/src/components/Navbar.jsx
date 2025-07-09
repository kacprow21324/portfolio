import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const activeStyle = { fontWeight: 'bold', color: '#2c3e50' };

  return (
    <nav className="p-4 bg-white shadow">
      <ul className="flex gap-4 justify-center">
        <li>
          <NavLink to="/" end style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Strona główna
          </NavLink>
        </li>
        <li>
          <NavLink to="/certificates" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Certyfikaty
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Projekty
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}