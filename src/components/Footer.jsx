import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="foot-col">
          <h3>Quick Links</h3>
          <ul>

            <li><Link to="https://www.vssut.ac.in/admission.php" target="_blank">Admissions</Link></li>
            <li><Link to="https://www.vssut.ac.in/why-vssut.php" target="_blank">Placememts</Link></li>
            <li><Link to="https://www.vssut.ac.in/news-events.php" target="_blank">News</Link></li>
            <li><Link to="https://www.vssutalumni.org/" target="_blank">Alumni</Link></li>
            <li><Link to="https://www.vssut.ac.in/contact-us.php" target="_blank">Contact Us</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h3>Academics</h3>
          <ul>
            <li><Link to="https://www.vssut.ac.in/academic-courses.php" target="_blank">Courses</Link></li>
            <li><Link to="https://www.vssut.ac.in/academic-calendar.php" target="_blank">Academic Calendar</Link></li>
            <li><Link to="https://www.vssut.ac.in/list-of-subject-2022-2023.php" target="_blank">List of Subjects</Link></li>
            <li><Link to="https://www.vssut.ac.in/scholarship.php" target="_blank">Scolarship</Link></li>

          </ul>
        </div>

        <div className="foot-col">
          <h3>Social Media</h3>
          <ul>
            <li><Link to="https://www.instagram.com/vssut_official/" target="_blank"><i className="fa-brands fa-instagram"></i> Instagram</Link></li>
            <li><Link to="https://www.youtube.com/@VSSUTBurlaOdisha" target="_blank"><i className="fa-brands fa-youtube"></i> Youtube</Link></li>
            <li><Link to="https://www.facebook.com/VSSUTofficial/" target="_blank"><i className="fa-brands fa-facebook"></i> Facebook</Link></li>
            <li><Link to="https://x.com/VSSUT_official/" target="_blank"><i className="fa-brands fa-twitter"></i> Twitter</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h3>Important Links</h3>
          <ul>
            <li><Link to="https://www.vssut.ac.in/" target="_blank">VSSUT Website</Link></li>
            <li><Link to="https://www.vssut.ac.in/payment-instruction.php" target="_blank">Sem Fee Payment</Link></li>
            <li><Link to="https://vssut.samarth.ac.in/index.php/site/login" target="_blank">Samarth-ERP Login</Link></li>
            <li><Link to="https://vssut.ac.in/faculty-profile/login.php" target="_blank">Faculty Login</Link></li>


          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;