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
            <h3>Undergraduate Programmes</h3>
            <p>
              NSUT offers the following branches of B.Tech Programmes at the
              Undergraduate Level:
            </p>
            <p>
              1. B.Tech In Electronics And Communication Engineering <br />
              2. B.Tech In Computer Engineering <br />
              3. B.Tech In Computer Science And Engineering (With Specialisation
              In Artificial Intelligence) <br />
              4. B.Tech In Mathematics And Computing <br />
              5. B.Tech In Electrical Engineering <br />
              6. B.Tech In Instrumentation And Control Engineering <br />
              7. B.Tech In Manufacturing Process And Automation Engineering{" "}
              <br />
              8. B.Tech In Mechanical Engineering <br />
              9. B.Tech In Information Technology <br />
              10. B.Tech In Bio-Technology <br />
            </p>
          </div>

          <div className="course-col">
            <h3>Postgraduate Programmes</h3>
            <p>
              At the Post-Graduate (M.Tech.) level NSUT has the following
              programs:
            </p>
            <p>
              1. M.Tech. In Computer Science <br />
              2. M.Tech. In Signal Processing <br />
              3. M.Tech. In Embedded System & VLSI <br />
              4. M.Tech. In Process Control <br />
              5. M.Tech. In Communication And Networking <br />
              6. M.Tech. In Industrial Electronics <br />
              7. M.Tech. In Mechatronics <br />
              8. M.Tech. In Production Engineering <br />
              9. M.Tech. In Engineering Management <br />
              10. M.Tech. In CAD CAM <br />
              11. M.Tech. In Manufacturing Process & Automation <br />
              12. M.Tech. In Biochemical Engineering <br />
              13. M.Tech. In Bioinformatics <br />
              14. M.Tech. In Nano Technology <br />
            </p>
          </div>

          <div className="course-col">
            <h3>Doctorate Programmes</h3>
            <p>
              The University offers Doctorate of Philosophy (Ph.D.) degree
              programmes in the following fields:
            </p>
            <p>
              1. Electronics And Communication Engineering <br />
              2. Computer Engineering <br />
              3. Instrumentation And Control Engineering <br />
              4. Manufacturing Process And Automation Engineering <br />
              5. Information Technology <br />
              6. Bio-Technology <br />
              7. Management Studies <br />
              8. Humanities And Social Sciences <br />
              9. Mathematics <br />
              10. Physics <br />
              11. Chemistry <br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;