import React from 'react';
import bannerslider1 from "../images/slider/home-slider/banner_slider1.jpg";
import bannerslider2 from "../images/slider/home-slider/banner_slider2.jpg";
import bannerslider3 from "../images/slider/home-slider/banner_slider3.jpg";
import jeans from "../images/category/mens/jeans.jpg";
import lower from "../images/category/mens/lower.jpg";
import shorts from "../images/category/mens/shorts.jpg";
import trousers from "../images/category/mens/trousers.jpg";
import tshirts from "../images/category/mens/tshirts.jpg";
// import customizedBanner from "../images/customized/customized-banner.jpg";
import Carousel from "react-bootstrap/Carousel";

function HomeApp() {
  return (
    <div className="home">
      <section className="container-fluid">
        <div className="row slider_home">
          <Carousel>
            <Carousel.Item>
            <div className="centered_parent">
              <img
                className="slider_css w-100"
                src={bannerslider1}
                alt="First slide"
              />
               
              <div className="centered_slider">
               Dream T-Shirts
              </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="centered_parent">
              <img
                className="slider_css w-100"
                src={bannerslider2}
                alt="First slide"
              />
               
              <div className="centered_slider">
               Dream T-Shirts
              </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="centered_parent">
              <img
                className="slider_css w-100"
                src={bannerslider3}
                alt="First slide"
              />
               
              <div className="centered_slider">
               Dream T-Shirts
              </div>
            </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* <section className="hero-banner space-ptb">
        <div className="container">
          <div className="hero-banner-content  mx-auto">
            <h2>CATEGORY</h2>
            <div className="col-md-12 text-center mt-3 mb-4"><button type="button" className="btn btn-custom">Explore</button></div>
            <div className="row recent_category">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                <img className="img-shadow" src={jeans} alt="Third slide" />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                <img className="img-shadow" src={lower} alt="Third slide" />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                <img className="img-shadow" src={shorts} alt="Third slide" />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                <img className="img-shadow" src={trousers} alt="Third slide" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="hero-banner space-ptb">
        <div className="container">
          <div className="hero-banner-content  mx-auto">
            <h2>CATEGORY</h2>
            <div className="col-md-12 text-center mt-3 mb-4"><button type="button" className="btn btn-custom">Explore</button></div>

            <div className="row category">
              <div className="row col-lg-8">
                <div className="col-lg-6">
                  <div className="category_container col-lg-12 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                    <img
                      className="category_img img-shadow"
                      src={jeans}
                      alt="Third slide"
                    />
                    <div className="bottom_left">Jeans</div>
                  </div>

                  <div className=" category_container col-lg-12 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                    <img
                      className="category_img img-shadow"
                      src={shorts}
                      alt="Third slide"
                    />
                    <div className="bottom_left">Shorts</div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="category_container col-lg-12 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                    <img
                      className="category_img img-shadow"
                      src={trousers}
                      alt="Third slide"
                    />
                    <div className="bottom_left">Trousers</div>
                  </div>
                  <div className="category_container col-lg-12 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                    <img
                      className="category_img img-shadow"
                      src={lower}
                      alt="Third slide"
                    />
                    <div className="bottom_left">Lower</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="category_container col-lg-12 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                  <img
                    className="large_category_img img-shadow"
                    src={tshirts}
                    alt="Third slide"
                  />
                  <div className="bottom_left">T-Shirts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div>
              <h2>CUSTOMIZE T-SHIRTS</h2>
            </div>
            <div className="centered_parent">
            <img className="customize_size" src={tshirts} alt="Third slide" />
            <div className="centered">
              Customize your dream
              <br />
              T-shirts starting at 399
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HomeApp;
