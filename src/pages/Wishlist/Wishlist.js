import { Link } from "react-router-dom";

import { useWishlist } from "../../context/WishlistContext";

import "./Css/Wishlist.css";


export const Wishlist = () => {
    const { productsWishlist, removeFromWishlist } = useWishlist();

    console.log(productsWishlist);

    return (
        <>
            <div className="title-breadcrumbs">
                <div className="container">
                    <div className="page-title-wrapper">
                        <h1 className="page-title">
                            <span className="base">Wishlist</span>
                        </h1>
                    </div>
                </div>
            </div>

            <main id="maincontent" className="page-main">
                <div className="columns container">
                    <div className="column main">
                        {productsWishlist.length > 0 ? (
                            <div className="oijdojoewrwer">
                                <ol className="products block-style-1 list row items shop-items-wrapper product-items">
                                    {productsWishlist.map(product => (
                                        <li className="item product col-lg-3 product-item mb-5">
                                            <div className="product-item-box">
                                                <div className="sdfewfcsdreqwewr" data-container="product-grid">
                                                    <div className="image-product">
                                                        <Link to="" className="product photo product-item-photo">
                                                            <img
                                                                className="product-image-photo position-relative"
                                                                src={product.image}
                                                                loading="lazy"
                                                                width={350}
                                                                height={350}
                                                                alt="Hublot Spirit Of Big Bang Moonphase Titanium Blue"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="product details product-item-details">
                                                        <strong className="product name product-item-name">
                                                            <Link className="product-item-link" to="">
                                                                {product.name}
                                                            </Link>
                                                        </strong>
                                                        <div className="product-reviews-summary short">
                                                            <div className="rating-summary">
                                                                <span className="label">
                                                                    <span>Rating:</span>
                                                                </span>
                                                                <div className="rating-result" id="rating-result_137" title="60%">
                                                                    <span>
                                                                        <span>60%</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="reviews-actions">
                                                                <Link className="action view" to="">
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
                                                            <div className="actions-primary w-100">
                                                                <button onClick={() => removeFromWishlist(product)}
                                                                    title="Remove from Cart"
                                                                    className="action tocart btn-danger w-100"
                                                                >
                                                                    <span>Remove from wishlist</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>                                        
                                    ))}
                                </ol>                                
                            </div>
                        )

                        : (
                            <div className="cart-empty">
                                <p>You have no items in your wishlist.</p>

                                <p>Click <Link to="/">here</Link> to continue shopping or add to <Link to="/cart">cart</Link> page.</p>
                            </div>
                        )}
                    </div>

                    <div className="dewtygttrr text-right w-100">
                        <button className="btn btn-dark">Add to Shopping Cart</button>
                    </div>
                </div>
            </main>
        </>
    )
}