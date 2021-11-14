import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";


function Navbar() {
  

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          TechWorld 
          < Icons.FaHubspot/>
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}>
                 
                  <Link to={item.path}>{item.title}</Link>
                
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        
      </nav>
    </>
  );
}

export default Navbar;