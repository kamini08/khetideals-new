// import Link from "next/link";
import { useSession } from "next-auth/react";
import GoogleTranslate from "./GoogleTranslate";
// import "./Navbar.css";
const Navbar = () => {
  // const { data: session };
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-header">
          <img src="/images/logo27.jpg" alt="Logo" className="logo" />
          <a href="/" className="brand">
            KHETIDEALS
          </a>
        </div>

        <ul className="nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#footer" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="/auth/login" className="nav-link">
              login
            </a>
          </li>
        </ul>
        <GoogleTranslate />
      </nav>
    </header>
  );
};

export default Navbar;
