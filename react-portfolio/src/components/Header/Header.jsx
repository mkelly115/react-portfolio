import Nav from '../Navigation/index';
import '../Header/header.css'

export default function Header() {
  return (
    <header className='header'>
      <div className='brand ml-2'>
        <span className='ml-4'>Michael Kelly</span>
      </div>
      <Nav />
    </header>
  );
}