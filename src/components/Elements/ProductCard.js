import { Link } from "react-router-dom";

export const ProductCard = ({product}) => {
    return (
        <li className="item product product-item">
            <div className="product-item-box">
                <div className="product-item-info" data-container="product-grid">
                    <div className="image-product">
                        <Link to={`/watches/${product.id}`} className="product photo product-item-photo">
                            <span className="product-image-container product-image-container-137" style={{ width: 350 }}>
                                <span className="product-image-wrapper">
                                    <img className="product-image-photo lazyload" src={product.image} loading="lazy" width={350} height={350} alt="Hublot Spirit Of Big Bang Moonphase Titanium Blue" />
                                </span>
                            </span>

                            <style dangerouslySetInnerHTML={{__html:"\n /**\n.product-image-container-137 {\n width: 350px;\n}\n*/\n.product-image-container-137 span.product-image-wrapper {\n padding-bottom: 100%;\n}\n" }}/>
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
                                <form
                                    data-role="tocart-form"
                                    data-product-sku="MT-5468013"
                                    action="http://magento2.magentech.com/themes/sm_time/pub/default/checkout/cart/add/uenc/aHR0cDovL21hZ2VudG8yLm1hZ2VudGVjaC5jb20vdGhlbWVzL3NtX3RpbWUvcHViL2RlZmF1bHQvbWVuLXdhdGNoZXMuaHRtbA~~/product/137/"
                                    method="post"
                                >
                                    <input
                                        type="hidden"
                                        name="product"
                                        defaultValue={137}
                                    />
                                    <input
                                        type="hidden"
                                        name="uenc"
                                        defaultValue="aHR0cDovL21hZ2VudG8yLm1hZ2VudGVjaC5jb20vdGhlbWVzL3NtX3RpbWUvcHViL2RlZmF1bHQvY2hlY2tvdXQvY2FydC9hZGQvdWVuYy9hSFIwY0RvdkwyMWhaMlZ1ZEc4eUxtMWhaMlZ1ZEdWamFDNWpiMjB2ZEdobGJXVnpMM050WDNScGJXVXZjSFZpTDJSbFptRjFiSFF2YldWdUxYZGhkR05vWlhNdWFIUnRiQX5-L3Byb2R1Y3QvMTM3Lw~~"
                                    />
                                    <input
                                        name="form_key"
                                        type="hidden"
                                        defaultValue="yDWD4CGlrqta0hiR"
                                    />
                                    <button
                                        type="submit"
                                        title="Add to Cart"
                                        className="action tocart primary"
                                    >
                                        <span>Add to Cart</span>
                                    </button>
                                </form>
                            </div>

                            <div data-role="add-to-links" className="actions-secondary">
                                <a href="/" className="action towishlist" title="Add to Wish List" aria-label="Add to Wish List" data-post='{"action":"http:\/\/magento2.magentech.com\/themes\/sm_time\/pub\/default\/wishlist\/index\/add\/","data":{"product":137,"uenc":"aHR0cDovL21hZ2VudG8yLm1hZ2VudGVjaC5jb20vdGhlbWVzL3NtX3RpbWUvcHViL2RlZmF1bHQvbWVuLXdhdGNoZXMuaHRtbA~~"}}' data-action="add-to-wishlist" role="button" >
                                    <span>Add to Wish List</span>
                                </a>

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