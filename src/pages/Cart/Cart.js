import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import "./Cart.css";

export const Cart = () => {
    const { cartList, removeFromCart, total } = useCart();

    console.log(cartList)

    return (
        <>
            <div className="title-breadcrumbs">
                <div className="container">
                    <div className="page-title-wrapper">
                        <h1 className="page-title">
                            <span className="base" data-ui-id="page-title-wrapper">
                                Shopping Cart
                            </span>
                        </h1>
                    </div>
                </div>
            </div>

            <main id="maincontent" className="page-main">
                <div className="columns container">
                    <div className="column main">
                        {cartList.length ? (
                            <div className="oijdojoewrwer row">
                                <ol className="products col-lg-9 block-style-1 list row items shop-items-wrapper product-items">
                                    {cartList.map(cartListItem => (
                                        <li className="item product col-lg-3 product-item mb-5">
                                            <div className="product-item-box">
                                                <div className="sdfewfcsdreqwewr" data-container="product-grid">
                                                    <div className="image-product">
                                                        <Link to={`/watches/${cartListItem.id}`} className="product photo product-item-photo">
                                                            <img
                                                                className="product-image-photo position-relative"
                                                                src={cartListItem.image}
                                                                loading="lazy"
                                                                width={350}
                                                                height={350}
                                                                alt="Hublot Spirit Of Big Bang Moonphase Titanium Blue"
                                                            />
                                                        </Link>
                                                    </div>

                                                    <div className="product details product-item-details">
                                                        <strong className="product name product-item-name">
                                                            <Link className="product-item-link" to={`/watches/${cartListItem.id}`}>
                                                                {cartListItem.name}
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
                                                                <Link className="action view" to={`/watches/${cartListItem.id}`}>
                                                                    {cartListItem.reviews} &nbsp;<span>Review </span>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="price-box price-final_price">
                                                            <span className="price-container price-final_price tax weee">
                                                                <span className="price-wrapper">
                                                                    <span className="price">${cartListItem.price}</span>
                                                                </span>
                                                            </span>
                                                        </div>

                                                        <div className="product actions product-item-actions">
                                                            <div className="actions-primary">
                                                                <button onClick={() => removeFromCart(cartListItem)}
                                                                        title="Remove from Cart"
                                                                        className="action tocart btn-danger"
                                                                    >
                                                                    <span>Remove from Cart</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>

                                <div className="col-lg-3">
                                    <div className="oijewjewrrr">
                                        <h2 className="mb-4"><strong>In Your Shopping Cart</strong></h2>
                                        
                                        <div className="diuhejiojweerr p-3">
                                            {cartList.map(item => (
                                                <div className="ioejijrwerer py-3 row">
                                                    <div className="col-lg-9">
                                                        <div className="d-flex">
                                                            <div className="dikehrewr mr-3">
                                                                <img src={item.image} alt="" />
                                                            </div>

                                                            <div className="dewhirewrewr">
                                                                <h4 className="mb-2">{item.name}</h4>

                                                                <p className="mb-0">Qty: 1</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3">
                                                        <div className="doewjojrwer text-right">
                                                            <p className="mb-0"><strong>${item.price}</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            <table className="table">
                                                <tr>
                                                    <td>Subtotal</td>

                                                    <td className="text-right">${total}</td>
                                                </tr>

                                                <tr>
                                                    <td>GST</td>

                                                    <td className="text-right">18%</td>
                                                </tr>

                                                <tr>
                                                    <td>Grandtotal</td>

                                                    <td className="text-right">{`$${(((total*18)/100 )+ total).toFixed(2)}`}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        
                        : (                            
                            <div className="cart-empty">
                                <p>You have no items in your shopping cart.</p>

                                <p>
                                    Click <Link to="/">here</Link> to continue shopping.
                                </p>
                            </div>
                        )}                                              
                    </div>

                    {/* <div className="dewtygttrr text-right w-100">
                        <button className="btn btn-dark">Proceed to Checkout</button>
                    </div> */}
                </div>
            </main>
        </>
    )
}