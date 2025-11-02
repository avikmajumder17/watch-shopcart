import { useEffect, useState } from "react";

export const BestSeller = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    async function fetchBestSellerProduct(){
      const URL = `http://localhost:8000/bestSellerProducts`;

      const response = await fetch(URL);
      const data = await response.json();
      setBestSellers(data);
    }    

    fetchBestSellerProduct();
  }, []);

  return (
    <div className="product-sidebar hidden-rating">
      <div className="block block-list-products">
        <div className="block-title">
          <strong>Best sellers</strong>
        </div>

        <div className="block-content">
          <div id="filterproducts_0" className="product-type-list">
            <div className="products list items product-items filterproducts">
              { bestSellers.map((bestSeller) => (
                <div className="item product product-item">
                  <div
                    className="product-item-info"
                    data-container="product-grid"
                  >
                    <div className="image-product">
                      <a
                        href="default/short-sleeves-shirt-merino-wool-baselayer-top.html"
                        className="product photo product-item-photo"
                        tabIndex={-1}
                      >
                        <span
                          className="product-image-container product-image-container-140"
                          style={{ width: 110 }}
                        >
                          <span className="product-image-wrapper">
                            <img
                              className="product-image-photo lazyload"
                              src={bestSeller.image}
                              data-src=""
                              loading="lazy"
                              width={110}
                              height={110}
                              alt={bestSeller.name}
                            />
                          </span>
                        </span>
                      </a>
                    </div>

                    <div className="product details product-item-details">
                      <strong className="product name product-item-name">
                        <a
                          className="product-item-link"
                          href="default/short-sleeves-shirt-merino-wool-baselayer-top.html"
                        >
                          {bestSeller.name}
                        </a>
                      </strong>

                      <div className="product-reviews-summary short">
                        <div className="rating-summary">
                          <span className="label">
                            <span>Rating:</span>
                          </span>
                          <div
                            className="rating-result"
                            id="rating-result_140"
                            title="80%"
                          >
                            <span>
                              <span>80%</span>
                            </span>
                          </div>
                        </div>

                        <div className="reviews-actions">
                          <a
                            className="action view"
                            href="default/short-sleeves-shirt-merino-wool-baselayer-top.html#reviews"
                          >
                            1 &nbsp;<span>Review </span>
                          </a>
                        </div>
                      </div>

                      <div
                        className="price-box price-final_price"
                        data-role="priceBox"
                        data-product-id={140}
                        data-price-box="product-id-140"
                      >
                        <span className="price-container price-final_price tax weee">
                          <span
                            id="product-price-140"
                            data-price-amount={270}
                            data-price-type="finalPrice"
                            className="price-wrapper "
                          >
                            <span className="price">${bestSeller.price}</span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )) }              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}