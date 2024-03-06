import gitHubImg from '../../assets/GitHub_Logo_White.png';
import linkedInImg from '../../assets/LI-Logo.png';
import stackImg from '../../assets/logo-stackoverflow.png';
import '../Footer/footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <nav className='nav d-flex justify-content-evenly'>
        <ul className="list-unstyled d-flex justify-content-evenly footer-list">
          <li className="nav-item mx-3">
            <a href='https://www.linkedin.com/in/michael-kelly-1710922b9/' target="_blank" rel="noopener noreferrer">
              <img src={linkedInImg} alt="LinkedIn" className='footer-img' />
            </a>
          </li>
          <li className="nav-item mx-3">
            <a href='https://github.com/mkelly115' target="_blank" rel="noopener noreferrer">
              <img src={gitHubImg} alt="GitHub" className='footer-img' />
            </a>
          </li>
          <li className="nav-item mx-3">
            <a href='https://stackoverflow.com/users/23515148/michael-kelly' target="_blank" rel="noopener noreferrer">
              <img src={stackImg} alt="Stack Overflow" className='footer-img' />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}