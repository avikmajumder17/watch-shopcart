import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./AboutUs.css";

export const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Mark Levinson',
      job: 'Founder & CEO',
      image: 'http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/about-us/member/item-1.jpg',
    },
    {
      name: 'Ria Sakurai',
      job: 'Testing',
      image: 'http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/about-us/member/item-2.jpg',
    },
    {
      name: 'Shiego Tokuda',
      job: 'Marketing',
      image: 'http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/about-us/member/item-3.jpg',
    },
    {
      name: 'Tom Lymaskira',
      job: 'Designer',
      image: 'http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/about-us/member/item-4.jpg',
    },
    {
      name: 'Tom Lymaskira',
      job: 'Developer',
      image: 'http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/about-us/member/item-2.jpg',
    },
  ];

  const ourTeamSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      { breakpoint: 1920, settings: { slidesToShow: 4 } },
      { breakpoint: 1681, settings: { slidesToShow: 4 } },
      { breakpoint: 1441, settings: { slidesToShow: 4 } },
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 481, settings: { slidesToShow: 2 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } },
    ],
  };

  //

  const testimonials = [
    {
      text: 'It is a wonderful watch. I did not make the mistake of spending a sum of money to own it. Thank you New Century for the best.',
      name: 'Michael Jackson',
      location: 'Los Angeles',
      image: 'http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/about-us/client/item-1.png',
    },
    {
      text: 'It is a wonderful watch. I did not make the mistake of spending a sum of money to own it. Thank you New Century for the best.',
      name: 'Amanda Cerny',
      location: 'San Francisco',
      image: 'http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/about-us/client/item-1.png',
    },
    {
      text: 'It is a wonderful watch. I did not make the mistake of spending a sum of money to own it. Thank you New Century for the best.',
      name: 'Jonathan Hieu',
      location: 'Dam Temple',
      image: 'http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/about-us/client/item-1.png',
    },
  ];

  const testimonialSettings = {
    dots: false,
    infinite: false,
    arrows: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1920, settings: { slidesToShow: 1 } },
      { breakpoint: 1681, settings: { slidesToShow: 1 } },
      { breakpoint: 1441, settings: { slidesToShow: 1 } },
      { breakpoint: 1200, settings: { slidesToShow: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 481, settings: { slidesToShow: 1 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <div className="title-breadcrumbs">
        <div className="container">
          <div className="breadcrumbs">
            <div className="container">
              <ul className="items">
                <li className="item home">
                  <Link to="/" title="Go to Home Page">
                    Home
                  </Link>
                </li>

                <li className="item category95">
                  <strong>About Us</strong>
                </li>
              </ul>
            </div>
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
        <div className="category-view">
          <div className="category-cms">
            <div className="about-container">
              <div className="about-image">
                <img src="./images/media/wysiwyg/about-us/about-image.jpg" alt="About"
                />
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="block-welcome">
                    <div className="bonus-title second-font">
                      <strong>Welcome to SM Time</strong>
                    </div>
                    <div className="bonus-content">
                      <p>
                        Nulla auctor mauris ut dui luctus semper. In hac habitasse
                        platea dictumst. Duis pellentesque ligula a risus suscipit
                        dignissim. Nunc non nisl lacus. Integer pharetra lacinia
                        dapibus. Donec eu dolor dui, vel posuere mauris. Nulla
                        auctor mauris ut dui luctus semper. metus eget con sequat
                        ornare, augue dolor blandit purus, vitae lacinia nisi tellus
                        in erat. Nulla ac justo eget massa aliquet sodales.
                      </p>
                      <p>
                        Pellentesque semper congue sodales. In consequat, metus eget
                        con sequat ornare, augue dolor blandit purus, vitae lacinia
                        nisi tellus in erat. Nulla ac justo eget massa aliquet
                        sodales. Maecenas mattis male suada sem, in fringilla massa
                        dapibus quis. Suspendisse aliquam leo id neque auctor
                        molestie. Etiam at nulla tellus.
                      </p>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                        aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="block-whychoose">
                    <div className="bonus-title second-font">
                      <strong>Why Choose Us</strong>
                    </div>
                    <div className="bonus-content">
                      <div id="accordionExample" className="accordion">
                        <div className="card">
                          <div id="headingOne" className="card-header">
                            <a
                              className="title-collapse collapsed"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne" href="/"
                            >
                              {" "}
                              Shipping &amp; Returns{" "}
                            </a>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              Nulla auctor mauris ut dui luctus semper. In hac
                              habitasse platea dictumst. Duis pellentesque ligula a
                              risus suscipit dignissim. Nunc non nisl lacus. Integer
                              pharetra lacinia dapibus.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div id="headingTwo" className="card-header">
                            <a
                              className="title-collapse collapsed"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo" href="/"
                            >
                              {" "}
                              Secure Shopping{" "}
                            </a>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              Nulla auctor mauris ut dui luctus semper. In hac
                              habitasse platea dictumst. Duis pellentesque ligula a
                              risus suscipit dignissim. Nunc non nisl lacus. Integer
                              pharetra lacinia dapibus.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div id="headingThree" className="card-header">
                            <a
                              className="title-collapse collapsed"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree" href="/"
                            >
                              {" "}
                              International Shipping{" "}
                            </a>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              Nulla auctor mauris ut dui luctus semper. In hac
                              habitasse platea dictumst. Duis pellentesque ligula a
                              risus suscipit dignissim. Nunc non nisl lacus. Integer
                              pharetra lacinia dapibus.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div id="headingFour" className="card-header">
                            <a
                              className="title-collapse collapsed"
                              data-toggle="collapse"
                              data-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour" href="/"
                            >
                              {" "}
                              Affiliates{" "}
                            </a>
                          </div>
                          <div
                            id="collapseFour"
                            className="collapse"
                            aria-labelledby="headingFour"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              Nulla auctor mauris ut dui luctus semper. In hac
                              habitasse platea dictumst. Duis pellentesque ligula a
                              risus suscipit dignissim. Nunc non nisl lacus. Integer
                              pharetra lacinia dapibus.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div id="headingFive" className="card-header">
                            <a
                              className="title-collapse collapsed"
                              data-toggle="collapse"
                              data-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive" href="/"
                            >
                              {" "}
                              Group Sales{" "}
                            </a>
                          </div>
                          <div
                            id="collapseFive"
                            className="collapse"
                            aria-labelledby="headingFive"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              Nulla auctor mauris ut dui luctus semper. In hac
                              habitasse platea dictumst. Duis pellentesque ligula a
                              risus suscipit dignissim. Nunc non nisl lacus. Integer
                              pharetra lacinia dapibus.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="multi-lines-box margin-b85">
                <div className="multi-lines">&nbsp;</div>
                <div className="multi-lines">&nbsp;</div>
                <div className="multi-lines">&nbsp;</div>
              </div>
              <div className="our-member block-style-1">
                <div className="block-title">OUR TEAMS</div>
                <div className="block-sub-title">
                  LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
                  INDUSTRY
                </div>
                <div className="bonus-content">
                  <div className="nav-style-1 hover-to-show absolute-nav our-teams-slider">
                    <Slider {...ourTeamSettings}>
                      {teamMembers.map((member, index) => (
                        <div key={index} className="item">
                          <div className="member-image">
                            <div className="image-content">
                              <img
                                className="mark-lazy"
                                src={member.image}
                                alt="Member"
                              />
                            </div>
                          </div>
                          
                          <div className="member-info">
                            <div className="member-name second-font">{member.name}</div>

                            <div className="member-job">{member.job}</div>
                          </div>

                          <ul className="member-social">
                            <li><a className="icon-facebook" title="Facebook" href="https://github.com/avikmajumder17"><span className="hidden">Facebook</span></a></li>
                            
                            <li><a className="icon-twitter" title="Twitter" href="https://github.com/avikmajumder17"><span className="hidden">Twitter</span></a></li>
                            
                            <li><a className="icon-instagram2" title="Instagram" href="https://github.com/avikmajumder17"><span className="hidden">Instagram</span></a></li>
                          </ul>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="multi-lines-box margin-b85">
                <div className="multi-lines">&nbsp;</div>
                <div className="multi-lines">&nbsp;</div>
                <div className="multi-lines">&nbsp;</div>
              </div>
              <div className="our-client-say">
                <div className="nav-style-1 hover-to-show absolute-nav">
                  <Slider {...testimonialSettings}>
                    {testimonials.map((client, index) => (
                      <div key={index} className="item">
                        <div className="client-info">
                          <div className="client-description second-font">{client.text}</div>
                          <div className="client-image">
                            <img className="mark-lazy" src={client.image} alt="Client" />
                          </div>
                          <div className="client-name second-font text-theme-color">{client.name}</div>
                          <div className="client-localtion">{client.location}</div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}