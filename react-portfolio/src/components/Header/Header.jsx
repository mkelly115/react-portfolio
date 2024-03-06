import Nav from '../Navigation/index';
import '../Header/header.css'

export default function Header() {
  return (
    <header className='header'>
      <div className='brand'>
        <span className='ml-2'>Michael Kelly</span>
      </div>
      <Nav />
    </header>
  );
}