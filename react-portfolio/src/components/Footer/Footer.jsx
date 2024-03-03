import gitHubImg from '../../assets/github-mark.png';
import linkedInImg from '../../assets/LI-Logo.png';
import stackImg from '../../assets/logo-stackoverflow.png';
import '../Footer/footer.css'; 

export default function Footer() {
  return (
    <nav className='nav d-flex justify-content-evenly'>
      <ul className="list-unstyled d-flex justify-content-evenly footer-list footer-margin">
        <li className="nav-item mx-3">
          <a href='MAKE A LINKEDIN YOU IDIOT'>
            <img src={linkedInImg} alt="LinkedIn" className=' footer-img' />
          </a>
        </li>
        <li className="nav-item mx-3">
          <a href='https://github.com/mkelly115'>
            <img src={gitHubImg} alt="GitHub" className=' footer-img' />
          </a>
        </li>
        <li className="nav-item mx-3">
          <a href='https://stackoverflow.com/users/23515148/michael-kelly'>
            <img src={stackImg} alt="Stack Overflow" className=' footer-img' />
          </a>
        </li>
      </ul>
    </nav>
  );
}