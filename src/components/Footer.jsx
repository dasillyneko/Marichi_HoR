import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="foot-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Academics</Link></li>
            <li><Link to="/">Admissions</Link></li>
            <li><Link to="/">Placememts</Link></li>
            <li><Link to="/">News</Link></li>
            <li><Link to="/">Alumni</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h3>Academics</h3>
          <ul>
            <li><Link to="/">Engineering</Link></li>
            <li><Link to="/">Design</Link></li>
            <li><Link to="/">Management</Link></li>
            <li><Link to="/">Architecture</Link></li>
            <li><Link to="/">Food Technology</Link></li>
            <li><Link to="/">Law</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h3>Social Media</h3>
          <ul>
            <li><Link to="/"><i className="fa-brands fa-instagram"></i> Instagram</Link></li>
            <li><Link to="/"><i className="fa-brands fa-youtube"></i> Youtube</Link></li>
            <li><Link to="/"><i className="fa-brands fa-facebook"></i> Facebook</Link></li>
            <li><Link to="/"><i className="fa-brands fa-twitter"></i> Twitter</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h3>Initiatives</h3>
          <ul>
            <li><Link to="/">Atal Incubation Centre (AIC)</Link></li>
            <li><Link to="/">Persona Fest – 2024</Link></li>
            <li><Link to="/">Convocation 2022IGTT (ADTMVEAFM) 6th National Conference</Link></li>
            <li><Link to="/">Vishwanath Sports Meet – 2024</Link></li>
            <li><Link to="/">MIT Vishwajyoti International School</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;