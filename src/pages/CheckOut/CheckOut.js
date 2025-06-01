export const CheckOut = () => {
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
                <div className="columns">
                    <div className="column main">
                        <input name="form_key" type="hidden" defaultValue="yDWD4CGlrqta0hiR" />
                        <div
                            id="authenticationPopup"
                            data-bind="scope:'authenticationPopup', style: {display: 'none'}"
                        >
                            {/* ko template: getTemplate() */}
                            {/* /ko */}
                        </div>
                        <div className="cart-empty">
                            <p>You have no items in your shopping cart.</p>
                            <p>
                                Click <a href="../../index.html">here</a> to continue shopping.{" "}
                            </p>
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
                                            <a title="Newsletter" href="/">
                                                <img
                                                    src="../../../media/wysiwyg/newsletter/image-newsletter-popup.jpg"
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