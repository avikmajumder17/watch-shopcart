import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export const BestSellers = () => {
    const [bestSellerProducts, setBestSellerProducts] = useState([]);

    useEffect(() => {
        async function fetchBestSellerProducts(){
            const URL = "http://localhost:8000/bestSellerProducts";
            const response = await fetch(URL);
            const data = await response.json();
            setBestSellerProducts(data);
        }
        fetchBestSellerProducts();
    }, [])

    const bestSellerSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="product-slider bs-slider pt-5">
            <Slider {...bestSellerSettings}>
                {bestSellerProducts.map((bestSellerProduct) => (
                    <div key={bestSellerProduct.id} className="item product product-item">
                        <div className="product-item-info bs-pii">
                            <div className="image-product">
                                <Link to="/watches">
                                    <img src={bestSellerProduct.image} alt={bestSellerProduct.name} width={350} height={350} loading="lazy" />
                                </Link>
                            </div>

                            <div className="product details product-item-details">
                                <div className="category-product">{bestSellerProduct.category}</div>
                                <strong className="product name product-item-name">
                                    <Link to="/watches">{bestSellerProduct.name}</Link>
                                </strong>
                                <div className="price-box">
                                    <span className="price">${bestSellerProduct.price.toFixed(2)}</span>
                                </div>
                                <div className="product-item-actions">
                                    <button className="action tocart primary">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}