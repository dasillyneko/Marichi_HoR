import {Link} from 'react-router-dom';
import Hero from './Hero';
import logo from '../assets/images/file.png';

const Header = () => {
  const showMenu = () => {
    document.getElementById ('navLinks').style.right = '0';
  };

  const hideMenu = () => {
    document.getElementById ('navLinks').style.right = '-200px';
  };

  return (
    <header>
      <nav>
        <a className="logo" href="/" data-aos="fade-right">
          <img src={logo} alt="Header Logo" />
        </a>
        <h1 data-aos="fade-down">VSSUT</h1>
        <div className="nav-links" id="navLinks" data-aos="fade-left">
          <i className="fa fa-times" onClick={hideMenu} />
          <ul>
            <li data-aos="fade-left" data-aos-delay="100">
              <Link to="/">HOME</Link>
            </li>
            <li data-aos="fade-left" data-aos-delay="200">
              <Link to="/Courses">NOTICE BOARD</Link>
            </li>
            <li data-aos="fade-left" data-aos-delay="300">
              <Link to="/About">ABOUT</Link>
            </li>
            <li data-aos="fade-left" data-aos-delay="400">
              <Link to="/Contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={showMenu} />
      </nav>
      <Hero />
    </header>
  );
};

export default Header;