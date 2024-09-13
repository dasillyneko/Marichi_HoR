import React, { useRef } from 'react';
import './Courses.css'; // Assuming you have a separate CSS file for styling

const Courses = () => {
  // Reference to the scrollable div
  const scrollRef = useRef(null);

  // Function to handle scrolling
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300; // Adjust the value based on how much you want to scroll
    } else {
      current.scrollLeft += 300; // Adjust the value based on how much you want to scroll
    }
  };

  return (
    <section className="course">
      <h1>NEWS & EVENTS</h1>
      <div className="scroll-buttons">
        <button className="scroll-btn left" onClick={() => scroll('left')}><i className="fas fa-chevron-left"></i></button>
        <div className="scroll-container" ref={scrollRef}>
          <div className="row">
            {/* Course Column 1 */}
            <div className="course-col">
              <h3>MIT School of Engineering and Sciences (SOES)</h3>
              <p>MIT ADT offers the following branches of Engineering and Sciences</p>
              <p>
                1. Aerospace Engineering<br />
                2. Civil Engineering<br />
                3. Electronics & Communication Engineering<br />
                4. Electronics & Computer Engineering<br />
                5. Mechanical Engineering<br />

              </p>
            </div>

            {/* Course Column 2 */}
            <div className="course-col">
              <h3>MIT Institute of Design (IOD)</h3>
              <p>At the Institute of Design level MIT ADT has the following programs:</p>
              <p>
                1. Bachelor of Design (B.Des.) <br />
                2. Master of Design (Animation Design)<br />
                3. Master of Design (Design Management)<br />
                4. Master of Design (Fashion Management and Marketing)<br />
                5. Master of Design (Film & Video Design)<br />
              </p>
            </div>

            {/* Course Column 3 (Repeat of Column 1) */}
            <div className="course-col">
              <h3>MIT School of Engineering and Sciences (SOES)</h3>
              <p>MIT ADT offers the following branches of Engineering and Sciences</p>
              <p>
                1. Aerospace Engineering<br />
                2. Civil Engineering<br />
                3. Electronics & Communication Engineering<br />
                4. Electronics & Computer Engineering<br />
                5. Mechanical Engineering<br />
              </p>
            </div>

            {/* Course Column 4 (Repeat of Column 1) */}
            <div className="course-col">
              <h3>MIT School of Engineering and Sciences (SOES)</h3>
              <p>MIT ADT offers the following branches of Engineering and Sciences</p>
              <p>
                1. Aerospace Engineering<br />
                2. Civil Engineering<br />
                3. Electronics & Communication Engineering<br />
                4. Electronics & Computer Engineering<br />
                5. Mechanical Engineering<br />
              </p>
            </div>
          </div>
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}><i className="fas fa-chevron-right"></i></button>
      </div>
    </section>
  );
}

export default Courses;
