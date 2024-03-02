

export default function Nav() {
    

    return (
      <nav className='nav d-flex justify-content-between'>
        <div className='d-flex justify-content-start'>
          <div className='align-self-center'>
          <img
               src='./react-portfolio/src/assets/MichaelKellyLogo.jpg'
               alt=""
               className="img-fluid"
        />
          Michael Kelly
          </div>
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
  