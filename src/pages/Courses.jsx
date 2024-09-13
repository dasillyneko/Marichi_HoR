import Breadcrumb from "../components/Breadcrumb";

const Courses = () => {
  return (
    <>
     <Breadcrumb title="NOTICE BOARD" />
      <section className="course">
        <h1>NOTICE</h1>
        <p>
          Recent Notices
        </p>

        <div className="row">
          <div className="course-col">
            <h3>September 20, 2024</h3>
            <p>
              Welcome Mixer
            </p>
            <p>
              7-9 PM, Main Lounge. Meet fellow residents, enjoy refreshments and games.<br />
            </p>
          </div>

          <div className="course-col">
            <h3>October 5, 2024</h3>
            <p>
              Sustainability Workshop
            </p>
            <p>
              2-4 PM, Seminar Room. Learn eco-friendly living tips for your dorm life. <br />
            </p>
          </div>

          <div className="course-col">
            <h3>November 15, 2024</h3>
            <p>
               Cultural Night
            </p>
            <p>
               6 PM, Multipurpose Hall. Celebrate diversity through performances and cuisine. <br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;