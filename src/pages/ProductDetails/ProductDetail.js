import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from 'react-slick';

import { BreadCrumbs } from "../../components";
import { BestSeller } from "../../components/Elements/BestSeller";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./ProductDetail.css";


export const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const {cartList, addToCart, removeFromCart} = useCart();
    const {productsWishlist, addToWishlist, removeFromWishlist} = useWishlist();
    const { id } = useParams();

    useEffect(() => {
        async function fetchProduct() {
            const URL = `http://localhost:8000/products/${id}`;

            const response = await fetch(URL);
            const data = await response.json();
            setProduct(data);
        }

        fetchProduct();
    }, [id]);

    console.log(product)

    //

    const relatedSettings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1681,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    useEffect(() => {
        async function fetchRelatedProduct() {
            const URL = "http://localhost:8000/relatedProducts";

            const response = await fetch(URL);
            const data = await response.json();
            setRelatedProducts(data);
        }

        fetchRelatedProduct();
    }, []);

    return (
        <>
            <BreadCrumbs product={product} />

            <main id="maincontent" className="page-main">
                <div className="columns row">
                    <div className="column main col-lg-10">
                        <div className="row">
                            <div className="col-lg-3 mb-3">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className="col-lg-9 mb-3">
                                <div className="product-info-main p-i-m">
                                    <div className="page-title-wrapper product">
                                        <h1 className="page-title">
                                            <span
                                                className="base"
                                                data-ui-id="page-title-wrapper"
                                                itemProp="name"
                                            >
                                                {product.name}
                                            </span>
                                        </h1>
                                    </div>
                                    <div
                                        className="product-reviews-summary"
                                        itemProp="aggregateRating"
                                        itemScope=""
                                        itemType="http://schema.org/AggregateRating"
                                    >
                                        <div className="rating-summary">
                                            <span className="label">
                                                <span>Rating:</span>
                                            </span>
                                            <div className="rating-result" id="rating-result_136" title="80%">
                                                <span>
                                                    <span>
                                                        <span itemProp="ratingValue">80 </span>% of{" "}
                                                        <span itemProp="bestRating">100</span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="reviews-actions">
                                            <a
                                                className="action view"
                                                href="default/woolly-clothing-merino-wool-crew-neck-tee-shirt.html#reviews"
                                            >
                                                <span itemProp="reviewCount">1</span>&nbsp;
                                                <span>Review </span>
                                            </a>
                                            <a
                                                className="action add"
                                                href="default/woolly-clothing-merino-wool-crew-neck-tee-shirt.html#review-form"
                                            >
                                                Add Your Review{" "}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-info-stock-sku">
                                        <div className="stock available" title="Availability">
                                            <span>In stock</span>
                                        </div>
                                        <div className="product attribute sku">
                                            <strong className="type">SKU</strong>
                                            <div className="value" itemProp="sku">
                                                MT-8569035
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product attribute overview">
                                        <div className="value" itemProp="description">
                                            <p>
                                                {product.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="product-info-price">
                                        <div
                                            className="price-box price-final_price"
                                            data-role="priceBox"
                                            data-product-id={136}
                                            data-price-box="product-id-136"
                                        >
                                            <span
                                                className="price-container price-final_price tax weee"
                                                itemProp="offers"
                                                itemScope=""
                                                itemType="http://schema.org/Offer"
                                            >
                                                <span
                                                    id="product-price-136"
                                                    data-price-amount={510}
                                                    data-price-type="finalPrice"
                                                    className="price-wrapper "
                                                >
                                                    <span className="price">${product.price}</span>
                                                </span>
                                                <meta itemProp="price" content={510} />
                                                <meta itemProp="priceCurrency" content="USD" />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="product-add-form">                                        
                                        <input type="hidden" name="product" defaultValue={136} />
                                        
                                        <input
                                            type="hidden"
                                            name="selected_configurable_option"
                                            defaultValue=""
                                        />

                                        <input
                                            type="hidden"
                                            name="related_product"
                                            id="related-products-field"
                                            defaultValue=""
                                        />
                                        <input type="hidden" name="item" defaultValue={136} />
                                        <input
                                            name="form_key"
                                            type="hidden"
                                            defaultValue="yDWD4CGlrqta0hiR"
                                        />
                                        <div className="box-tocart">
                                            <div className="fieldset">
                                                <div className="field qty">
                                                    <label className="label" htmlFor="qty">
                                                        <span>Qty</span>
                                                    </label>
                                                    <div className="control">
                                                        <input
                                                            type="number"
                                                            name="qty"
                                                            id="qty"
                                                            min={0}
                                                            defaultValue={1}
                                                            title="Qty"
                                                            className="input-text qty"
                                                            data-validate='{"required-number":true,"validate-item-quantity":{"maxAllowed":10000}}'
                                                        />
                                                    </div>
                                                </div>

                                                <span className="dohweirewre">
                                                    {cartList.find(item => item.id === product.id) ? (
                                                        <button onClick={() => removeFromCart(product)} className="action btn btn-danger"><span>Remove from Cart</span></button>
                                                    )
                                                
                                                    :
                                                    
                                                    (
                                                        <button onClick={() => addToCart(product)} className="action primary tocart"><span>Add to Cart</span></button>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="product-social-links">
                                        <div className="product-addto-links">
                                            {productsWishlist.find(item => item.id === product.id) ? (
                                                <button onClick={() => removeFromWishlist(product)} className="action towishlist"><i class="bi bi-heart-fill"></i> <span>Remove from Wish List</span></button>
                                            )
                                            
                                            :
                                            
                                            (
                                                <button onClick={() => addToWishlist(product)} className="action towishlist"><i class="bi bi-heart"></i> <span>Add to Wish List</span></button>
                                            )}

                                            <button className="action tocompare"><span>Add to Compare</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product info detailed">
                            <div
                                className="product data items default-style"
                                data-mage-init='{"tabs":{"openedState":"active"}}'
                            >
                                <ul className="resp-tabs-list">
                                    <li
                                        className="data item title"
                                        aria-labelledby="tab-label-description-title"
                                        data-role="collapsible"
                                        id="tab-label-description"
                                    >
                                        <a
                                            className="data switch"
                                            tabIndex={-1}
                                            data-toggle="switch"
                                            href="/"
                                            id="tab-label-description-title"
                                        >
                                            Details{" "}
                                        </a>
                                    </li>
                                    <li
                                        className="data item title"
                                        aria-labelledby="tab-label-additional-title"
                                        data-role="collapsible"
                                        id="tab-label-additional"
                                    >
                                        <a
                                            className="data switch"
                                            tabIndex={-1}
                                            data-toggle="switch"
                                            href="/"
                                            id="tab-label-additional-title"
                                        >
                                            More Information{" "}
                                        </a>
                                    </li>
                                    <li
                                        className="data item title"
                                        aria-labelledby="tab-label-reviews-title"
                                        data-role="collapsible"
                                        id="tab-label-reviews"
                                    >
                                        <a
                                            className="data switch"
                                            tabIndex={-1}
                                            data-toggle="switch"
                                            href="/"
                                            id="tab-label-reviews-title"
                                        >
                                            Reviews <span className="counter">1</span>{" "}
                                        </a>
                                    </li>
                                    <li
                                        id="tab-label-customtab"
                                        className="data item title"
                                        aria-labelledby="tab-label-customtab-title"
                                        data-role="collapsible"
                                        role="tab"
                                        data-collapsible="true"
                                        aria-controls="product.info.customtab"
                                        aria-selected="false"
                                        aria-expanded="true"
                                        tabIndex={0}
                                    >
                                        <a
                                            className="data switch"
                                            tabIndex={-1}
                                            data-toggle="switch"
                                            href="/"
                                            id="tab-label-reviews-title"
                                        >
                                            Custom Tabs{" "}
                                        </a>
                                    </li>
                                </ul>
                                <div className="resp-tabs-container">
                                    <div
                                        className="data item content resp-tab-content"
                                        id="description"
                                        data-role="content"
                                    >
                                        <div className="product attribute description">
                                            <div className="value">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Duis auto mr reprehenderit in voluptateveli esse
                                                    cillum dolore eu fugiat nulla pariatur. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamc laboris nisi ut
                                                    aliquip ex eacommod consequat. Duis reprehenderit iesse
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                    occaecat cupidatat non proident. Lorem ipsum dolor sit
                                                    amet, consectetur adipiscing elit, sede eiusmod tempor
                                                    incididunt ut labore et doloreme gna aliqua. Duis aute
                                                    irure dolor in reprehenderit in voluptatevelit esse
                                                    pariatur.
                                                </p>
                                                <p>
                                                    Duis aute irure reprehenderit in voluptateveli esse cillum
                                                    dolore eu fugiat nulla pariatur. Ut enim ad minim
                                                    vexercitation ullamco laboris nisi ut aliquip ex eacommod
                                                    consequat. Duis reprehenderit in voluptate velit. esse
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                    occaecat cupidatat non proident.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Duis auto mr reprehenderit in voluptateveli esse
                                                    cillum dolore eu fugiat nulla pariatur. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamc laboris nisi ut
                                                    aliquip ex eacommod consequat. Duis reprehenderit iesse
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                    occaecat cupidatat non proident. Lorem ipsum dolor sit
                                                    amet, consectetur adipiscing elit,
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="data item content resp-tab-content"
                                        id="additional"
                                        data-role="content"
                                    >
                                        <div className="additional-attributes-wrapper table-wrapper">
                                            <table
                                                className="data table additional-attributes"
                                                id="product-attribute-specs-table"
                                            >
                                                <caption className="table-caption">
                                                    More Information
                                                </caption>
                                                <tbody>
                                                    <tr>
                                                        <th className="col label" scope="row">
                                                            Color
                                                        </th>
                                                        <td className="col data" data-th="Color">
                                                            Yellow
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="col label" scope="row">
                                                            Manufacturer
                                                        </th>
                                                        <td className="col data" data-th="Manufacturer">
                                                            The Back Yard
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div
                                        className="data item content resp-tab-content"
                                        id="reviews"
                                        data-role="content"
                                    >
                                        <div id="product-review-container" data-role="product-review" />
                                        <div className="block review-add">
                                            <div className="block-title">
                                                <strong>Write Your Own Review</strong>
                                            </div>
                                            <div className="block-content">
                                                <form
                                                    action="http://magento2.magentech.com/themes/sm_time/pub/default/review/product/post/id/136/"
                                                    className="review-form"
                                                    method="post"
                                                    id="review-form"
                                                    data-role="product-review-form"
                                                    data-bind="scope: 'review-form'"
                                                >
                                                    <input
                                                        name="form_key"
                                                        type="hidden"
                                                        defaultValue="yDWD4CGlrqta0hiR"
                                                    />
                                                    <fieldset
                                                        className="fieldset review-fieldset"
                                                        data-hasrequired="* Required Fields"
                                                    >
                                                        <legend className="legend review-legend">
                                                            <span>You're reviewing:</span>
                                                            <strong>
                                                                Hublot Spirit Of Big Bang Moonphase Titanium
                                                            </strong>
                                                        </legend>
                                                        <br />
                                                        <span id="input-message-box" />
                                                        <fieldset className="field required review-field-ratings">
                                                            <legend className="label">
                                                                <span>Your Rating</span>
                                                            </legend>
                                                            <br />
                                                            <div className="control">
                                                                <div className="nested" id="product-review-table">
                                                                    <div className="field choice review-field-rating">
                                                                        <label
                                                                            className="label"
                                                                            id="Quality_rating_label"
                                                                        >
                                                                            <span>Quality</span>
                                                                        </label>
                                                                        <div className="control review-control-vote">
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[1]"
                                                                                id="Quality_1"
                                                                                defaultValue={1}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Quality_rating_label Quality_1_label"
                                                                            />
                                                                            <label
                                                                                className="rating-1"
                                                                                htmlFor="Quality_1"
                                                                                title="1 star"
                                                                                id="Quality_1_label"
                                                                            >
                                                                                <span>1 star</span>
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[1]"
                                                                                id="Quality_2"
                                                                                defaultValue={2}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Quality_rating_label Quality_2_label"
                                                                            />
                                                                            <label
                                                                                className="rating-2"
                                                                                htmlFor="Quality_2"
                                                                                title="2 stars"
                                                                                id="Quality_2_label"
                                                                            >
                                                                                <span>2 stars</span>
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[1]"
                                                                                id="Quality_3"
                                                                                defaultValue={3}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Quality_rating_label Quality_3_label"
                                                                            />
                                                                            <label
                                                                                className="rating-3"
                                                                                htmlFor="Quality_3"
                                                                                title="3 stars"
                                                                                id="Quality_3_label"
                                                                            >
                                                                                <span>3 stars</span>
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[1]"
                                                                                id="Quality_4"
                                                                                defaultValue={4}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Quality_rating_label Quality_4_label"
                                                                            />
                                                                            <label
                                                                                className="rating-4"
                                                                                htmlFor="Quality_4"
                                                                                title="4 stars"
                                                                                id="Quality_4_label"
                                                                            >
                                                                                <span>4 stars</span>
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[1]"
                                                                                id="Quality_5"
                                                                                defaultValue={5}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Quality_rating_label Quality_5_label"
                                                                            />
                                                                            <label
                                                                                className="rating-5"
                                                                                htmlFor="Quality_5"
                                                                                title="5 stars"
                                                                                id="Quality_5_label"
                                                                            >
                                                                                <span>5 stars</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="field choice review-field-rating">
                                                                        <label
                                                                            className="label"
                                                                            id="Value_rating_label"
                                                                        >
                                                                            <span>Value</span>
                                                                        </label>
                                                                        <div className="control review-control-vote">
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[2]"
                                                                                id="Value_1"
                                                                                defaultValue={6}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Value_rating_label Value_1_label"
                                                                            />
                                                                            <label
                                                                                className="rating-1"
                                                                                htmlFor="Value_1"
                                                                                title="1 star"
                                                                                id="Value_1_label"
                                                                            >
                                                                                <span>1 star</span>
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[2]"
                                                                                id="Value_2"
                                                                                defaultValue={7}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Value_rating_label Value_2_label"
                                                                            />
                                                                            <label
                                                                                className="rating-2"
                                                                                htmlFor="Value_2"
                                                                                title="2 stars"
                                                                                id="Value_2_label"
                                                                            >
                                                                                <span>2 stars</span>
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[2]"
                                                                                id="Value_3"
                                                                                defaultValue={8}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Value_rating_label Value_3_label"
                                                                            />
                                                                            <label
                                                                                className="rating-3"
                                                                                htmlFor="Value_3"
                                                                                title="3 stars"
                                                                                id="Value_3_label"
                                                                            >
                                                                                <span>3 stars</span>
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[2]"
                                                                                id="Value_4"
                                                                                defaultValue={9}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Value_rating_label Value_4_label"
                                                                            />
                                                                            <label
                                                                                className="rating-4"
                                                                                htmlFor="Value_4"
                                                                                title="4 stars"
                                                                                id="Value_4_label"
                                                                            >
                                                                                <span>4 stars</span>
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[2]"
                                                                                id="Value_5"
                                                                                defaultValue={10}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Value_rating_label Value_5_label"
                                                                            />
                                                                            <label
                                                                                className="rating-5"
                                                                                htmlFor="Value_5"
                                                                                title="5 stars"
                                                                                id="Value_5_label"
                                                                            >
                                                                                <span>5 stars</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="field choice review-field-rating">
                                                                        <label
                                                                            className="label"
                                                                            id="Price_rating_label"
                                                                        >
                                                                            <span>Price</span>
                                                                        </label>
                                                                        <div className="control review-control-vote">
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[3]"
                                                                                id="Price_1"
                                                                                defaultValue={11}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Price_rating_label Price_1_label"
                                                                            />
                                                                            <label
                                                                                className="rating-1"
                                                                                htmlFor="Price_1"
                                                                                title="1 star"
                                                                                id="Price_1_label"
                                                                            >
                                                                                <span>1 star</span>
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[3]"
                                                                                id="Price_2"
                                                                                defaultValue={12}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Price_rating_label Price_2_label"
                                                                            />
                                                                            <label
                                                                                className="rating-2"
                                                                                htmlFor="Price_2"
                                                                                title="2 stars"
                                                                                id="Price_2_label"
                                                                            >
                                                                                <span>2 stars</span>
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[3]"
                                                                                id="Price_3"
                                                                                defaultValue={13}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Price_rating_label Price_3_label"
                                                                            />
                                                                            <label
                                                                                className="rating-3"
                                                                                htmlFor="Price_3"
                                                                                title="3 stars"
                                                                                id="Price_3_label"
                                                                            >
                                                                                <span>3 stars</span>
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[3]"
                                                                                id="Price_4"
                                                                                defaultValue={14}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Price_rating_label Price_4_label"
                                                                            />
                                                                            <label
                                                                                className="rating-4"
                                                                                htmlFor="Price_4"
                                                                                title="4 stars"
                                                                                id="Price_4_label"
                                                                            >
                                                                                <span>4 stars</span>
                                                                            </label>
                                                                            <input
                                                                                type="radio"
                                                                                name="ratings[3]"
                                                                                id="Price_5"
                                                                                defaultValue={15}
                                                                                className="radio"
                                                                                data-validate="{'rating-required':true}"
                                                                                aria-labelledby="Price_rating_label Price_5_label"
                                                                            />
                                                                            <label
                                                                                className="rating-5"
                                                                                htmlFor="Price_5"
                                                                                title="5 stars"
                                                                                id="Price_5_label"
                                                                            >
                                                                                <span>5 stars</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <input
                                                                    type="hidden"
                                                                    name="validate_rating"
                                                                    className="validate-rating"
                                                                    defaultValue=""
                                                                />
                                                            </div>
                                                        </fieldset>
                                                        <div className="field review-field-nickname required">
                                                            <label htmlFor="nickname_field" className="label">
                                                                <span>Nickname</span>
                                                            </label>
                                                            <div className="control">
                                                                <input
                                                                    type="text"
                                                                    name="nickname"
                                                                    id="nickname_field"
                                                                    className="input-text"
                                                                    data-validate="{required:true}"
                                                                    data-bind="value: nickname()"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="field review-field-summary required">
                                                            <label htmlFor="summary_field" className="label">
                                                                <span>Summary</span>
                                                            </label>
                                                            <div className="control">
                                                                <input
                                                                    type="text"
                                                                    name="title"
                                                                    id="summary_field"
                                                                    className="input-text"
                                                                    data-validate="{required:true}"
                                                                    data-bind="value: review().title"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="field review-field-text required">
                                                            <label htmlFor="review_field" className="label">
                                                                <span>Review</span>
                                                            </label>
                                                            <div className="control">
                                                                <textarea
                                                                    name="detail"
                                                                    id="review_field"
                                                                    cols={5}
                                                                    rows={3}
                                                                    data-validate="{required:true}"
                                                                    data-bind="value: review().detail"
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                    <div className="actions-toolbar review-form-actions">
                                                        <div className="primary actions-primary">
                                                            <button
                                                                type="submit"
                                                                className="action submit primary"
                                                            >
                                                                <span>Submit Review</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="data item content resp-tab-content"
                                        id="customtab"
                                        data-role="content"
                                    >
                                        Write your content here...{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar sidebar-main col-lg-2">
                        <div className="banner-image">
                            <a title="Banner Image" href="/">
                                <img
                                    className="mark-lazy lazyload w-100 h-100" style={{ maxHeight: "100%" }}
                                    src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/banner/banner-sidebar.jpg"
                                    data-src=""
                                    alt="Banner"
                                />
                            </a>
                        </div>

                        <BestSeller />

                        <div className="sidebar sidebar-additional">
                            <div
                                className="block block-compare"
                                data-bind="scope: 'compareProducts'"
                                data-role="compare-products-sidebar"
                            >
                                <div className="block-title">
                                    <strong id="block-compare-heading" role="heading" aria-level={2}>
                                        Compare Products
                                    </strong>
                                    <span
                                        className="counter qty no-display"
                                        data-bind="text: compareProducts().countCaption, css: {'no-display': !compareProducts().count}"
                                    />
                                </div>
                                {/* ko if: compareProducts().count */}
                                <div
                                    className="block-content no-display"
                                    aria-labelledby="block-compare-heading"
                                    data-bind="css: {'no-display': !compareProducts().count}"
                                >
                                    <ol
                                        id="compare-items"
                                        className="product-items product-items-names"
                                        data-bind="foreach: compareProducts().items"
                                    >
                                        <li className="product-item">
                                            <input
                                                type="hidden"
                                                className="compare-item-id"
                                                data-bind="value: id"
                                            />
                                            <strong className="product-item-name">
                                                <a className="product-item-link" href="/" aria-label="Home"/>
                                            </strong>
                                            <a
                                                href="/"
                                                title="Remove This Item"
                                                className="action delete"
                                            >
                                                <span>Remove This Item</span>
                                            </a>
                                        </li>
                                    </ol>

                                    <div className="actions-toolbar">
                                        <div className="primary">
                                            <a href="/" className="action compare primary" >
                                                <span>Compare</span>
                                            </a>
                                        </div>

                                        <div className="secondary">
                                            <a id="compare-clear-all" href="/"  className="action clear">
                                                <span>Clear All</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* /ko */}
                                {/* ko ifnot: compareProducts().count */}
                                <div className="empty">You have no items to compare.</div>
                                {/* /ko */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="page-bottom">
                <div className="content">
                    <div className="display-popup" style={{ display: "none" }}>
                        <div id="newsletter-popup">
                            <form
                                className="form subscribe"
                                noValidate=""
                                action="http://magento2.magentech.com/themes/sm_time/pub/default/newsletter/subscriber/new/"
                                method="post"
                                data-mage-init='{"validation": {"errorClass": "mage-error"}}'
                                id="newsletter-popup-validate-detail"
                            >
                                <div className="w-newsletter clearfix">
                                    <div className="newsletter-image">
                                        <div>
                                            <a title="Image Newsletter" href="/">
                                                <img
                                                    src="media/wysiwyg/newsletter/image-newsletter-popup.jpg"
                                                    alt="Newsletter"
                                                    width={355}
                                                    height={370}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="newsletter-info">
                                        <div className="news-top-title text-theme-color">
                                            Daily Promotion
                                        </div>
                                        <div className="news-bottom-title">SIGN UP NEWSLETTER</div>
                                        <div className="form-newsletter-popup">
                                            <div className="input-box">
                                                <input name="email" type="email" className="input-text" />
                                            </div>
                                            <div className="action-newsletter">
                                                <button
                                                    className="action subscribe primary"
                                                    title="Subscribe"
                                                    type="submit"
                                                >
                                                    <span>Subscribe</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="subscribe-bottom">
                                            <div id="uniform-dont-show-again" className="checker">
                                                <span>
                                                    <input id="dont-show-again" type="checkbox" />
                                                </span>
                                            </div>
                                            <label htmlFor="dont-show-again">
                                                Don't show this popup again
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="back2top">
                        <div className="b-icon">↑</div>
                        <div className="b-text">Back to Top</div>
                    </div>
                </div>
                <div className="container">
                    <div className="product-slider normal-block remove-border-product margin-b20">
                        <div className="block-style-1 fix-shadow bottom-product-slider nav-style-1 absolute-nav hover-to-show">
                            <div className="block-title">
                                <strong id="block-related-heading" role="heading" aria-level={2}>
                                    RELATED PRODUCTS
                                </strong>
                            </div>
                            <div className="block-sub-title">
                                LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
                                INDUSTRY
                            </div>

                            <div className="block-content ceertgwerwer_slider content" aria-labelledby="block-related-heading">
                                <div className="products-grid products-related">
                                    <Slider {...relatedSettings} className="products list items product-items">
                                        {relatedProducts.map(relatedProduct => (
                                            <div key={relatedProduct.id} className="item product product-item">
                                                <div className="product-item-info" data-container="product-grid">
                                                    <div className="image-product">
                                                        <Link to="" className="product photo product-item-photo">
                                                            <span className="product-image-container">
                                                                <span className="">
                                                                    <img className="product-image-photo lazyload w-100 h-100 position-relative" style={{ maxHeight: "100%" }} src={relatedProduct.image} data-src="" loading="lazy" alt={relatedProduct.name} />
                                                                </span>
                                                            </span>
                                                        </Link>

                                                        {relatedProduct.isNew && (
                                                            <div className="product-labels">
                                                                <div className="product-label new-label">New</div>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="product details product-item-details">
                                                        <strong className="product name product-item-name">
                                                            <Link to="" className="product-item-link" title={relatedProduct.name}>
                                                                {relatedProduct.name}
                                                            </Link>
                                                        </strong>
                                                        <div className="product-reviews-summary short">
                                                            <div className="rating-summary">
                                                                <span className="label"><span>Rating:</span></span>
                                                                <div className="rating-result" title={`${relatedProduct.rating}%`}>
                                                                    <span><span>{relatedProduct.rating}%</span></span>
                                                                </div>
                                                            </div>
                                                            <div className="reviews-actions">
                                                                <a className="action view" href={`${relatedProduct.url}#reviews`}>
                                                                    1 <span>Review</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="price-box price-final_price" data-role="priceBox">
                                                            <span className="price-container price-final_price tax weee">
                                                                <span className="price-wrapper">
                                                                    <span className="price">${relatedProduct.price.toFixed(2)}</span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div className="product-item-actions">
                                                            <div className="actions-primary">
                                                                <button className="action tocart primary" type="button" title="Add to Cart">
                                                                    <span>Add to Cart</span>
                                                                </button>
                                                            </div>
                                                            <div className="actions-secondary" data-role="add-to-links">
                                                                <a href="/" className="action towishlist" title="Add to Wish List">
                                                                    <span>Add to Wish List</span>
                                                                </a>
                                                                <a href="/" className="action tocompare" title="Add to Compare">
                                                                    <span>Add to Compare</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}