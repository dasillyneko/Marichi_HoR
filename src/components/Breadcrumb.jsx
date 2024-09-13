import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/images/file.png'

const Breadcrumb = ({ title }) => {
  const showMenu = () => {
    document.getElementById("navLinks").style.right = "0";
  };

  const hideMenu = () => {
    document.getElementById("navLinks").style.right = "-200px";
  };

  return (
    <section className="sub-header">
      <nav>
        <a href="/">
          <img src={logo} alt="Header Logo" />
        </a>
        <h1>MARICHI HALL OF RESIDENCE</h1>
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times" onClick={hideMenu}></i>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/Courses">NOTICE BOARD</Link></li>
            <li><Link to="/About">ABOUT</Link></li>
            <li><Link to="/Contact">CONTACT</Link></li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={showMenu}></i>
      </nav>

      <h1>{title}</h1>
    </section>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired
};

export default Breadcrumb;
