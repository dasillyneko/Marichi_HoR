import Breadcrumb from "../components/Breadcrumb"

const Contact = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <div>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=Marichi+Hall+of+residence&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-us">
          <div className="row">
            <div className="contact-col">
              <div>
                <i className="fa fa-home"></i>
                <span>
                  <h5>Kirba Chowk, Burla, VSSUT</h5>
                  <p>Sambalpur - 768018, Odisha India</p>
                </span>
              </div>

              <div>
                <i className="fa fa-phone"></i>
                <span>
                  <h5>020- 26912901 / 02 / 03 , 9595124234</h5>
                  <p>Office hours: 9:00 am to 4.30pm</p>
                </span>
              </div>

              <div>
                <i className="fa fa-envelope"></i>
                <span>
                  <h5>For General Enquiry: vssut.ac.in</h5>
                  <p>For Admissions: registrar@vssut.ac.in</p>
                </span>
              </div>
            </div>

            <div className="contact-col">
              <form action="#">
                <input type="text" placeholder="Enter your name" required />
                <input type="email" placeholder="Enter your email address" required />
                <input type="text" placeholder="Enter your subject" required />
                <textarea rows="8" placeholder="Message" required></textarea>
                <button type="submit" className="hero-btn blue-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;