import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { useFilter } from "../../../../context/FilterContext";
import { useCart } from "../../../../context/CartContext";
import { useWishlist } from "../../../../context/WishlistContext";

export const BestSellers = () => {
    const { productList, initialProductList } = useFilter();
    const { cartList, addToCart, removeFromCart } = useCart();
    const { productsWishlist, addToWishlist, removeFromWishlist } = useWishlist();


    useEffect(() => {
        async function fetchProducts() {
            const URL = `http://localhost:8000/products`;
            const response = await fetch(URL);
            const data = await response.json();

            const bestSellerProducts = data.filter(bestSellerItem => bestSellerItem.best_sller === true);

            initialProductList(bestSellerProducts);
        }

        fetchProducts();
    }, []);

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
                {productList.map(bestSellerProduct => (
                    <div key={bestSellerProduct.id} className="item product product-item">
                        <div className="product-item-info bs-pii">
                            <div className="image-product">
                                <Link to={`/watches/${bestSellerProduct.id}`}>
                                    <img src={bestSellerProduct.image} alt={bestSellerProduct.name} width={350} height={350} loading="lazy" />
                                </Link>
                            </div>

                            <div className="product details product-item-details">
                                <strong className="product name product-item-name">
                                    <Link to={`/watches/${bestSellerProduct.id}`}>{bestSellerProduct.name}</Link>
                                </strong>

                                <div className="price-box">
                                    <span className="price">${bestSellerProduct.price}</span>
                                </div>

                                <div className="product-item-actions d-flex align-items-center justify-content-center flex-wrap">
                                    {cartList.some(item => item.id === bestSellerProduct.id) ? (
                                        <button onClick={() => removeFromCart(bestSellerProduct)} title="Remove from Cart" className="action mr-3 btn-danger"><span>Remove from Cart</span></button>
                                    ) 

                                    : (
                                        <button onClick={() => addToCart(bestSellerProduct)} title="Add to Cart" className="action mr-3 tocart primary" style={{fontSize: "1.4rem"}}><span>Add to Cart</span></button>
                                    )}

                                    {productsWishlist.some(item => item.id === bestSellerProduct.id) ? (
                                        <span onClick={() => removeFromWishlist(bestSellerProduct)} className="ioujijhineiwr"><i class="bi bi-heart-fill" style={{fontSize: "2.5rem", cursor: "pointer"}}></i></span>
                                    )
                                
                                    : (
                                        <span onClick={() => addToWishlist(bestSellerProduct)} className="ioujijhineiwr"><i class="bi bi-heart" style={{fontSize: "2.5rem", cursor: "pointer"}}></i></span>
                                    )}                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}                
            </Slider>
        </div>
    )
}