import mkLogo from '../../assets/MichaelKellyLogo.jpg';
import '../Navigation/navigation.css';

export default function Nav() {
  return (
    <nav className='nav d-flex justify-content-between'>
      <div className='d-flex align-items-center'>
        <img
          src={mkLogo}
          alt=""
          className="img-thumbnail custom-logo"
        />
        <span className='ml-2'>Michael Kelly</span>
      </div>
      <ul className="nav d-flex list-unstyled justify-content-end">
        <li className='nav-item'>
          <a className='nav-link' href="#">About</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href="#">Portfolio</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href="#">Resume</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}