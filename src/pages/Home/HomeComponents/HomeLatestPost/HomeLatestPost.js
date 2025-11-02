import { useEffect, useState } from "react";
import Slider from "react-slick";

export const HomeLatestPost = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  
  useEffect(() => {
    async function fetchLatestPosts() {
      const URL = "http://localhost:8000/blogPosts";
      const response = await fetch(URL);
      const data = await response.json();
      setLatestPosts(data);
    }
    fetchLatestPosts();
  }, [])

  const latestSliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1440,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 0,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="block-content lp-slider">
      <Slider {...latestSliderSettings}>
        {latestPosts.map((latestPost, index) => (
          <div className="item" key={index}>
            <div className="image-post">
              <a href={latestPost.link} title={latestPost.title}>
                <img
                  src={latestPost.img}
                  alt={latestPost.title}
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
              <div className="post-date">
                <span className="value">
                  <span className="date second-font">{latestPost.date}</span>
                  <span className="month">{latestPost.month}</span>
                </span>
              </div>
            </div>
            <div className="info-post">
              <div className="post-title">
                <a className="post-item-link second-font" href={latestPost.link}>
                  {latestPost.title}
                </a>
              </div>
              <div className="post-short-description">
                <p>{latestPost.desc}</p>
              </div>
              <div className="post-read-more second-font">
                <a href={latestPost.link} title={latestPost.title}>
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}