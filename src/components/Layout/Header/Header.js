import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { DropdownLoggedOut } from "../../Elements/DropdownLoggedOut";
import { DropdownLoggedIn } from "../../Elements/DropdownLoggedIn";
import { useAuth } from "../../../context/AuthContext";
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";

import Logo from "../../../assets/frontend/Sm/time/en_US/images/logo.svg";
import MobileLogo from "../../../assets/frontend/Sm/time/en_US/images/logo-mobile.png";

import "./Header.css";


export const Header = () => {
    const [mobileSearch, setMobileSearch] = useState(false);
    const [mobileSidebar, setMobileSidebar] = useState(false);
    const {productsWishlist} = useWishlist();
    const searchRef = useRef();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/watches?keyword=${searchRef.current.value}`);
        searchRef.current.value = "";
    }

    const { token, setToken } = useAuth();
    const { cartList } = useCart();
    
    useEffect(() => {
        const storedToken = sessionStorage.getItem("token");

        if (storedToken !== token) {
            setToken(JSON.parse(storedToken));            
        }        

    //eslint-disable-next-line
    }, []);
    

    return (
        <>
            <header className="page-header">
                <div className="header-container header-style-1">
                    <div className="header-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="language-currency">
                                        <div className="box-style">
                                            <div
                                                className="switcher currency switcher-currency"
                                                id="switcher-currency"
                                            >
                                                <strong className="label switcher-label">
                                                    <span>Currency</span>
                                                </strong>
                                                <div className="switcher-content">
                                                    <div
                                                        className="action-switcher"
                                                        id="switcher-currency-trigger"
                                                    >
                                                        <div className="heading-switcher language-USD">
                                                            <span>USD</span>
                                                        </div>
                                                    </div>

                                                    <div className="dropdown-switcher">
                                                        <ul className="list-item">
                                                            <li className="currency-EUR switcher-option p-3">                                                                
                                                                EUR - Euro                                                              
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-style">
                                            <div
                                                className="switcher language switcher-language"
                                                data-ui-id="language-switcher"
                                                id="switcher-language"
                                            >
                                                <strong className="label switcher-label">
                                                    <span>Language</span>
                                                </strong>

                                                <div className="switcher-content">
                                                    <div className="action-switcher" id="switcher-language-trigger">
                                                        <div className="heading-switcher view-default" style={{ backgroundRepeat: "no-repeat", backgroundImage: 'url("./images/flags/flag_default.svg")' }}>
                                                            <span>English</span>
                                                        </div>
                                                    </div>

                                                    <div className="dropdown-switcher">
                                                        <ul className="list-item">
                                                            <li className="view-belgium switcher-option">
                                                                <div className="oidjiswjrwee p-3">
                                                                    <span
                                                                        style={{
                                                                            backgroundRepeat: "no-repeat",
                                                                            backgroundImage:
                                                                                'url("./images/flags/flag_belgium.svg")'
                                                                        }}
                                                                    >
                                                                        Belgium
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            
                                                            <li className="view-french switcher-option">
                                                                <div className="oidjiswjrwee p-3">
                                                                    <span
                                                                        style={{
                                                                            backgroundRepeat: "no-repeat",
                                                                            backgroundImage:
                                                                                'url("./images/flags/flag_french.svg")'
                                                                        }}
                                                                    >
                                                                        French
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            
                                                            <li className="view-honduras switcher-option">
                                                                <div className="oidjiswjrwee p-3">
                                                                    <span
                                                                        style={{
                                                                            backgroundRepeat: "no-repeat",
                                                                            backgroundImage:
                                                                                'url("./images/flags/flag_honduras.svg")'
                                                                        }}
                                                                    >
                                                                        Honduras
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="header-support">
                                        <p>
                                            <span style={{ color: "#999999" }}>
                                                FREE SHIPPING ON ALL ORDERS OVER $99.00
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="customer-action">
                                        <div className="customer-links d-flex align-items-center justify-content-end" data-move="customer-mobile">
                                            <Link to="/wishlist">
                                                <div className="hiujoijqoweqwe position-relative">
                                                    <i class="bi mr-4 text-white bi-heart"></i>

                                                    <div className="oiejrwerewr d-flex align-items-center justify-content-center text-white position-absolute">
                                                        {productsWishlist.length}
                                                    </div>
                                                </div>
                                            </Link>

                                            { token ? <DropdownLoggedIn /> : <DropdownLoggedOut /> }
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-middle">
                        <div className="container">
                            <div className="row">
                                <div className="left-container col-md-4">
                                    <div className="search-container">
                                        <div
                                            id="sm_searchbox9827378041735373248"
                                            className="block block-search search-pro"
                                        >
                                            <div className="block block-content">
                                                <form onSubmit={handleSearch} className="form minisearch">
                                                    <div className="field search">
                                                        <div className="control">
                                                            <input type="text" name="search" ref={searchRef} placeholder="Enter keywords to search..." className="input-text input-searchbox" autoComplete="off"/>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="actions">
                                                        <button
                                                            type="submit"
                                                            title="Search"
                                                            className="btn-searchbox"
                                                        >
                                                            <span>Search</span>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="middle-container logo-container col-md-4">
                                    <h1 className="logo-content">
                                        <strong>SM Time - Modern Magento 2 Watch store Theme </strong>
                                        <Link className="logo" to="/" title="SM Time - Modern Magento 2 Watch store Theme">
                                            <img src={Logo} alt="SM Time - Modern Magento 2 Watch store Theme" width={135} height={42} />
                                        </Link>
                                    </h1>
                                </div>

                                <div className="right-container col-md-4">
                                    <div className="right-content">
                                        <div className="hotline-header">
                                            <div className="hotline-header-box">
                                                <p className="hotline-text">Call us free:</p>
                                                <p className="hotline-numb text-theme-color">1-888-546-789</p>
                                            </div>
                                        </div>
                                        
                                        <div className="minicart-header" data-move="minicart-mobile">
                                            <div data-block="minicart" className="minicart-wrapper">
                                                <Link
                                                    className="action showcart"
                                                    to="/cart"
                                                    data-bind="scope: 'minicart_content'"
                                                >
                                                    <span className="text">My Cart</span>
                                                    
                                                    <span
                                                        className="counter qty empty"
                                                        data-bind="css: { empty: !!getCartParam('summary_count') == false }, blockLoader: isLoading"
                                                    >                                                      
                                                        <span className="counter-number">{cartList.length}</span>
                                                    </span>                                                   
                                                  
                                                    <span className="price-minicart">
                                                        <div className="subtotal">
                                                            <div className="amount price-container">
                                                                <span className="price-wrapper">
                                                                    <span className="price">$0.00</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </Link>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom ontop-element">
                        <div className="container">
                            <div className="desktop-menu">
                                <div className="horizontal-block">
                                    <div className="horizontal-menu">
                                        <div className="horizontal-megamenu-block">
                                            <nav
                                                className="sm_megamenu_wrapper_horizontal_menu sambar"
                                                id="sm_megamenu_menu676fb1c068a6c"
                                                data-sam={8505577501735373248}
                                            >
                                                <div className="sambar-inner">
                                                    <div className="mega-content">
                                                        <ul
                                                            className="horizontal-type sm-megamenu-hover sm_megamenu_menu sm_megamenu_menu_black"
                                                            data-jsapi="on"
                                                        >
                                                            <li className="home-item other-toggle sm_megamenu_lv1 sm_megamenu_drop">
                                                                <NavLink
                                                                    className="sm_megamenu_head sm_megamenu_drop"
                                                                    to="/"
                                                                    end
                                                                >
                                                                    <span className="sm_megamenu_icon sm_megamenu_nodesc">
                                                                        <span className="sm_megamenu_title">Home</span>
                                                                    </span>
                                                                </NavLink>
                                                            </li>

                                                            <li className="other-toggle sm_megamenu_lv1 sm_megamenu_drop parent ">
                                                                <NavLink
                                                                    className="sm_megamenu_head sm_megamenu_drop "
                                                                    to="/blog"
                                                                    id="sm_megamenu_19"
                                                                >
                                                                    <span className="sm_megamenu_icon sm_megamenu_nodesc">
                                                                        <span className="sm_megamenu_title">Blog</span>
                                                                    </span>
                                                                </NavLink>
                                                            </li>

                                                            <li className="other-toggle sm_megamenu_lv1 sm_megamenu_drop parent ">
                                                                <NavLink
                                                                    className="sm_megamenu_head sm_megamenu_drop "
                                                                    to="/watches"
                                                                    id="sm_megamenu_15"
                                                                >
                                                                    <span className="sm_megamenu_icon sm_megamenu_nodesc">
                                                                        <span className="sm_megamenu_title">Shop</span>
                                                                    </span>
                                                                </NavLink>
                                                            </li>

                                                            <li className="other-toggle sm_megamenu_lv1 sm_megamenu_drop parent ">
                                                                <NavLink
                                                                    className="sm_megamenu_head sm_megamenu_drop "
                                                                    to="/about-us"
                                                                    id="sm_megamenu_17"
                                                                >
                                                                    <span className="sm_megamenu_icon sm_megamenu_nodesc">
                                                                        <span className="sm_megamenu_title">
                                                                            About Us
                                                                        </span>
                                                                    </span>
                                                                </NavLink>
                                                            </li>

                                                            <li className="other-toggle sm_megamenu_lv1 sm_megamenu_drop parent ">
                                                                <NavLink
                                                                    className="sm_megamenu_head sm_megamenu_drop "
                                                                    to="/contact-us"
                                                                    id="sm_megamenu_18"
                                                                >
                                                                    <span className="sm_megamenu_icon sm_megamenu_nodesc">
                                                                        <span className="sm_megamenu_title">
                                                                            Contact Us
                                                                        </span>
                                                                    </span>
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="header-mobile"
                    id="sm-header-mobile"
                    data-menutype="megamenu"
                    data-breakpoint={1023}
                >
                    <div className="mobile-top">
                        <div className="container">
                            <div className="mobile-header-content">
                                <div className="mobile-menu">
                                    <div onClick={() => setMobileSidebar(!mobileSidebar)} id="btn-nav-mobile" >
                                        <span className="s-top" />
                                        <span className="s-middle" />
                                        <span className="s-bottom" />
                                    </div>
                                </div>
                                <div className="mobile-logo">
                                    <Link to="/">
                                        <img
                                            src={MobileLogo}
                                            alt="SM Time - Modern Magento 2 Watch store Theme"
                                            width={157}
                                            height={35}
                                        />
                                    </Link>
                                </div>
                                <div className="mobile-cart">
                                    <div id="minicart-mobile" className="minicart-mobile">
                                        <span className="hidden">Cart Mobile</span>

                                        <i onClick={() => setMobileSearch(!mobileSearch)} className="bi bi-search" style={{ marginRight: "5px" }}></i>

                                        <Link to="/checkout">
                                            <i className="bi bi-cart"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {mobileSearch && (
                        <div className="mobile-bottom">
                            <div className="container">
                                <div className="block-search-mobile">
                                    <div className="block-content">
                                        <form
                                            className="form minisearch"
                                            id="search_mini_form_mobile"
                                            action="http://magento2.magentech.com/themes/sm_time/pub/default/catalogsearch/result/"
                                            method="get"
                                        >
                                            <div className="field search">
                                                <div className="control">
                                                    <input
                                                        id="search-mobile"
                                                        data-mage-init='{"quickSearch":{
                                    "formSelector":"#search_mini_form_mobile",
                                    "url":"http://magento2.magentech.com/themes/sm_time/pub/default/search/ajax/suggest/",
                                    "destinationSelector":"#search_autocomplete_mobile"}
                                }'
                                                        type="text"
                                                        name="q"
                                                        defaultValue=""
                                                        placeholder="Search entire store here..."
                                                        className="input-text"
                                                        maxLength={128}
                                                        aria-haspopup="false"
                                                        aria-autocomplete="both"
                                                        autoComplete="off"
                                                    />
                                                    <div
                                                        id="search_autocomplete_mobile"
                                                        className="search-autocomplete"
                                                    />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" title="Search" className="action search">
                                                    <span>Search</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {
                        <div className={mobileSidebar ? "sidebar-nav-mobile sidebar-nav-mobile-show" : "sidebar-nav-mobile"}>
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="menu-mobile-tab" data-toggle="tab" href="/" role="tab" aria-controls="menu-mobile" aria-selected="true">
                                        Menu
                                    </a>

                                    <a className="nav-item nav-link" id="my-account-mobile-tab" data-toggle="tab" href="/" role="tab" aria-controls="account-mobile" aria-selected="false">
                                        Account
                                    </a>

                                    <a className="nav-item nav-link" id="setting-mobile-tab" data-toggle="tab" href="/" role="tab" aria-controls="setting-mobile" aria-selected="false">
                                        Setting
                                    </a>
                                </div>
                            </nav>
                            <div className="tab-content-mobile" id="nav-tabContent">
                                <div
                                    className="tab-panel fade show active"
                                    id="menu-mobile"
                                    role="tabpanel"
                                    aria-labelledby="menu-mobile-tab"
                                >
                                    <div className="nav-mobile-container sidebar-type">
                                        <nav id="navigation-mobile" className="navigation-mobile"></nav>
                                    </div>
                                </div>
                                <div
                                    className="tab-panel fade"
                                    id="account-mobile"
                                    role="tabpanel"
                                    aria-labelledby="account-mobile-tab"
                                >
                                    <div id="customer-mobile">
                                        <span className="hidden">Mobile Customer</span>
                                    </div>
                                </div>
                                <div
                                    className="tab-panel fade"
                                    id="setting-mobile"
                                    role="tabpanel"
                                    aria-labelledby="setting-mobile-tab"
                                >
                                    <div
                                        className="switcher language switcher-language"
                                        data-ui-id="language-switcher"
                                        id="switcher-language-nav"
                                    >
                                        <strong className="label switcher-label">
                                            <span>Language</span>
                                        </strong>
                                        <div className="switcher-content">
                                            <div
                                                className="action-switcher"
                                                id="switcher-language-trigger-nav"
                                            >
                                                <div
                                                    className="heading-switcher view-default"
                                                    style={{
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundImage:
                                                            'url("static/version1702456145/frontend/Sm/time/en_US/images/flags/flag_default.svg")'
                                                    }}
                                                >
                                                    <span>English</span>
                                                </div>
                                            </div>
                                            <div className="dropdown-switcher">
                                                <ul className="list-item">
                                                    <li className="view-belgium switcher-option">
                                                        <div class="oidjiswjrwee p-3">
                                                            <span
                                                                style={{
                                                                    backgroundRepeat: "no-repeat",
                                                                    backgroundImage:
                                                                        'url("static/version1702456145/frontend/Sm/time/en_US/images/flags/flag_belgium.svg")'
                                                                }}>

                                                                Belgium
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li className="view-french switcher-option">
                                                        <div class="oidjiswjrwee p-3">
                                                            <span
                                                                style={{
                                                                    backgroundRepeat: "no-repeat",
                                                                    backgroundImage:
                                                                        'url("static/version1702456145/frontend/Sm/time/en_US/images/flags/flag_french.svg")'
                                                                }}>

                                                                French
                                                            </span>
                                                        </div>
                                                    </li>
                                                    
                                                    <li className="view-honduras switcher-option">
                                                        <div class="oidjiswjrwee p-3">
                                                            <span
                                                                style={{
                                                                    backgroundRepeat: "no-repeat",
                                                                    backgroundImage:
                                                                        'url("static/version1702456145/frontend/Sm/time/en_US/images/flags/flag_honduras.svg")'
                                                                }}>

                                                                Honduras
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="switcher currency switcher-currency"
                                        id="switcher-currency-nav"
                                    >
                                        <strong className="label switcher-label">
                                            <span>Currency</span>
                                        </strong>
                                        <div className="switcher-content">
                                            <div
                                                className="action-switcher"
                                                id="switcher-currency-trigger-nav"
                                            >
                                                <div className="heading-switcher language-USD">
                                                    <span>USD</span>
                                                </div>
                                            </div>

                                            <div className="dropdown-switcher">
                                                <ul className="list-item">
                                                    <li className="currency-EUR switcher-option p-3">                                                        
                                                        EUR - Euro                                                        
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </header>

            { mobileSidebar ? (                
                <div onClick={() => setMobileSidebar(false)} className={mobileSidebar ? "nav-overlay nav-overlay-show" : "nav-overlay" }>
                    <span className="hidden">Overlay</span>
                </div>) : "" 
            }
        </>
    )
}