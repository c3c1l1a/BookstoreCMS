import { NavLink } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
  const links = [{
    id: 1,
    path: '/',
    text: 'Books',
  }, {
    id: 2,
    path: '/categories',
    text: 'Categories',
  }];
  return (
    <nav className="navBar">
      <div>
        <h2>Bookstore CMS</h2>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <svg className="profile-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 22.75q-2.5 0-4.125-1.65T18.25 17q0-2.55 1.625-4.175T24 11.2q2.5 0 4.125 1.625T29.75 17q0 2.45-1.625 4.1Q26.5 22.75 24 22.75Zm-14 14.5v-2.9q0-1.35.75-2.375t2-1.625q2.95-1.3 5.75-1.975T24 27.7q2.7 0 5.5.675t5.75 1.975q1.25.6 2 1.625T38 34.35v2.9Z" /></svg>
    </nav>
  );
};

export default Navbar;
