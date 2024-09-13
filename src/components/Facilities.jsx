import library from '../assets/images/library.jpeg'
import sports from '../assets/images/sports.jpg'
import canteen from '../assets/images/canteen.jpg'

const Facilities = () => {
    return (
        <section className="facilities">
            <h1>Our Facilities</h1>
            <div className="row">
                <div className="facilities-col">
                    <img src={library} alt="Library" />
                    <h3>Library</h3>
                </div>

                <div className="facilities-col">
                    <img src={sports} alt="Sports" />
                    <h3>Sports</h3>
                </div>

                <div className="facilities-col">
                    <img src={canteen} alt="Canteen" />
                    <h3>Food & Canteens</h3>
                </div>
            </div>
        </section>
    );
}

export default Facilities;