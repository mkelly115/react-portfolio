// import mkLogo from '../../assets/MichaelKellyLogo.jpg';
import '../Navigation/navigation.css';
import  { Link }  from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul className="nav d-flex list-unstyled justify-content-end">
        <li className='nav-item'>
          <Link to="/" activeClassName="active-link" className='nav-link'>About Me</Link>
        </li>
        <li className='nav-item'>
          <Link to="/portfolio" activeClassName="active-link" className='nav-link'>Portfolio</Link>
        </li>
        <li className='nav-item'>
          <Link to="/resume" activeClassName="active-link" className='nav-link'>Resume</Link>
        </li>
        <li className='nav-item'>
          <Link to="/contact" activeClassName="active-link" className='nav-link'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}