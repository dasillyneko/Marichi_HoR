import EnrollBanner from "../components/EnrollBanner";
import LifeAtMarichi from "../components/LifeAtMarichi";
import Courses from "../components/CoursesComp";
import Facilities from "../components/Facilities";
import Testimonials from "../components/Testimonials";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div data-aos="fade-up">
        <Courses />
      </div>
      <div data-aos="fade-right">
        <LifeAtMarichi />
      </div>
      <div data-aos="fade-left"> 
        <Facilities />
      </div>
      <div data-aos="zoom-in">
        <Testimonials />
      </div>
      <div data-aos="flip-up">
        <EnrollBanner />
      </div>
    </>
  );
};

export default Home;
