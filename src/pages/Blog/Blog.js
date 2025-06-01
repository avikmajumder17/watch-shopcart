import { Link } from "react-router-dom";

import { BestSeller } from "../../components/index";

export const Blog = () => {
  return (
    <>
      <>
        <div className="title-breadcrumbs">
          <div className="container">
            <div className="page-title-wrapper">
              <h1 className="page-title">
                <span className="base" data-ui-id="page-title-wrapper">
                  Blogs
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
                  <li className="item blog">
                    <strong>Blogs</strong>
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

          <div className="row">
            <div className="column col-lg-9 main srefdftrtyurtr">
              <input name="form_key" type="hidden" defaultValue="yDWD4CGlrqta0hiR" />

              <div
                id="authenticationPopup"
                data-bind="scope:'authenticationPopup', style: {display: 'none'}"
              >
                {/* ko template: getTemplate() */}
                {/* /ko */}
              </div>

              <div className="post-list-wrapper">
                <ol className="post-list">
                  <li className="post-holder post-holder-10">
                    <div className="post-content post-custom">
                      <div className="post-description clearfix">
                        <div className="post-ftimg-hld">
                          <a
                            href="/"
                            title="The Hair Hack I Never Knew"
                          >
                            <img
                              src="./images/media/magefan_blog/fashion-1.jpg"
                              alt="The Hair Hack I Never Knew"
                            />
                          </a>
                        </div>

                        <div className="post-info-blog">
                          <div className="post-header">
                            <div className="post-title-holder clearfix">
                              <h2 className="post-title">
                                <a
                                  className="post-item-link"
                                  href="/"
                                >
                                  The Hair Hack I Never Knew{" "}
                                </a>
                              </h2>
                              <div
                                className="addthis_toolbox addthis_default_style"
                                url="/"
                                title="The Hair Hack I Never Knew"
                                media="../media/magefan_blog/fashion-1.jpg"
                              >
                                <a className="addthis_button_facebook" href="/" aria-label="Share on Facebook" />

                                <a className="addthis_button_twitter" href="/" aria-label="Share on Twitter" />

                                <a className="addthis_button_email" href="/" aria-label="Share via Email" />

                                <a className="addthis_button_compact" href="/" aria-label="More share options" />
                              </div>
                            </div>

                            <div className="post-info">
                              <div className="item post-posed-date">
                                <i className="mf-blog-icon mfbi-calendar" />
                                <span className="label">Posted:</span>
                                <span className="value">December 04, 2019</span>
                              </div>
                              <div className="item post-categories">
                                <i className="mf-blog-icon mfbi-folder" />
                                <span className="label">Categories:</span>
                                <a
                                  title="Fashion"
                                  href="/"
                                >
                                  Fashion
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="post-text-hld clearfix">
                            <p>
                              Egestas mus a mus rhoncus adipiscing iaculis facilisis a
                              eu nunc varius a per parturient vestibulum suspendisse
                              aenean semper velit aliquam
                            </p>
                          </div>
                          <a
                            className="post-read-more"
                            href="/"
                            title="The Hair Hack I Never Knew"
                          >
                            Read more{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="post-footer"></div>
                  </li>

                  <li className="hidden"></li>
                </ol>
              </div>

              <div className="toolbar toolbar-blog-posts">
                <div className="pages">
                  <strong className="label pages-label" id="paging-label">
                    Page
                  </strong>
                  <ul className="items pages-items" aria-labelledby="paging-label">
                    <li className="item current">
                      <strong className="page">
                        <span className="label">You're currently reading page</span>
                        <span>1</span>
                      </strong>
                    </li>
                    <li className="item">
                      <a href="/" className="page">
                        <span className="label">Page</span>
                        <span>2</span>
                      </a>
                    </li>
                    <li className="item pages-item-next">
                      <a
                        className="action  next"
                        href="/"
                        title="Next"
                      >
                        <span className="label">Page</span>
                        <span>Next</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="sidebar col-lg-3 sidebar-main">
              <div className="banner-image">
                <a title="Banner Image" href="/">
                  <img className="mark-lazy lazyload w-100 h-100" style={{maxHeight: "100%"}} src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/banner/banner-sidebar.jpg" data-src="" alt="Banner"/>
                </a>
              </div>
              
              <BestSeller />

              <div className="sidebar sidebar-additional">
                <div
                  className="widget block blog-search"
                  data-bind="scope: 'blog-search'"
                >
                  <div className="block-content">
                    <form
                      className="form"
                      id="blog_search_mini_form"
                      action="http://magento2.magentech.com/themes/sm_time/pub/default/blog/search_/"
                      method="get"
                    >
                      <div className="field search">
                        <label className="label" htmlFor="blog_search">
                          <span>Search</span>
                        </label>
                        <div className="control">
                          <input
                            id="blog_search"
                            type="text"
                            name="q"
                            defaultValue=""
                            placeholder="Search posts here..."
                            className="input-text"
                            maxLength={128}
                            aria-haspopup="false"
                            aria-autocomplete="both"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="actions">
                        <button
                          type="submit"
                          onclick="return goBlogSearch(this);"
                          title="Search"
                          className="action search"
                        >
                          <span>Search</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="widget block block-recent-posts block-list-posts">
                  <div className="block-title">
                    <strong>Recent Posts</strong>
                  </div>
                  <div className="block-content">
                    <div className="item clearfix">
                      <div className="post-image">
                        <a
                          className="post-item-link"
                          title="The Hair Hack I Never Knew"
                          href="/"
                        >
                          <img
                            data-width-amp={300}
                            data-height-amp={200}
                            layout="responsive"
                            src="./images/media/blog/cache/300x200/magefan_blog/fashion-1.jpg"
                            alt="The Hair Hack I Never Knew"
                          />
                        </a>
                      </div>
                      <a
                        className="post-item-link"
                        title="The Hair Hack I Never Knew"
                        href="/"
                      >
                        The Hair Hack I Never Knew{" "}
                      </a>
                      <div className="post-item-date">
                        <span className="value">December 04, 2019</span>
                      </div>
                    </div>

                    <div className="item clearfix">
                      <div className="post-image">
                        <a
                          className="post-item-link"
                          title="Drying Out Your Skin During" href="/"
                        >
                          <img
                            data-width-amp={300}
                            data-height-amp={200}
                            layout="responsive"
                            src="./images/media/blog/cache/300x200/magefan_blog/fashion-2.jpg"
                            alt="Drying Out Your Skin During"
                          />
                        </a>
                      </div>
                      <a
                        className="post-item-link"
                        title="Drying Out Your Skin During" href="/"
                      >
                        Drying Out Your Skin During{" "}
                      </a>
                      <div className="post-item-date">
                        <span className="value">December 04, 2019</span>
                      </div>
                    </div>

                    <div className="item clearfix">
                      <div className="post-image">
                        <a
                          className="post-item-link"
                          title="Shop Everyone On Your List" href="/"
                        >
                          <img
                            data-width-amp={300}
                            data-height-amp={200}
                            layout="responsive"
                            src="./images/media/blog/cache/300x200/magefan_blog/fashion-3.jpg"
                            alt="Shop Everyone On Your List"
                          />
                        </a>
                      </div>
                      <a
                        className="post-item-link"
                        title="Shop Everyone On Your List" href="/"
                      >
                        Shop Everyone On Your List{" "}
                      </a>
                      <div className="post-item-date">
                        <span className="value">December 04, 2019</span>
                      </div>
                    </div>

                    <div className="item clearfix">
                      <div className="post-image">
                        <a
                          className="post-item-link"
                          title="The Shoe Will Your Fall Style" href="/"
                        >
                          <img
                            data-width-amp={300}
                            data-height-amp={200}
                            layout="responsive"
                            src="./images/media/blog/cache/300x200/magefan_blog/fashion-4.jpg"
                            alt="The Shoe Will Your Fall Style"
                          />
                        </a>
                      </div>
                      <a
                        className="post-item-link"
                        title="The Shoe Will Your Fall Style" href="/"
                      >
                        The Shoe Will Your Fall Style{" "}
                      </a>
                      <div className="post-item-date">
                        <span className="value">December 04, 2019</span>
                      </div>
                    </div>

                    <div className="item clearfix">
                      <div className="post-image">
                        <a
                          className="post-item-link"
                          title="Join millions of others" href="/"
                        >
                          <img
                            data-width-amp={300}
                            data-height-amp={200}
                            layout="responsive"
                            src="./images/media/blog/cache/300x200/magefan_blog/8.jpg"
                            alt="Join millions of others"
                          />
                        </a>
                      </div>
                      <a
                        className="post-item-link"
                        title="Join millions of others" href="/"
                      >
                        Join millions of others{" "}
                      </a>
                      <div className="post-item-date">
                        <span className="value">June 17, 2019</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="widget block block-archive"
                  data-bind="scope: 'blog-archive'"
                >
                  <div className="block-title">
                    <strong>Archive</strong>
                  </div>
                  <div className="block-content">
                    <div className="item">
                      <a
                        title="Archive December 2019"
                        className="archive-item-link" href="/"
                      >
                        December 2019{" "}
                      </a>
                    </div>
                    <div className="item">
                      <a
                        title="Archive June 2019"
                        className="archive-item-link" href="/"
                      >
                        June 2019{" "}
                      </a>
                    </div>
                    <div className="item">
                      <a
                        title="Archive May 2019"
                        className="archive-item-link" href="/"
                      >
                        May 2019{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </main>
      </>
    </>
  )
}