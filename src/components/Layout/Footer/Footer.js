import { Link } from "react-router-dom";

import Logo from "../../../assets/frontend/Sm/time/en_US/images/logo.svg";

export const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-style-1">
                <div className="footer-top margin-b100">
                    <div className="container">
                        <div className="newsletter-box margin-b100">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="newsletter-title-footer">
                                        <div className="newsletter-title second-font">
                                            SIGN UP NEWSLETTER
                                        </div>
                                        <div className="newsletter-subtitle">
                                            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND
                                            TYPESETTING INDUSTRY
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="subcribe-footer-content">
                                        <div className="block-subscribe-footer">
                                            <form
                                                className="form subscribe"
                                                noValidate=""
                                                action="http://magento2.magentech.com/themes/sm_time/pub/default/newsletter/subscriber/new/"
                                                method="post"
                                                data-mage-init='{"validation": {"errorClass": "mage-error"}}'
                                                id="newsletter-footer-validate-detail"
                                            >
                                                <div className="newsletter-content">
                                                    <div className="input-box">
                                                        <input name="email" type="email" />
                                                    </div>
                                                    <div className="action-button">
                                                        <button
                                                            className="action subscribe primary"
                                                            title="Subscribe"
                                                            type="submit"
                                                        >
                                                            <span>Subscribe</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-list clearfix">
                        <div className="container">
                            <ul className="row">
                                <li>
                                    <div className="item second-font">
                                        <div className="item-icon">
                                            <img
                                                src="/images/media/wysiwyg/services/icon-1.png"
                                                alt="Service"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">Free Shipping On All Orders</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item second-font">
                                        <div className="item-icon">
                                            <img
                                                src="/images/media/wysiwyg/services/icon-2.png"
                                                alt="Service"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">Free Return And Exchange</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item second-font">
                                        <div className="item-icon">
                                            <img
                                                src="/images/media/wysiwyg/services/icon-3.png"
                                                alt="Service"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">100% Genuine Commitment</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item second-font">
                                        <div className="item-icon">
                                            <img
                                                src="/images/media/wysiwyg/services/icon-4.png"
                                                alt="Service"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <div className="item-info">
                                            <div className="item-title">24/7 Customer Support</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="container">
                        <div className="footer-logo">
                            <img src={Logo} alt="logo footer" width={188} height={48} />
                        </div>

                        <div className="footer-links second-font">
                            <ul>
                                <li>
                                    <Link to="/about-us">
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/contact-us">
                                        Contact Us
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/">Information</Link>
                                </li>

                                <li>
                                    <Link to="/">Extras</Link>
                                </li>

                                <li>
                                    <Link to="/blog">Latest Post</Link>
                                </li>

                                <li>
                                    <Link to="/">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="social-footer1">
                            <ul>
                                <li className="facebook">
                                    <a className="icon-facebook1" title="Facebook" href="https://github.com/avikmajumder17">
                                        <span className="hidden">Facebook</span>
                                    </a>
                                </li>

                                <li className="youtube">
                                    <a className="icon-youtube" title="Youtube" href="https://github.com/avikmajumder17">
                                        <span className="hidden">Youtube</span>
                                    </a>
                                </li>

                                <li className="twitter">
                                    <a className="icon-twitter1" title="Twitter" href="https://github.com/avikmajumder17">
                                        <span className="hidden">Twitter</span>
                                    </a>
                                </li>

                                <li className="google">
                                    <a className="icon-google-plus" title="Google" href="https://github.com/avikmajumder17">
                                        <span className="hidden">Google</span>
                                    </a>
                                </li>

                                <li className="instagram">
                                    <a className="icon-instagram2" title="Instagram" href="https://github.com/avikmajumder17">
                                        <span className="hidden">Instagram</span>
                                    </a>
                                </li>

                                <li className="linkedin">
                                    <a className="icon-linkedin2" title="Linkedin" href="https://github.com/avikmajumder17">
                                        <span className="hidden">Linkedin</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-copyright">
                            <address>
                                SM Time © 2021 Demo Store. All Rights Reserved. Designed by

                                <a title="MagenTech.Com" target="_blank" rel="noreferrer" href="https://github.com/avikmajumder17" >
                                    Avik Majumder
                                </a>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}