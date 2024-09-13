import Breadcrumb from "../components/Breadcrumb";
import about from "../assets/images/background2.png";

const AboutUs = () => {
  return (
    <div>
      <Breadcrumb title="About Us" />
      <div className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>MARICHI HOR</h1>
            <p>
              <b>
            "Marichi HOR: Where Brilliance Finds Its Home"
              </b>
              <br />
              Marichi Hall of Residence stands as a beacon of academic excellence and community living on our vibrant campus. Named after the Sanskrit word for "ray of light," Marichi Hall illuminates the path for ambitious scholars seeking a home away from home. Our state-of-the-art facilities blend seamlessly with cozy communal spaces, fostering an environment where intellect thrives and lifelong friendships flourish. From quiet study nooks to lively common rooms, Marichi Hall caters to every aspect of student life. Here, residents enjoy modern amenities, engage in enriching cultural activities, and benefit from supportive staff dedicated to their well-being.
              <br />
              Whether you're burning the midnight oil or forging connections with peers from diverse backgrounds, Marichi Hall provides the perfect backdrop for your collegiate journey. Join us at Marichi Hall, where bright minds converge and future leaders emerge.
            </p>
          </div>
          <div className="about-col">
            <img src={about} alt="About" />
          </div>
        </div>

        <div className="mission">
          <h1>Mission</h1>
          <p>
          At Marichi Hall of Residence, our mission is to cultivate a nurturing and intellectually stimulating living environment that empowers students to reach their fullest potential. We strive to create a diverse, inclusive community where academic excellence, personal growth, and social responsibility intertwine. Our goal is to provide not just a place to stay, but a transformative experience that prepares residents for future leadership roles in society. Through innovative programs, supportive services, and a culture of mutual respect, we aim to inspire our students to become critical thinkers, compassionate individuals, and active global citizens. Marichi Hall is committed to fostering a sense of belonging, encouraging cross-cultural understanding, and equipping our residents with the skills and confidence to illuminate their own paths to success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
