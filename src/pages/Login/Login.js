import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";

export const Login = () => {
    const navigate = useNavigate();
    const { setToken } = useAuth();

    const email = useRef();
    const password = useRef();

    async function handleLogin(e) {
        e.preventDefault();

        const userDetails = {
            email: email.current.value,
            password: password.current.value
        };

        const requestOptions = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userDetails)
        };

        const response = await fetch(`http://localhost:8000/login`, requestOptions);

        const data = await response.json();
        data.accessToken ? navigate("/") : toast.error(data);

        if (data.accessToken) {
            sessionStorage.setItem("token", JSON.stringify(data.accessToken));
            sessionStorage.setItem("userid", JSON.stringify(data.user.id));
            setToken(data.accessToken);
        }
    }

    return (
        <>
            <div className="title-breadcrumbs">
                <div className="container">
                    <div className="page-title-wrapper">
                        <h1 className="page-title">
                            <span className="base" data-ui-id="page-title-wrapper">
                                Customer Login
                            </span>
                        </h1>
                    </div>
                </div>
            </div>

            <main id="maincontent" className="page-main">
                <div className="columns">
                    <div className="column main">
                        <div className="login-container">
                            <div className="block block-customer-login">
                                <div className="block-title">
                                    <strong
                                        id="block-customer-login-heading"
                                        role="heading"
                                        aria-level={2}
                                    >
                                        Registered Customers
                                    </strong>
                                </div>
                                <div
                                    className="block-content"
                                    aria-labelledby="block-customer-login-heading"
                                >
                                    <form onSubmit={handleLogin} className="form form-login" action="http://magento2.magentech.com/themes/sm_time/pub/default/customer/account/loginPost/referer/aHR0cDovL21hZ2VudG8yLm1hZ2VudGVjaC5jb20vdGhlbWVzL3NtX3RpbWUvcHViL2RlZmF1bHQvY3VzdG9tZXIvYWNjb3VudC9jcmVhdGUv/" id="login-form" data-mage-init='{"validation":{}}'>
                                        <fieldset
                                            className="fieldset login"
                                            data-hasrequired="* Required Fields"
                                        >
                                            <div className="field note">
                                                If you have an account, sign in with your email address.
                                            </div>

                                            <div className="field email required">
                                                <label className="label" htmlFor="email">
                                                    <span>Email</span>
                                                </label>

                                                <div className="control">
                                                    <input ref={email} name="email" defaultValue="" autoComplete="off" id="email" type="email" className="input-text" title="Email" />
                                                </div>
                                            </div>

                                            <div className="field password required">
                                                <label htmlFor="pass" className="label">
                                                    <span>Password</span>
                                                </label>

                                                <div className="control">
                                                    <input ref={password} name="password" type="password" autoComplete="off" className="input-text" id="pass" title="Password" />
                                                </div>
                                            </div>

                                            <div className="actions-toolbar">
                                                <div className="primary">
                                                    <button
                                                        type="submit"
                                                        className="action login primary"
                                                        name="send"
                                                        id="send2"
                                                    >
                                                        <span>Login</span>
                                                    </button>
                                                </div>
                                                <div className="secondary">
                                                    <a
                                                        className="action remind"
                                                        href="../../../forgotpassword/index.html"
                                                    >
                                                        <span>Forgot Your Password?</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div className="block block-new-customer">
                                <div className="block-title">
                                    <strong
                                        id="block-new-customer-heading"
                                        role="heading"
                                        aria-level={2}
                                    >
                                        New Customers
                                    </strong>
                                </div>
                                <div
                                    className="block-content"
                                    aria-labelledby="block-new-customer-heading"
                                >
                                    <p>
                                        Creating an account has many benefits: check out faster, keep
                                        more than one address, track orders and more.
                                    </p>

                                    <div className="actions-toolbar">
                                        <div className="primary">
                                            <Link to="/register" className="action create primary" >
                                                <span>Register</span>
                                            </Link>
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
                                                    src="../../../../../../media/wysiwyg/newsletter/image-newsletter-popup.jpg"
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