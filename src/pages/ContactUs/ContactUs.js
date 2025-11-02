export const ContactUs = () => {
  return (
    <>
      <div className="title-breadcrumbs">
        <div className="container">
          <div className="page-title-wrapper">
            <h1 className="page-title">
              <span className="base" data-ui-id="page-title-wrapper">
                Contact Us
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
            <div className="contact-us-container">
              <div className="google-map">
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8352535722393!2d144.95373531573256!3d-37.8173276797518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1svi!2s!4v1558405327045!5m2!1svi!2s"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    title="Company Location On Map"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="block-contact-form">
                    <div className="bonus-title second-font">
                      <strong>Write to Us</strong>
                    </div>
                    <div className="bonus-content">
                      <form
                        className="form contact"
                        action="http://magento2.magentech.com/themes/sm_time/pub/default/contact/index/post/"
                        id="contact-form"
                        method="post"
                        data-hasrequired="* Required Fields"
                        data-mage-init='{"validation":{}}'
                      >
                        <fieldset className="fieldset">
                          <div className="field name required">
                            <label className="label second-font" htmlFor="name">
                              <span>Name</span>
                            </label>
                            <div className="control">
                              <input
                                name="name"
                                id="name"
                                title="Name"
                                defaultValue=""
                                className="input-text"
                                type="text"
                                data-validate="{required:true}"
                              />
                            </div>
                          </div>
                          <div className="field email required">
                            <label className="label second-font" htmlFor="email">
                              <span>Email</span>
                            </label>
                            <div className="control">
                              <input
                                name="email"
                                id="email"
                                title="Email"
                                defaultValue=""
                                className="input-text"
                                type="email"
                                data-validate="{required:true, 'validate-email':true}"
                              />
                            </div>
                          </div>
                          <div className="field telephone">
                            <label
                              className="label second-font"
                              htmlFor="telephone"
                            >
                              <span>Phone Number</span>
                            </label>
                            <div className="control">
                              <input
                                name="telephone"
                                id="telephone"
                                title="Phone Number"
                                defaultValue=""
                                className="input-text"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="field comment required">
                            <label className="label second-font" htmlFor="comment">
                              <span>What’s on your mind?</span>
                            </label>
                            <div className="control">
                              <textarea
                                name="comment"
                                id="comment"
                                title="What’s on your mind?"
                                className="input-text"
                                cols={5}
                                rows={3}
                                data-validate="{required:true}"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </fieldset>
                        <div className="actions-toolbar">
                          <div className="primary">
                            <input
                              type="hidden"
                              name="hideit"
                              id="hideit"
                              defaultValue=""
                            />
                            <button
                              type="submit"
                              title="Send Messenger"
                              className="action submit primary second-font"
                            >
                              <span>Send Messenger</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-us-info">
                    <div className="bonus-title second-font">
                      <strong>Contact Us</strong>
                    </div>
                    <div className="bonus-content">
                      <ul className="info-contact second-font">
                        <li className="address">
                          5611 Wellington Road, Suite 115, Gainesville,
                          <br />
                          VA 20155
                        </li>
                        <li className="phone">888 9344 6000 - 888 1234 6789</li>
                        <li className="email">time-store@magentech.com</li>
                        <li className="time">
                          7 Days a week from 10-00 am to 6-00 pm
                        </li>
                      </ul>
                      <ul className="contact-social">
                        <li>
                          <a className="icon-facebook" title="Facebook" href="https://github.com/avikmajumder17">
                            <span className="hidden">Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a className="icon-twitter" title="Twitter" href="https://github.com/avikmajumder17">
                            <span className="hidden">Twitter</span>
                          </a>
                        </li>
                        <li>
                          <a className="icon-instagram2" title="Instagram" href="https://github.com/avikmajumder17">
                            <span className="hidden">Instagram</span>
                          </a>
                        </li>
                        <li>
                          <a className="icon-youtube1" title="Youtube" href="https://github.com/avikmajumder17">
                            <span className="hidden">Youtube</span>
                          </a>
                        </li>
                        <li>
                          <a className="icon-linkedin" title="Linkedin" href="https://github.com/avikmajumder17">
                            <span className="hidden">Linkedin</span>
                          </a>
                        </li>
                      </ul>
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