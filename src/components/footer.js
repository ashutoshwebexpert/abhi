import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FooterApp() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div >
            <div className="row footer_inside">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div >
                  <h5>Need Help</h5>
                  <ul>
                    <li>
                      <a href="/contact-us">Contact Us </a>
                    </li>
                    <li>
                      <a href="/track-order">Track Order</a>
                    </li>
                    <li>
                      <a href="/faqs">FAQs </a>
                    </li>
                    <li>
                      <a href="/sitemap">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div >
                  <h5>Company </h5>
                  <ul>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/terms-and-conditions">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/shipping-policy">Shipping Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div >
                  <h5>Location </h5>
                  <p>Lucknow</p>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
          <div className="col-lg-6">
           <p>&#169; 2022 Company, Inc, Privacy, Terms</p>
          </div>
          
          <div className="col-lg-6 footer_icon">
          <FontAwesomeIcon icon="fa-user" />
          <FontAwesomeIcon icon="fa-user" />
          <FontAwesomeIcon icon="fa-user" />
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterApp;
