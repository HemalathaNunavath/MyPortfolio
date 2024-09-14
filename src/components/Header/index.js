import './index.css';
import {Link} from 'react-router-dom'


const Header=()=>(
    <header className="header">
      <a href="#" className="logo">Portfolio</a>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
)

export default Header