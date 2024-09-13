import React, { useState, useEffect } from 'react';
import campus01 from '../assets/images/background2.png'
import campus02 from '../assets/images/centralg.jpg'
import campus03 from '../assets/images/cultural.png'

const LifeAtMarichi = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { image: campus01, caption: "Student Life" },
        { image: campus02, caption: "Central Garden" },
        { image: campus03, caption: "Cultural Events" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="life-at-marichi">
            <h1>Life at Marichi Hall of Residence</h1>
            <div className="slideshow-container">
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`slide fade ${index === currentSlide ? 'active' : ''}`}
                    >
                        <img src={slide.image} alt={`Life at Marichi ${index + 1}`} />
                        <div className="caption">{slide.caption}</div>
                    </div>
                ))}
            </div>
            
            <div className="dots">
                {slides.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
}

export default LifeAtMarichi;
