import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

export const ProductCard = ({product}) => {
    const { cartList, addToCart, removeFromCart } = useCart();
    const {productsWishlist, addToWishlist, removeFromWishlist} = useWishlist();
    const [inCart, setInCart] = useState(false);

    // eslint-disable-next-line
    useEffect(() => {
        const alreadyInCart = cartList.find(item => item.id === product.id);

        alreadyInCart ? setInCart(true) : setInCart(false);
    }, [cartList]);

    return (
        <li className="item product product-item">
            <div className="product-item-box">
                <div className="product-item-info" data-container="product-grid">
                    <div className="image-product">
                        <Link to={`/watches/${product.id}`} className="product photo product-item-photo">
                            <span className="product-image-container product-image-container-137" style={{ width: 350 }}>
                                <span className="product-image-wrapper">
                                    <img className="product-image-photo position-relative" src={product.image} loading="lazy" width={350} height={350} alt="Hublot Spirit Of Big Bang Moonphase Titanium Blue" />
                                </span>
                            </span>
                        </Link>
                    </div>

                    <div className="product details product-item-details">
                        <strong className="product name product-item-name">
                            <Link className="product-item-link" to={`/watches/${product.id}`}>
                                {product.name}
                            </Link>
                        </strong>
                        <div className="product-reviews-summary short">
                            <div className="rating-summary">
                                <span className="label">
                                    <span>Rating:</span>
                                </span>
                                <div
                                    className="rating-result"
                                    id="rating-result_137"
                                    title="60%"
                                >
                                    <span>
                                        <span>60%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="reviews-actions">
                                <Link className="action view" to={`/watches/${product.id}`}>
                                    {product.reviews} &nbsp;<span>Review </span>
                                </Link>
                            </div>
                        </div>
                        <div
                            className="price-box price-final_price"
                            data-role="priceBox"
                            data-product-id={137}
                            data-price-box="product-id-137"
                        >
                            <span className="price-container price-final_price tax weee">
                                <span
                                    id="product-price-137"
                                    data-price-amount={315}
                                    data-price-type="finalPrice"
                                    className="price-wrapper "
                                >
                                    <span className="price">${product.price}</span>
                                </span>
                            </span>
                        </div>

                        <div className="product actions product-item-actions">
                            <div className="actions-primary">
                                {inCart ? (
                                    <button onClick={() => removeFromCart(product)}  title="Remove from Cart" className="action btn-danger"><span>Remove from Cart</span></button>
                                ) 

                                : (
                                    <button onClick={() => addToCart(product)} title="Add to Cart" className="action tocart primary"><span>Add to Cart</span></button>
                                )}
                            </div>

                            <div data-role="add-to-links" className="actions-secondary">
                                {productsWishlist.some(item => item.id === product.id) ? (
                                    <button onClick={() => removeFromWishlist(product)} className="action towishlist dfrrewerqwqw" title="Add to Wish List" aria-label="Add to Wish List" data-action="add-to-wishlist">
                                        <i class="bi bi-heart-fill"></i> <span>Remove from Wishlist</span>
                                    </button>
                                )
                                
                                : (
                                    <button onClick={() => addToWishlist(product)} className="action towishlist dfrrewerqwqw" title="Add to Wish List" aria-label="Add to Wish List" data-action="add-to-wishlist">
                                        <i class="bi bi-heart"></i> <span>Add to Wish List</span>
                                    </button>
                                )}                                

                                <a href="/" className="action tocompare" title="Add to Compare" aria-label="Add to Compare" data-post='{"action":"http:\/\/magento2.magentech.com\/themes\/sm_time\/pub\/default\/catalog\/product_compare\/add\/","data":{"product":"137","uenc":"aHR0cDovL21hZ2VudG8yLm1hZ2VudGVjaC5jb20vdGhlbWVzL3NtX3RpbWUvcHViL2RlZmF1bHQvbWVuLXdhdGNoZXMuaHRtbA~~"}}' role="button">
                                    <span>Add to Compare</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}