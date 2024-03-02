import gitHubImg from '../../assets/github-mark.png';
import linkedInImg from '../../assets/LI-Logo.png';
import stackImg from '../../assets/logo-stackoverflow.png';
import '../Footer/footer.css'; 

export default function Footer() {
  return (
    <nav className='nav d-flex justify-content-center'>
      <ul className="nav d-flex list-unstyled justify-content-center footer-list">
        <li className="nav-item">
          <a href='MAKE A LINKEDIN YOU IDIOT'>
            <img src={linkedInImg} alt="LinkedIn" className='img-thumbnail footer-img' />
          </a>
        </li>
        <li className="nav-item">
          <a href='https://github.com/mkelly115'>
            <img src={gitHubImg} alt="GitHub" className='img-thumbnail footer-img' />
          </a>
        </li>
        <li className="nav-item">
          <a href='https://stackoverflow.com/users/23515148/michael-kelly'>
            <img src={stackImg} alt="Stack Overflow" className='img-thumbnail footer-img' />
          </a>
        </li>
      </ul>
    </nav>
  );
}