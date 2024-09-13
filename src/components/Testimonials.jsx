import male from '../assets/images/male.jpg';
import female from '../assets/images/female.webp';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h1>ALUMNI SPEAKS</h1>
            <div className="row">
                <div className="testimonials-col">
                    <img src={male} alt="Saurabh Bharam" />
                    <div>
                        <p>
                        I will remember my time at MIT ADT University for the rest of my life. 
                        Students can excel academically and personally in a short period of time. 
                        A students overall development is the goal of university. 
                        We are given numerous opportunities to experiment with and learn new skills. 
                        The interaction with faculty members has been positive, and their advice has always been beneficial to me. 
                        The university provides all of the necessary facilities and an environment for you to be successful in your field. 
                        As an alumnus, I would advise you to seize all opportunities to become a successful person.
                        </p>
                        <h3>Saurabh Bharam</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>

                <div className="testimonials-col">
                    <img src={female} alt="Aishwarya Vaidya" />
                    <div>
                        <p>
                        My four-year journey with MIT ADT University was a significant part of my life. 
                        I would honestly say that MIT ADT University is the best place to learn about your true potential. 
                        The management and professors have faith in the students and encourage them to achieve new heights of success. 
                        I am confident that the alumni association will assist the institute, alumni, and current students in contributing to each others growth.
                        </p>
                        <h3>Aishwarya Vaidya</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;