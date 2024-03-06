// import mkLogo from '../../assets/MichaelKellyLogo.jpg';
import '../Navigation/navigation.css';
import  { Link, useLocation }  from 'react-router-dom'

export default function Nav() {
  const location = useLocation();
  return (
    <nav className='nav'>
      <ul className="nav d-flex list-unstyled justify-content-end">
        <li className='nav-item'>
          <Link to="/" className={location.pathname === '/' ? 'active-link nav-link' : 'nav-link'}>About Me</Link>
        </li>
        <li className='nav-item'>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active-link nav-link' : 'nav-link'}>Portfolio</Link>
        </li>
        <li className='nav-item'>
          <Link to="/resume" className={location.pathname === '/resume' ? 'active-link nav-link' : 'nav-link'}>Resume</Link>
        </li>
        <li className='nav-item'>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active-link nav-link' : 'nav-link'}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}