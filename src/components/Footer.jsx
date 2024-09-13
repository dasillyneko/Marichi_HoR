import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="foot-col">
          <h3>Quick Links</h3>
          <ul>

            <li><Link to="https://www.vssut.ac.in/admission.php">Admissions</Link></li>
            <li><Link to="https://www.vssut.ac.in/why-vssut.php">Placememts</Link></li>
            <li><Link to="https://www.vssut.ac.in/news-events.php">News</Link></li>
            <li><Link to="https://www.vssutalumni.org/">Alumni</Link></li>
            <li><Link to="https://www.vssut.ac.in/contact-us.php">Contact Us</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h3>Academics</h3>
          <ul>
            <li><Link to="https://www.vssut.ac.in/academic-courses.php">Courses</Link></li>
            <li><Link to="https://www.vssut.ac.in/academic-calendar.php">Academic Calendar</Link></li>
            <li><Link to="https://www.vssut.ac.in/list-of-subject-2022-2023.php">List of Subjects</Link></li>
            <li><Link to="https://www.vssut.ac.in/scholarship.php">Scolarship</Link></li>

          </ul>
        </div>

        <div className="foot-col">
          <h3>Social Media</h3>
          <ul>
            <li><Link to="https://www.instagram.com/vssut_official/"><i className="fa-brands fa-instagram"></i> Instagram</Link></li>
            <li><Link to="https://www.youtube.com/@VSSUTBurlaOdisha"><i className="fa-brands fa-youtube"></i> Youtube</Link></li>
            <li><Link to="https://www.facebook.com/VSSUTofficial/"><i className="fa-brands fa-facebook"></i> Facebook</Link></li>
            <li><Link to="https://x.com/VSSUT_official/"><i className="fa-brands fa-twitter"></i> Twitter</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h3>Important Links</h3>
          <ul>
            <li><Link to="https://www.vssut.ac.in/">VSSUT Website</Link></li>
            <li><Link to="https://www.vssut.ac.in/payment-instruction.php">Sem Fee Payment</Link></li>
            <li><Link to="https://vssut.samarth.ac.in/index.php/site/login  ">Samarth-ERP Login</Link></li>
            <li><Link to="https://vssut.ac.in/faculty-profile/login.php">Faculty Login</Link></li>


          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;