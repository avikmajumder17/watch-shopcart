import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../../components";


export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsCategories, setBlogsCategories] = useState([]);
  const [blogsTags, setBlogsTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 4;


  useEffect(() => {
    const fetchBlogs = async () => {
      const URL = "http://localhost:8000/blogPosts";

      const response = await fetch(URL);

      const data = await response.json();

      setBlogs(data);
    }

    fetchBlogs();
  }, []);


  useEffect(() => {
    const fetchBlogsCategoriesTags = async () => {
      const URL = "http://localhost:8000/blogAttributes";

      const response = await fetch(URL);
      const data = await response.json();

      setBlogsCategories(data.blogCategory);
      setBlogsTags(data.tags);
    }

    fetchBlogsCategoriesTags();
  }, []);


  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  let pages = [];

  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }
  

  const handlePrev = () => {
    (currentPage > 1) && setCurrentPage(currentPage - 1);
  };

  const handlePageSwitch = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const handleNext = () => {
    (currentPage < totalPages) && setCurrentPage(currentPage + 1);
  };


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
          <div className="row">
            <div className="column col-lg-9 main srefdftrtyurtr">
              <div className="post-list-wrapper">
                <ol className="post-list">
                  {currentBlogs.map(blog => (
                    <li className="post-holder post-holder-10" key={blog.id}>
                      <div className="post-content post-custom">
                        <div className="post-description clearfix">
                          <div className="post-ftimg-hld">
                            <Link to={`/blog/${blog.slug}`}>
                              <img
                                src={blog.img}
                                alt={blog.title}
                              />
                            </Link>
                          </div>

                          <div className="post-info-blog">
                            <div className="post-header">
                              <div className="post-title-holder clearfix">
                                <h2 className="post-title">
                                  <Link
                                    className="post-item-link"
                                    to={`/blog/${blog.slug}`}
                                  >
                                    {blog.title}
                                  </Link>
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
                                  <i className="mf-blog-icon mfbi-calendar mr-1" />
                                  <span className="label">Posted:</span>
                                  <span className="value">{blog.month} {blog.date}</span>
                                </div>
                              </div>
                            </div>

                            <div className="post-text-hld clearfix">
                              <p>{`${blog?.desc?.substring(0, 200)}...`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-footer"></div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="qawcweeqweeee d-flex align-items-center justify-content-center">
                <button onClick={handlePrev} className="btn dweqrwrewr btn-main">Prev</button>

                <div className="doejwower">
                  {pages.map(page => (
                    <button onClick={() => handlePageSwitch(page)} className={`btn ${(currentPage === page) ? "btn-main-active" : "btn-main"} mx-3`}>{page}</button>
                  ))}
                </div>

                <button onClick={handleNext} className="btn dweqrwrewr btn-main">Next</button>
              </div>
            </div>

            <div className="sidebar col-lg-3 sidebar-main">
              <div className="sticky-top">
                <div className="banner-image">
                  <Link to="/watches">
                    <img className="mark-lazy lazyload w-100 h-100" style={{ maxHeight: "100%" }} src="http://magento2.magentech.com/themes/sm_time/pub/media/wysiwyg/banner/banner-sidebar.jpg" data-src="" alt="Banner" />
                  </Link>
                </div>

                <div className="sidebar sidebar-additional">
                  <div className="widget block block-recent-posts block-list-posts">
                    <div className="block-title">
                      <strong>Recent Posts</strong>
                    </div>
                    <div className="block-content">
                      {blogs.slice(0, 3).map(rcntBlog => (
                        <div className="item clearfix">
                          <div className="post-image">
                            <Link to={`/blog/${rcntBlog.slug}`}>
                              <img
                                data-width-amp={300}
                                data-height-amp={200}
                                layout="responsive"
                                src={rcntBlog.img}
                                alt={rcntBlog.title}
                              />
                            </Link>
                          </div>
                          <Link to={`/blog/${rcntBlog.slug}`}>
                            {rcntBlog.title}
                          </Link>
                          <div className="post-item-date">
                            <span className="value">{rcntBlog.month} {rcntBlog.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="widget block block-recent-posts block-list-posts">
                    <div className="block-title">
                      <strong>Categories</strong>
                    </div>

                    <div className="block-content">
                      <ul className="ewsderterewr d-flex flex-wrap mb-0 ps-0">
                        {blogsCategories.map(blogsCategory => (
                          <li key={blogsCategory}>
                            <Link to="">{blogsCategory}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="widget block block-recent-posts block-list-posts">
                    <div className="block-title">
                      <strong>Tags</strong>
                    </div>
                    
                    <div className="block-content">
                      <ul className="ewsderterewr d-flex flex-wrap mb-0 ps-0">
                        {blogsTags.map(blogsTag => (
                          <li key={blogsTag}>
                            <Link to="">{blogsTag}</Link>
                          </li>
                        ))}
                      </ul>
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