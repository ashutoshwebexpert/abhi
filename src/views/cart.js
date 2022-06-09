import React from 'react';
import "../css/productDetails.css";
import bannerslider1 from "../images/slider/home-slider/banner_slider1.jpg";
import bannerslider2 from "../images/slider/home-slider/banner_slider2.jpg";
import bannerslider3 from "../images/slider/home-slider/banner_slider3.jpg";
import jeans from "../images/category/mens/jeans.jpg";
import lower from "../images/category/mens/lower.jpg";
import shorts from "../images/category/mens/shorts.jpg";
import trousers from "../images/category/mens/trousers.jpg";
import tshirts from "../images/category/mens/tshirts.jpg";
import customizedBanner from "../images/customized/customized-banner.jpg";
import Carousel from "react-bootstrap/Carousel";


function ProductDetails() {
  return (
    <div className="productDetails">
   

   

      <section className="productDetails_sec1 hero-banner space-ptb">
        <div className="container">
        <h3>[Brand]/ [Product Name]</h3>
          <div className="hero-banner-content product_dtl  mx-auto background_all">
            
            <div className="row category ">
              <div className="col-lg-6">
                <div className="row category_container col-lg-12 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                    <div className="col-lg-9">
                        <img
                            className="large_category_img"
                            src={tshirts}
                            alt="Third slide"
                        />
                    </div>    
                  <div className="col-lg-3">
                  <p><img
                            className="product_details_img_slider"
                            src={tshirts}
                            alt="Third slide"
                        /></p>
                    <p><img
                            className="product_details_img_slider"
                            src={tshirts}
                            alt="Third slide"
                        /></p>
                    <p><img
                            className="product_details_img_slider"
                            src={tshirts}
                            alt="Third slide"
                        /></p>
                    <p><img
                            className="product_details_img_slider"
                            src={tshirts}
                            alt="Third slide"
                        /></p>
                      </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h2>[Product Name]</h2>
                <p>4.5 ***** | 368 Reviews | 85 Solds</p>
                <p>Price - 299</p>
                <div className="row">
                    <div className="col-lg-3">
                        <p>Size</p>
                        <select aria-label="Default select example">
                            <option value="1" Default>S</option>
                            <option value="2">M</option>
                            <option value="3">L</option>
                            <option value="4">XL</option>
                            <option value="5">XLL</option>
                        </select>
                    </div>
                    <div className="col-lg">
                        <p>Quantity</p>
                        <select aria-label="Default select example">
                            <option value="1" Default>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p>Check Delivery</p>
                    <p><input type="text" name="check_delivery" placeholder="Enter Pincode"/><button type="submit" name="check_delivery">Check Delivery</button></p>
                </div>
                <div>
                <button type="submit" name="add_to_cart">Add to cart</button><button type="submit" name="checkout">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="productDetails_sec2">
        <div className="container">
          <div className="hero-banner-content product_dtl  mx-auto background_all">
            
            <div className="row category ">
               <div className="col-lg-6">
                <h2>Product Details</h2>
                <div className="row col-lg-12">
                    <div className="col-lg-3">
                        <p>Category</p>
                    </div>
                    <div className="col-lg-9">
                        Category A
                    </div>
                </div>
                <div className="row col-lg-12">
                    <div className="col-lg-3">
                        <p>Brand</p>
                    </div>
                    <div className="col-lg-9">
                        Bazaar
                    </div>
                </div>
                <div className="row col-lg-12">
                    <div className="col-lg-3">
                        <p>Origin</p>
                    </div>
                    <div className="col-lg-9">
                        India
                    </div>
                </div>
                <div className="row col-lg-12">
                    <div className="col-lg-3">
                        <p>In Stock</p>
                    </div>
                    <div className="col-lg-9">
                        100
                    </div>
                </div>
                <div className="row col-lg-12">
                    <div className="col-lg-3">
                        <p>Description</p>
                    </div>
                    <div className="col-lg-9">
                        The stuff of this product is very good.
                    </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-banner space-ptb">
        <div className="container">
          <div className="hero-banner-content  mx-auto">
            <h2>More Product</h2>
            <div className="row recent_category">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                <img className="" src={jeans} alt="Third slide" />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                <img className="" src={lower} alt="Third slide" />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                <img className="" src={shorts} alt="Third slide" />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mt-3 mb-3">
                <img className="" src={trousers} alt="Third slide" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ProductDetails;
