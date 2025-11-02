import { useEffect, useState } from "react";
import Slider from "react-slick";

export const HomeTestimonials = () => {
    const [homeTestimonials, setHomeTestimonials] = useState([]);

    useEffect(() => {
        async function fetchHomeTestimonials() {
            const URL = "http://localhost:8000/homeTestimonials";
            const response = await fetch(URL);
            const data = await response.json();
            setHomeTestimonials(data);
        }
        fetchHomeTestimonials();
    }, [])

    const testimonialSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="container">
            <div className="testimonials margin-b85">
                <div className="nav-style-1 absolute-nav hover-to-show">
                    <Slider {...testimonialSettings}>
                        {homeTestimonials.map((homeTestimonial, index) => (
                            <div className="testimonial-item item" key={index}>
                                <div className="item-box">
                                    <div className="item-content">
                                        <div className="content-text">{homeTestimonial.text}</div>
                                        <div className="content-name">{homeTestimonial.name}</div>
                                        <div className="content-address">{homeTestimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}