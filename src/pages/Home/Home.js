import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { BestSellers, HomeLatestPost, HomeTestimonials } from "./HomeComponents";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./Home.css";

export const Home = () => {
    const [categories, setCategories] = useState([]);

    // banner 

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        infinite: true,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        draggable: true
    };

    // category products   

    useEffect(() => {
        async function fetchCategories() {
            const URL = `http://localhost:8000/categoryProducts`;
            const response = await fetch(URL);
            const data = await response.json();
            setCategories(data);
        }
        fetchCategories();
    }, [])

    const categoriesSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1920, settings: { slidesToShow: 4 } },
            { breakpoint: 1680, settings: { slidesToShow: 4 } },
            { breakpoint: 1440, settings: { slidesToShow: 4 } },
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 481, settings: { slidesToShow: 2 } },
            { breakpoint: 0, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <>
            <main id="maincontent" className="page-main banner-slider">
                <div className="columns">
                    <div className="column main">
                        <input name="form_key" type="hidden" defaultValue="7AnBfPMIIvdzylxO" />
                        <div
                            id="authenticationPopup"
                            data-bind="scope:'authenticationPopup', style: {display: 'none'}"
                        >
                            {/* ko template: getTemplate() */}
                            {/* /ko */}
                        </div>
                        <div className="home-page-1 enable-vertical-menu">
                            <div className="clearfix">
                                <div className="slidershow-content" style={{ marginBottom: 30 }}>
                                    <div className="slider-show slider-style-1 hover-to-show banner-slider">
                                        <Slider {...settings}>
                                            <div className="item">
                                                <Link title="Slide 1" to="/watches">
                                                    <img
                                                        src="./images/media/wysiwyg/slidershow/home-1/item-1.jpg"
                                                        alt="Slide"
                                                        width={1920}
                                                        height={640}
                                                    />
                                                </Link>
                                            </div>

                                            <div className="item">
                                                <Link title="Slide 2" to="/watches">
                                                    <img
                                                        src="./images/media/wysiwyg/slidershow/home-1/item-2.jpg"
                                                        alt="Slide"
                                                        width={1920}
                                                        height={640}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="item">
                                                <Link title="Slide 3" to="/watches">
                                                    <img
                                                        src="./images/media/wysiwyg/slidershow/home-1/item-3.jpg"
                                                        alt="Slide"
                                                        width={1920}
                                                        height={640}
                                                    />
                                                </Link>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="categories-slider margin-b85">
                                    <div className="nav-style-1 absolute-nav nav-top hover-to-show">
                                        <div className="block block-categories">
                                            <div className="block-title">
                                                <strong>Popular categories</strong>
                                            </div>
                                            <div className="block-content">
                                                <Slider {...categoriesSettings} className="cat-wrap-slider">
                                                    {categories.map((cat, index) => (
                                                        <div className="item-row" key={index}>
                                                            <div className="item">
                                                                <div className="content-box">
                                                                    <div className="image-cat">
                                                                        <a href={cat.href} title={cat.title}>
                                                                            <img
                                                                                src={cat.img}
                                                                                alt={cat.title}
                                                                                width={100}
                                                                                height={100}
                                                                            />
                                                                        </a>
                                                                    </div>

                                                                    <div className="child-cat">
                                                                        <div className="cat-title">
                                                                            <a href={cat.href} title={cat.title}>
                                                                                {cat.title}
                                                                            </a>
                                                                            <span className="products-count">{cat.count}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </Slider>
                                                <div className="loading-content">
                                                    <span className="hidden">Loading...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="block-style-1 block-brand brand-style-1 nav-style-1 nav-top margin-b70">
                                    <div className="block-title">SHOP BY BRANDS</div>
                                    <div className="block-sub-title">
                                        LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
                                        INDUSTRY
                                    </div>
                                    <div className="block-content">
                                        <div className="simple-listing">
                                            <div className="row">
                                                <div className="item col-xs-6 col-sm-4 col-md-4 col-lg-3 col-spe">
                                                    <a title="Brand" href="/">
                                                        <img
                                                            className="mark-lazy"
                                                            src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/brand/item-1.jpg"
                                                            data-src=""
                                                            alt="Brand"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="item col-xs-6 col-sm-4 col-md-4 col-lg-3 col-spe">
                                                    <a title="Brand" href="/">
                                                        <img
                                                            className="mark-lazy"
                                                            src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/brand/item-2.jpg"
                                                            data-src=""
                                                            alt="Brand"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="item col-xs-6 col-sm-4 col-md-4 col-lg-3 col-spe">
                                                    <a title="Brand" href="/">
                                                        <img
                                                            className="mark-lazy"
                                                            src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/brand/item-3.jpg"
                                                            data-src=""
                                                            alt="Brand"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="item col-xs-6 col-sm-4 col-md-4 col-lg-3 col-spe">
                                                    <a title="Brand" href="/">
                                                        <img
                                                            className="mark-lazy"
                                                            src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/brand/item-4.jpg"
                                                            data-src=""
                                                            alt="Brand"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="item col-xs-6 col-sm-4 col-md-4 col-lg-3 col-spe">
                                                    <a title="Brand" href="/">
                                                        <img
                                                            className="mark-lazy"
                                                            src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/brand/item-5.jpg"
                                                            data-src=""
                                                            alt="Brand"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="item col-xs-6 col-sm-4 col-md-4 col-lg-3 col-spe">
                                                    <a title="Brand" href="/">
                                                        <img
                                                            className="mark-lazy"
                                                            src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/brand/item-6.jpg"
                                                            data-src=""
                                                            alt="Brand"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="item col-xs-6 col-sm-4 col-md-4 col-lg-3 col-spe">
                                                    <a title="Brand" href="/">
                                                        <img
                                                            className="mark-lazy"
                                                            src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/brand/item-7.jpg"
                                                            data-src=""
                                                            alt="Brand"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="item col-xs-6 col-sm-4 col-md-4 col-lg-3 col-spe">
                                                    <a title="Brand" href="/">
                                                        <img
                                                            className="mark-lazy"
                                                            src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/brand/item-8.jpg"
                                                            data-src=""
                                                            alt="Brand"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="item col-xs-6 col-sm-4 col-md-4 col-lg-3 col-spe">
                                                    <a title="Brand" href="/">
                                                        <img
                                                            className="mark-lazy"
                                                            src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/brand/item-9.jpg"
                                                            data-src=""
                                                            alt="Brand"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="item col-xs-6 col-sm-4 col-md-4 col-lg-3 col-spe">
                                                    <a title="Brand" href="/">
                                                        <img
                                                            className="mark-lazy"
                                                            src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/brand/item-10.jpg"
                                                            data-src=""
                                                            alt="Brand"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="banner-full">
                                    <div className="banner-image margin-b85">
                                        <a title="Banner Image" href="/">                                          
                                            <img
                                                className="mark-lazy lazyload"
                                                src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/banner/item-1.jpg"
                                                alt="Banner"
                                                width={1530}
                                                height={100}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="sm-filterproducts fix-shadow block-style-1 nav-style-1 absolute-nav hover-to-show margin-b20">
                                    <div className="block">
                                        <div className="block-title">BEST SELLERS</div>
                                        <div className="block-sub-title">
                                            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND
                                            TYPESETTING INDUSTRY
                                        </div>

                                        <BestSellers />
                                    </div>
                                </div>
                            </div>
                            <div className="multi-lines-box margin-b85">
                                <div className="multi-lines">&nbsp;</div>
                                <div className="multi-lines">&nbsp;</div>
                                <div className="multi-lines">&nbsp;</div>
                            </div>
                            <div className="container">
                                <div className="block-style-1 block-collection collection-style-1 nav-style-1 nav-top hover-to-show margin-b100">
                                    <div className="block-title">OUR COLLECTION</div>
                                    <div className="block-sub-title">
                                        LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
                                        INDUSTRY
                                    </div>
                                    <div className="block-content">
                                        <div className="simple-listing">
                                            <div className="row">
                                                <div className="item col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                    <div className="collection-box">
                                                        <a title="Collection" href="/">
                                                            <img
                                                                className="mark-lazy"
                                                                src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/collection/item-1.jpg"
                                                                data-src=""
                                                                alt="Collection"
                                                            />
                                                        </a>
                                                        <div className="collection-text">
                                                            <p>Hublot Spirit Of Big Bang Moonphase Titanium</p>
                                                            <p className="collection-price">$720.00</p>
                                                            <a href="/">VIEW DETAIL</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                    <div className="collection-box">
                                                        <a title="Collection" href="/">
                                                            <img
                                                                className="mark-lazy"
                                                                src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/collection/item-2.jpg"
                                                                data-src=""
                                                                alt="Collection 2"
                                                            />
                                                        </a>
                                                        <div className="collection-text">
                                                            <p>Hublot Spirit Of Big Bang Moonphase Titanium</p>
                                                            <p className="collection-price">$690.00</p>
                                                            <a href="/">VIEW DETAIL</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                    <div className="collection-box">
                                                        <a title="Collection" href="/">
                                                            <img
                                                                className="mark-lazy"
                                                                src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/collection/item-3.jpg"
                                                                data-src=""
                                                                alt="Collection 3"
                                                            />
                                                        </a>
                                                        <div className="collection-text">
                                                            <p>Hublot Spirit Of Big Bang Moonphase Titanium</p>
                                                            <p className="collection-price">$880.00</p>
                                                            <a href="/">VIEW DETAIL</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                    <div className="collection-box">
                                                        <a title="Collection" href="/">
                                                            <img
                                                                className="mark-lazy"
                                                                src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/collection/item-4.jpg"
                                                                data-src=""
                                                                alt="Collection 4"
                                                            />
                                                        </a>
                                                        <div className="collection-text">
                                                            <p>Hublot Spirit Of Big Bang Moonphase Titanium</p>
                                                            <p className="collection-price">$960.00</p>
                                                            <a href="/">VIEW DETAIL</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                    <div className="collection-box">
                                                        <a title="Collection" href="/">
                                                            <img
                                                                className="mark-lazy"
                                                                src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/collection/item-5.jpg"
                                                                data-src=""
                                                                alt="Collection 5"
                                                            />
                                                        </a>
                                                        <div className="collection-text">
                                                            <p>Hublot Spirit Of Big Bang Moonphase Titanium</p>
                                                            <p className="collection-price">$680.00</p>
                                                            <a href="/">VIEW DETAIL</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                    <div className="collection-box">
                                                        <a title="Collection" href="/">
                                                            <img
                                                                className="mark-lazy"
                                                                src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/collection/item-6.jpg"
                                                                data-src=""
                                                                alt="Collection 6"
                                                            />
                                                        </a>
                                                        <div className="collection-text">
                                                            <p>Hublot Spirit Of Big Bang Moonphase Titanium</p>
                                                            <p className="collection-price">$660.00</p>
                                                            <a href="/">VIEW DETAIL</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                    <div className="collection-box">
                                                        <a title="Collection" href="/">
                                                            <img
                                                                className="mark-lazy"
                                                                src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/collection/item-7.jpg"
                                                                data-src=""
                                                                alt="Collection 7"
                                                            />
                                                        </a>
                                                        <div className="collection-text">
                                                            <p>Hublot Spirit Of Big Bang Moonphase Titanium</p>
                                                            <p className="collection-price">$880.00</p>
                                                            <a href="/">VIEW DETAIL</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                                    <div className="collection-box">
                                                        <a title="Collection" href="/">
                                                            <img
                                                                className="mark-lazy"
                                                                src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/collection/item-8.jpg"
                                                                data-src=""
                                                                alt="Collection 8"
                                                            />
                                                        </a>
                                                        <div className="collection-text">
                                                            <p>Hublot Spirit Of Big Bang Moonphase Titanium</p>
                                                            <p className="collection-price">$860.00</p>
                                                            <a href="/">VIEW DETAIL</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="second-font btn-view-more">
                                            <a href="/">VIEW MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="multi-lines-box margin-b100">
                                <div className="multi-lines">&nbsp;</div>
                                <div className="multi-lines">&nbsp;</div>
                                <div className="multi-lines">&nbsp;</div>
                            </div>

                            <HomeTestimonials />

                            <div className="container">
                                <div className="block-news">
                                    <div className="block-style-1 nav-style-1 absolute-nav hover-to-show margin-b100">
                                        <div className="block">
                                            <div className="block-title">LATEST POST</div>
                                            <div className="block-sub-title">
                                                LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND
                                                TYPESETTING INDUSTRY
                                            </div>
                                            <div className="block-content">
                                                <div className="block block-slider-post">
                                                    <div className="block-title">
                                                        <strong>Latest Blog Posts</strong>
                                                    </div>

                                                    <HomeLatestPost />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
            </div>
        </>
    )
}