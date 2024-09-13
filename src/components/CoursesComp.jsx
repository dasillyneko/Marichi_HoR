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
              <h3>September 20, 2024</h3>
              <p>Welcome Mixer</p>
              <p>
                7-9 PM, Main Lounge. Meet fellow residents, enjoy refreshments and games.<br />

              </p>
            </div>

            {/* Course Column 2 */}
            <div className="course-col">
              <h3>October 5, 2024</h3>
              <p>Sustainability Workshop</p>
              <p>
                2-4 PM, Seminar Room. Learn eco-friendly living tips for your dorm life. <br />
              </p>
            </div>

            {/* Course Column 3 (Repeat of Column 1) */}
            <div className="course-col">
              <h3>November 15, 2024</h3>
              <p>Cultural Night</p>
              <p>
                6 PM, Multipurpose Hall. Celebrate diversity through performances and cuisine.<br />
              </p>
            </div>

            {/* Course Column 4 (Repeat of Column 1) */}
            <div className="course-col">
              <h3>December 1, 2024</h3>
              <p>Exam Prep Week Starts</p>
              <p>
                Quiet hours begin. Watch for study support and stress-relief activities.<br />
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
