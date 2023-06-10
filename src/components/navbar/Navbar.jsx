import React, { useState } from 'react';
import './navbar.css';
import { MenuItems } from '../menu/Menu';

const Navbar = () => {
  const [navbar, setnavbar] = useState(false);

  return (
    <nav className="navbarItems">
      <h1 className="navbarLogo">Trippy</h1>

      <div className="menuIcon">
        <i className={navbar ? 'fas fa-times' : 'fas fa-bars'} onClick={() => setnavbar(!navbar)}></i>
      </div>

      <ul className={navbar ? 'navbarMenu active' : 'navbarMenu'} onClick={() => setnavbar(!navbar)}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
