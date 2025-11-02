import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";

export const Register = () => {
    const navigate = useNavigate();

    const { setToken } = useAuth();

    async function handleRegister(e) {
        e.preventDefault();

        const userDetails = {
            firstName: e.target.firstname.value,
            lastName: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        const requestOptions = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userDetails)
        }

        const response = await fetch(`http://localhost:8000/register`, requestOptions);

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
                                Create New Customer Account
                            </span>
                        </h1>
                    </div>
                </div>
            </div>

            <main id="maincontent" className="page-main">
                <div className="page messages">
                    <div data-placeholder="messages" />
                    <div data-bind="scope: 'messages'">
                        {/* ko if: cookieMessages && cookieMessages.length > 0 */}
                        <div
                            aria-atomic="true"
                            role="alert"
                            data-bind="foreach: { data: cookieMessages, as: 'message' }"
                            className="messages"
                        >
                            <div
                                data-bind="attr: {
      class: 'message-' + message.type + ' ' + message.type + ' message',
      'data-ui-id': 'message-' + message.type
  }"
                            >
                                <div data-bind="html: $parent.prepareMessageForHtml(message.text)" />
                            </div>
                        </div>
                        {/* /ko */}
                        {/* ko if: messages().messages && messages().messages.length > 0 */}
                        <div
                            aria-atomic="true"
                            role="alert"
                            className="messages"
                            data-bind="foreach: {
  data: messages().messages, as: 'message'
    }"
                        >
                            <div
                                data-bind="attr: {
      class: 'message-' + message.type + ' ' + message.type + ' message',
      'data-ui-id': 'message-' + message.type
  }"
                            >
                                <div data-bind="html: $parent.prepareMessageForHtml(message.text)" />
                            </div>
                        </div>
                        {/* /ko */}
                    </div>
                </div>

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

                        <form onSubmit={handleRegister} className="form create account form-create-account">
                            <fieldset className="fieldset create info">
                                <legend className="legend">
                                    <span>Personal Information</span>
                                </legend>

                                <div className="field field-name-firstname required">
                                    <label className="label" htmlFor="firstname">
                                        <span>First Name</span>
                                    </label>

                                    <div className="control">
                                        <input type="text" id="firstname" name="firstname" title="First Name" className="input-text required-entry" required />
                                    </div>
                                </div>

                                <div className="field field-name-lastname required">
                                    <label className="label" htmlFor="lastname">
                                        <span>Last Name</span>
                                    </label>

                                    <div className="control">
                                        <input type="text" id="lastname" name="lastname" title="Last Name" className="input-text required-entry" required />
                                    </div>
                                </div>

                                <div className="field choice newsletter">
                                    <input type="checkbox" name="is_subscribed" title="Sign Up for Newsletter" defaultValue={1} id="is_subscribed" className="checkbox" />

                                    <label htmlFor="is_subscribed" className="label">
                                        <span>Sign Up for Newsletter</span>
                                    </label>
                                </div>

                                <div className="field choice">
                                    <input type="checkbox" name="assistance_allowed_checkbox" title="Allow remote shopping assistance" defaultValue={1} id="assistance_allowed_checkbox" className="checkbox" />

                                    <label htmlFor="assistance_allowed_checkbox" className="label">
                                        <span>Allow remote shopping assistance</span>
                                    </label>

                                    <input type="hidden" name="assistance_allowed" defaultValue="" />

                                    <div className="field-tooltip toggle">
                                        <span id="tooltip-label" className="label">
                                            <span>Tooltip</span>
                                        </span>

                                        <span
                                            id="tooltip"
                                            className="field-tooltip-action action-help"
                                            tabIndex={0}
                                            data-toggle="dropdown"
                                            aria-labelledby="tooltip-label"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            role="button"
                                        ></span>
                                        <div
                                            className="field-tooltip-content"
                                            data-target="dropdown"
                                            aria-hidden="true"
                                        >
                                            This allows merchants to "see what you see" and take actions
                                            on your behalf in order to provide better assistance.
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset
                                className="fieldset create account"
                                data-hasrequired="* Required Fields"
                            >
                                <legend className="legend">
                                    <span>Sign-in Information</span>
                                </legend>

                                <br />

                                <div className="field required">
                                    <label htmlFor="email_address" className="label">
                                        <span>Email</span>
                                    </label>

                                    <div className="control">
                                        <input type="email" name="email" autoComplete="off" id="email_address" defaultValue="" title="Email" className="input-text" required />
                                    </div>
                                </div>

                                <div className="field password required">
                                    <label htmlFor="password" className="label">
                                        <span>Password</span>
                                    </label>

                                    <div className="control">
                                        <input type="password" name="password" id="password" title="Password" className="input-text" data-password-min-length={8} data-password-min-character-sets={3} autoComplete="off" required />

                                        <div
                                            id="password-strength-meter-container"
                                            data-role="password-strength-meter"
                                            aria-live="polite"
                                        >
                                            <div
                                                id="password-strength-meter"
                                                className="password-strength-meter">
                                                Password Strength:
                                                <span
                                                    id="password-strength-meter-label"
                                                    data-role="password-strength-meter-label"
                                                >
                                                    No Password{" "}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="field confirmation required">
                                    <label htmlFor="password-confirmation" className="label">
                                        <span>Confirm Password</span>
                                    </label>

                                    <div className="control">
                                        <input type="password" name="password_confirmation" title="Confirm Password" id="password-confirmation" className="input-text" autoComplete="off" />
                                    </div>
                                </div>

                                <div className="field choice" data-bind="scope: 'showPassword'">
                                    {/* ko template: getTemplate() */}
                                    {/* /ko */}
                                </div>
                            </fieldset>

                            <fieldset className="fieldset additional_info"></fieldset>
                            <div className="actions-toolbar">
                                <div className="primary">
                                    <button
                                        type="submit"
                                        className="action submit primary"
                                        title="Register"
                                        id="send2"
                                    >
                                        <span>Register</span>
                                    </button>
                                </div>
                                <div className="secondary">
                                    <a
                                        className="action back"
                                        href="../login/referer/aHR0cDovL21hZ2VudG8yLm1hZ2VudGVjaC5jb20vdGhlbWV/index.html"
                                    >
                                        <span>Back</span>
                                    </a>
                                </div>
                            </div>
                        </form>
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
                                                    src="../../../../media/wysiwyg/newsletter/image-newsletter-popup.jpg"
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