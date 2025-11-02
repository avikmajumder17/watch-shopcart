import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ProductCard } from "../../components/Elements/ProductCard";
import { BestSeller } from "../../components";
import { useFilter } from "../../context/FilterContext";

import "./Shop.css";



export const Shop = () => {
  const { state, productList, initialProductList, setPriceRange, setManufacturer, setColor, setSize, setSortBy, resetFilter } = useFilter();
  const [manufacturers, setManufacturers] = useState([]);
  const [colors, setColors] = useState([]);
  const [productSizes, setProductSizes] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  const search = useLocation().search;

  const searchTerm = new URLSearchParams(search).get("keyword");

  // eslint-disable-next-line

  useEffect(() => {
    async function fetchProducts() {
      const URL = `http://localhost:8000/products`;
      const response = await fetch(URL);
      const data = await response.json();

      const searchedProducts = searchTerm ? data.filter(item => item.name.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())) : data;

      initialProductList(searchedProducts);
    }

    fetchProducts();
  }, [searchTerm]);



  useEffect(() => {
    const fetchManufacturers = async() => {
      const URL = "http://localhost:8000/manufacturer";
      const response = await fetch(URL);
      const data = await response.json();
      setManufacturers(data);
    }

    fetchManufacturers();
  }, []);



  useEffect(() => {
    const fetchColors = async() => {
      const URL = "http://localhost:8000/color";
      const response = await fetch(URL);
      const data = await response.json();
      setColors(data);
    }

    fetchColors();
  }, []);



  useEffect(() => {
    const fetchProductSizes = async() => {
      const URL = "http://localhost:8000/size";
      const response = await fetch(URL);
      const data = await response.json();
      setProductSizes(data);
    }

    fetchProductSizes();
  }, []);


  const handlePriceMinValue = (e) => {
    setMinValue(e.target.value);
  }

   const handlePriceMaxValue = (e) => {
    setMaxValue(e.target.value);
  }

  // eslint-disable-next-line
  
  useEffect(() => {
    setPriceRange(minValue, maxValue);
  }, [minValue, maxValue]);



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
            </div>

            <div
              className="toolbar row align-items-center justify-content-between toolbar-products"
              data-mage-init='{"productListToolbarForm":{"mode":"product_list_mode","direction":"product_list_dir","order":"product_list_order","limit":"product_list_limit","modeDefault":"grid","directionDefault":"asc","orderDefault":"position","limitDefault":12,"url":"http:\/\/magento2.magentech.com\/themes\/sm_time\/pub\/default\/men-watches.html","formKey":"yDWD4CGlrqta0hiR","post":false}}'
            >
              <div className="col-lg-6">
                <p className="toolbar-amount" id="toolbar-amount">
                  <span className="toolbar-number">Products Found {searchTerm && "for your search"} <span style={{fontSize: "2.5rem"}}><i>{searchTerm}</i></span>: {productList.length}</span> Item(s)
                </p>
              </div>
              
              <div className="col-lg-6">
                <div className="ionndiewewer d-flex align-items-center justify-content-end">
                  <div className="toolbar-sorter mr-5">
                    <label className="sorter-label" htmlFor="sorter">
                      Sort By
                    </label>

                    <select onChange={(e) => setSortBy(e.target.value)} id="sorter" value={state.sortBy || ""} data-role="sorter" className="sorter-options">
                      <option value="" disabled selected>Get Products By</option>

                      <option value="pricelowtohigh" selected="selected">
                        Price: Low - High
                      </option>

                      <option value="pricehightolow" selected="selected">
                        Price: High - Low
                      </option>
                    </select>                
                  </div>

                  <div className="oijewiorewrew" onClick={resetFilter}>
                    <i class="bi me-1 bi-recycle"></i> Reset Filter
                  </div>
                </div>
              </div>
            </div>

            <div className="products wrapper grid products-grid product-grid-wrapper">
              <ol className="products fix-shadow block-style-1 list items shop-items-wrapper product-items">
                {productList.map((product) => (
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
                    Position
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
                  <div data-role="collapsible" className="filter-options-item mb-5">
                    <div data-role="title" className="filter-options-title">
                      Price
                    </div>

                    <div data-role="content" className="sfrewergrtrer p-3 row align-items-center justify-content-around">
                      <div className="dejhiwrre col-lg-5">
                        <label htmlFor="">Min</label>

                        <input type="number" min={0} value={state.priceRange.min} onChange={(e) => handlePriceMinValue(e)} className="form-control" />
                      </div>

                      <div className="dejhiwrre col-lg-2">
                        -
                      </div>

                      <div className="dejhiwrre col-lg-5">
                        <label htmlFor="">Max</label>

                        <input type="number" value={state.priceRange.max} onChange={(e) => handlePriceMaxValue(e)} className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div data-role="collapsible" className="filter-options-item">
                    <div data-role="title" className="filter-options-title">
                      Manufacturer
                    </div>

                    <div data-role="content" className="filter-options-content">
                      <ol className="items">
                        {manufacturers.map(manufacturer => (
                          <li className="my item" key={manufacturer.id}>
                            <input onClick={() => setManufacturer(manufacturer.mnuftrer)} id={`mnfrer-${manufacturer.id}`} checked={state.manufacturer === manufacturer.mnuftrer} type="radio" name="mnftr" className="d-none position-absolute w-100" />
                            
                            <label className="mnfrer w-100" htmlFor={`mnfrer-${manufacturer.id}`}>
                              {manufacturer.mnuftrer}
                            </label>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div data-role="collapsible" className="filter-options-item">
                    <div data-role="title" className="filter-options-title">
                      Color
                    </div>
                    
                    <div data-role="content" className="filter-options-content">
                      <div className="ioendewrer p-4 d-flex flex-wrap justify-content-between">
                        {colors.map(color => (
                          <div className={`color-${color.id} m-2`} key={color.id}>
                            <input onClick={() => setColor(color.colorCode)} id={`clor-${color.id}`} checked={state.color === color.colorCode} name="filter-color" type="radio" className="d-none position-absolute" />

                            <label className="bc p-4" htmlFor={`clor-${color.id}`} style={{backgroundColor: `${color.colorCode}`}}></label>                            
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div data-role="collapsible" className="filter-options-item">
                    <div data-role="title" className="filter-options-title">
                      Size
                    </div>

                    <div data-role="content" className="filter-options-content">
                      <ol className="dikenwihijner items">
                        {productSizes.map(pSize => (
                          <li className="my item" key={pSize.id}>
                            <input onClick={() => setSize(pSize.productSize)} id={`color-${pSize.id}`} type="radio" checked={state.size === pSize.productSize} name="prodct-sizes" className="d-none position-absolute w-100" />
                            
                            <label className="color w-100" htmlFor={`color-${pSize.id}`}>
                              {pSize.productSize} cm
                            </label>
                          </li>
                        ))}
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