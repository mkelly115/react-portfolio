import { Link } from 'react-router-dom';
import mkLogo from '../../assets/MichaelKellyLogo.jpg';
import '../Navigation/navigation.css';

const Nav = () => {
  return (
    <nav className='nav d-flex justify-content-between'>
      <div className='d-flex align-items-center'>
        <img src={mkLogo} alt="" className="img-thumbnail custom-logo" />
        <span className='ml-2'>Michael Kelly</span>
      </div>
      <ul className="nav d-flex list-unstyled justify-content-end">
        <li className='nav-item'>
          <Link to="/about" className='nav-link'>About</Link>
        </li>
        <li className='nav-item'>
          <Link to="/portfolio" className='nav-link'>Portfolio</Link>
        </li>
        <li className='nav-item'>
          <Link to="/resume" className='nav-link'>Resume</Link>
        </li>
        <li className='nav-item'>
          <Link to="/contact" className='nav-link'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;