import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ProductCard } from "../../components/Elements/ProductCard";
import { BestSeller } from "../../components";

import "./Shop.css";


export const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const URL = `http://localhost:8000/products`;
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <div className="title-breadcrumbs">
        <div className="container">
          <div className="page-title-wrapper">
            <h1
              className="page-title"
              id="page-title-heading"
              aria-labelledby="page-title-heading toolbar-amount"
            >
              <span className="base" data-ui-id="page-title-wrapper">
                Men's Watches
              </span>
            </h1>
          </div>
          <div className="breadcrumbs">
            <div className="container">
              <ul className="items">
                <li className="item home">
                  <Link to="/" title="Go to Home Page">
                    Home
                  </Link>
                </li>

                <li className="item category12">
                  <strong>Men's Watches</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main id="maincontent" className="page-main">        
        <div className="category-view">
          <div className="category-image">
            <img
              src="../media/catalog/category/menwatches_1.png"
              alt="Men's Watches"
              title="Men's Watches"
              className="image"
            />
          </div>
        </div>

        <div className="columns row flex-row-reverse">
          <div className="column col-lg-10 main">
            <input name="form_key" type="hidden" defaultValue="yDWD4CGlrqta0hiR" />

            <div
              id="authenticationPopup"
              data-bind="scope:'authenticationPopup', style: {display: 'none'}"
            >
              {/* ko template: getTemplate() */}
              {/* /ko */}
            </div>
            <div
              className="toolbar toolbar-products"
              data-mage-init='{"productListToolbarForm":{"mode":"product_list_mode","direction":"product_list_dir","order":"product_list_order","limit":"product_list_limit","modeDefault":"grid","directionDefault":"asc","orderDefault":"position","limitDefault":12,"url":"http:\/\/magento2.magentech.com\/themes\/sm_time\/pub\/default\/men-watches.html","formKey":"yDWD4CGlrqta0hiR","post":false}}'
            >
              <div className="modes d-inline-block">
                <strong className="modes-label" id="modes-label">
                  View as
                </strong>
                <strong
                  title="Grid"
                  className="modes-mode active csdrttbeweerrr-grid mode-grid"
                  data-value="grid"
                >
                  <span>Grid</span>
                </strong>
                <a
                  className="modes-mode mode-list"
                  title="List"
                  href="/"
                  data-role="mode-switcher"
                  data-value="list"
                  id="mode-list"
                  aria-labelledby="modes-label mode-list"
                >
                  <span>List</span>
                </a>
              </div>
              <p className="toolbar-amount" id="toolbar-amount">
                <span className="toolbar-number">10</span> Items
              </p>
              <div className="toolbar-sorter sorter">
                <label className="sorter-label" htmlFor="sorter">
                  Sort By
                </label>
                <select id="sorter" data-role="sorter" className="sorter-options">
                  <option value="position" selected="selected">
                    Position{" "}
                  </option>
                  <option value="name">Product Name </option>
                  <option value="price">Price </option>
                </select>
                <a
                  title="Set Descending Direction"
                  href="/"
                  className="action sorter-action sort-asc"
                  data-role="direction-switcher"
                  data-value="desc"
                >
                  <span>Set Descending Direction</span>
                </a>
              </div>
            </div>

            <div className="products wrapper grid products-grid product-grid-wrapper">
              <ol className="products fix-shadow block-style-1 list items shop-items-wrapper product-items">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </ol>
            </div>

            <div
              className="toolbar toolbar-products"
              data-mage-init='{"productListToolbarForm":{"mode":"product_list_mode","direction":"product_list_dir","order":"product_list_order","limit":"product_list_limit","modeDefault":"grid","directionDefault":"asc","orderDefault":"position","limitDefault":12,"url":"http:\/\/magento2.magentech.com\/themes\/sm_time\/pub\/default\/men-watches.html","formKey":"yDWD4CGlrqta0hiR","post":false}}'
            >
              <div className="modes">
                <strong className="modes-label" id="modes-label">
                  View as
                </strong>

                <strong title="Grid" className="modes-mode active mode-grid" data-value="grid">
                  <span>Grid</span>
                </strong>

                <a className="modes-mode mode-list" title="List" href="/" data-role="mode-switcher" data-value="list" id="mode-list" aria-labelledby="modes-label mode-list">
                  <span>List</span>
                </a>
              </div>

              <p className="toolbar-amount" id="toolbar-amount">
                <span className="toolbar-number">10</span> Items
              </p>

              <div className="toolbar-sorter sorter">
                <label className="sorter-label" htmlFor="sorter">
                  Sort By
                </label>
                <select id="sorter" data-role="sorter" className="sorter-options">
                  <option value="position" selected="selected">
                    Position{" "}
                  </option>
                  <option value="name">Product Name </option>
                  <option value="price">Price </option>
                </select>
                <a
                  title="Set Descending Direction"
                  href="/"
                  className="action sorter-action sort-asc"
                  data-role="direction-switcher"
                  data-value="desc"
                >
                  <span>Set Descending Direction</span>
                </a>
              </div>
            </div>
          </div>

          <div className="sidebar col-lg-2 sidebar-main">
            <div className="block filter" id="layered-filter-block" data-mage-init='{"collapsible":{"openedState": "active", "collapsible": true, "active": false, "collateral": { "openedState": "filter-active", "element": "body" } }}'>
              <div className="block-title filter-title" data-count={0}>
                <strong data-role="title">Filter Products By</strong>
              </div>

              <div className="block-content filter-content">
                <strong
                  role="heading"
                  aria-level={2}
                  className="block-subtitle filter-subtitle"
                >
                  Shopping Options
                </strong>
                <div
                  className="filter-options"
                  id="narrow-by-list"
                  data-role="content"
                  data-mage-init='{"accordion":{"openedState": "active", "collapsible": true, "active": false, "multipleCollapsible": false}}'
                >
                  <div data-role="collapsible" className="filter-options-item">
                    <div data-role="title" className="filter-options-title">
                      Price
                    </div>
                    <div data-role="content" className="filter-options-content">
                      <div className="price-slider-wrap">
                        <div
                          id="price-slider"
                          data-rate={1}
                          data-min-standard={250}
                          data-max-standard={689}
                        />
                        <div className="price-slider-values">
                          <span className="filter-currency">$</span>
                          <input
                            name="price_minimum"
                            id="price_minimum"
                            defaultValue={250}
                            type="text"
                          />
                          <span className="price-filter-separator">
                            &nbsp;-&nbsp;
                          </span>
                          <span className="filter-currency">$</span>
                          <input
                            name="price_maximum"
                            id="price_maximum"
                            defaultValue={689}
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-role="collapsible" className="filter-options-item">
                    <div data-role="title" className="filter-options-title">
                      Manufacturer
                    </div>
                    <div data-role="content" className="filter-options-content">
                      <ol className="items">
                        <li className="my item">
                          <a href="men-watches0163.html?manufacturer=16">
                            Smile Retro
                            <span className="count">
                              2<span className="filter-count-label">items</span>
                            </span>
                          </a>
                        </li>
                        <li className="my item">
                          <a href="men-watches5219.html?manufacturer=17">
                            Mock Up{" "}
                            <span className="count">
                              3<span className="filter-count-label">items</span>
                            </span>
                          </a>
                        </li>
                        <li className="my item">
                          <a href="men-watches485f.html?manufacturer=19">
                            The Back Yard{" "}
                            <span className="count">
                              2<span className="filter-count-label">items</span>
                            </span>
                          </a>
                        </li>
                        <li className="my item">
                          <a href="men-watches2b12.html?manufacturer=22">
                            Agatha Stewart{" "}
                            <span className="count">
                              1<span className="filter-count-label">item</span>
                            </span>
                          </a>
                        </li>
                        <li className="my item">
                          <a href="men-watchesc3a4.html?manufacturer=24">
                            Ontech Group{" "}
                            <span className="count">
                              1<span className="filter-count-label">item</span>
                            </span>
                          </a>
                        </li>
                        <li className="my item">
                          <a href="men-watches6e6c.html?manufacturer=25">
                            Real Estate{" "}
                            <span className="count">
                              1<span className="filter-count-label">item</span>
                            </span>
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div data-role="collapsible" className="filter-options-item">
                    <div data-role="title" className="filter-options-title">
                      Color
                    </div>
                    <div data-role="content" className="filter-options-content">
                      <div
                        className="swatch-attribute swatch-layered color"
                        data-attribute-code="color"
                        data-attribute-id={93}
                      >
                        <div className="swatch-attribute-options clearfix">
                          <a
                            href="men-watcheseaf0.html?color=4"
                            rel="nofollow"
                            aria-label="Black"
                            className="swatch-option-link-layered"
                          >
                            <div
                              className="swatch-option color "
                              tabIndex={-1}
                              data-option-type={1}
                              data-option-id={4}
                              data-option-label="Black"
                              data-option-tooltip-thumb=""
                              data-option-tooltip-value="#000000"
                            ></div>
                          </a>
                          <a
                            href="men-watches5686.html?color=6"
                            rel="nofollow"
                            aria-label="Brown"
                            className="swatch-option-link-layered"
                          >
                            <div
                              className="swatch-option color "
                              tabIndex={-1}
                              data-option-type={1}
                              data-option-id={6}
                              data-option-label="Brown"
                              data-option-tooltip-thumb=""
                              data-option-tooltip-value="#945454"
                            ></div>
                          </a>
                          <a
                            href="men-watches5ebb.html?color=7"
                            rel="nofollow"
                            aria-label="Gray"
                            className="swatch-option-link-layered"
                          >
                            <div
                              className="swatch-option color "
                              tabIndex={-1}
                              data-option-type={1}
                              data-option-id={7}
                              data-option-label="Gray"
                              data-option-tooltip-thumb=""
                              data-option-tooltip-value="#8f8f8f"
                            ></div>
                          </a>
                          <a
                            href="men-watches2686.html?color=9"
                            rel="nofollow"
                            aria-label="Lavender"
                            className="swatch-option-link-layered"
                          >
                            <div
                              className="swatch-option color "
                              tabIndex={-1}
                              data-option-type={1}
                              data-option-id={9}
                              data-option-label="Lavender"
                              data-option-tooltip-thumb=""
                              data-option-tooltip-value="#ce64d4"
                            ></div>
                          </a>
                          <a
                            href="men-watches8874.html?color=11"
                            rel="nofollow"
                            aria-label="Orange"
                            className="swatch-option-link-layered"
                          >
                            <div
                              className="swatch-option color "
                              tabIndex={-1}
                              data-option-type={1}
                              data-option-id={11}
                              data-option-label="Orange"
                              data-option-tooltip-thumb=""
                              data-option-tooltip-value="#eb6703"
                            ></div>
                          </a>
                          <a
                            href="men-watchesf958.html?color=13"
                            rel="nofollow"
                            aria-label="Red"
                            className="swatch-option-link-layered"
                          >
                            <div
                              className="swatch-option color "
                              tabIndex={-1}
                              data-option-type={1}
                              data-option-id={13}
                              data-option-label="Red"
                              data-option-tooltip-thumb=""
                              data-option-tooltip-value="#ff0000"
                            ></div>
                          </a>
                          <a
                            href="men-watchesa315.html?color=15"
                            rel="nofollow"
                            aria-label="Yellow"
                            className="swatch-option-link-layered"
                          >
                            <div
                              className="swatch-option color "
                              tabIndex={-1}
                              data-option-type={1}
                              data-option-id={15}
                              data-option-label="Yellow"
                              data-option-tooltip-thumb=""
                              data-option-tooltip-value="#ffd500"
                            ></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-role="collapsible" className="filter-options-item">
                    <div data-role="title" className="filter-options-title">
                      Size
                    </div>
                    <div data-role="content" className="filter-options-content">
                      <ol className="items">
                        <li className="my item">
                          <a href="men-watches2bf4.html?size=38">
                            35 cm{" "}
                            <span className="count">
                              1<span className="filter-count-label">item</span>
                            </span>
                          </a>
                        </li>
                        <li className="my item">
                          <a href="men-watches4196.html?size=33">
                            38 cm{" "}
                            <span className="count">
                              1<span className="filter-count-label">item</span>
                            </span>
                          </a>
                        </li>
                        <li className="my item">
                          <a href="men-watchese245.html?size=39">
                            40 cm{" "}
                            <span className="count">
                              3<span className="filter-count-label">items</span>
                            </span>
                          </a>
                        </li>
                        <li className="my item">
                          <a href="men-watches2542.html?size=37">
                            42 cm{" "}
                            <span className="count">
                              1<span className="filter-count-label">item</span>
                            </span>
                          </a>
                        </li>
                        <li className="my item">
                          <a href="men-watchesb5d3.html?size=40">
                            45 cm{" "}
                            <span className="count">
                              1<span className="filter-count-label">item</span>
                            </span>
                          </a>
                        </li>
                        <li className="my item">
                          <a href="men-watches97f7.html?size=34">
                            46 cm{" "}
                            <span className="count">
                              2<span className="filter-count-label">items</span>
                            </span>
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="banner-image">
              <a title="Banner Image" href="/">
                <img className="mark-lazy lazyload w-100 h-100" style={{ maxHeight: "100%" }} src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/banner/banner-sidebar.jpg" data-src="" alt="Banner" />
              </a>
            </div>

            <BestSeller />

            <div className="sidebar sidebar-additional">
              <div className="block block-compare" data-bind="scope: 'compareProducts'" data-role="compare-products-sidebar">
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
                        <a href="/" aria-label="Home"
                          className="product-item-link"
                        />
                      </strong>
                      <a href="/"
                        title="Remove This Item"
                        className="action delete"
                      >
                        <span>Remove This Item</span>
                      </a>
                    </li>
                  </ol>
                  <div className="actions-toolbar">
                    <div className="primary">
                      <a href="/"
                        data-bind="attr: {'href': compareProducts().listUrl}"
                        className="action compare primary"
                      >
                        <span>Compare</span>
                      </a>
                    </div>
                    <div className="secondary">
                      <a href="/"
                        id="compare-clear-all"
                        className="action clear"                       
                      >
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
                          src="../media/wysiwyg/newsletter/image-newsletter-popup.jpg"
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