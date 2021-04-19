/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import 'bootstrap';
import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';


class Footer extends React.Component{
    render(){
        return (
          <div className="fotter-apple">
            <div className="container">
              <div className="notas-pie">
                <p>
                  1. Price includes a $30 AT&T, T-Mobile, Sprint, or Verizon
                  discount. Requires activation with carrier. Monthly pricing:
                  Available to qualified customers and requires 0% APR, 24-month
                  installment loan with Citizens One or Apple Card Monthly
                  Installments and iPhone activation with AT&T, Sprint,
                  T-Mobile, or Verizon for purchases in an Apple Store. Taxes
                  and shipping not included. Additional Apple Card Monthly
                  Installments and iPhone Payments terms apply.
                </p>
                <p>
                  2. Monthly pricing: Available to qualified customers and
                  requires 0% APR, 24-month installment loan with Citizens One
                  or Apple Card Monthly Installments and iPhone activation with
                  AT&T, Sprint, T-Mobile, or Verizon for purchases in an Apple
                  Store. Taxes and shipping not included. Additional Apple Card
                  Monthly Installments and iPhone Payments terms apply.
                </p>
                <p>
                  3. $4.99/month after free trial. One subscription per Family
                  Sharing group. Offer good for 3 months after eligible device
                  activation. Plan automatically renews until canceled.
                  Restrictions and other{" "}
                </p>
                <p>
                  Apple TV+ is $4.99/month after free trial. One subscription
                  per Family Sharing group. Offer good for 3 months after
                  eligible device activation. Plan automatically renews until
                  cancelled. Restrictions and other{" "}
                </p>
                <p>
                  To access and use all the features of Apple Card, you must add
                  Apple Card to Wallet on an iPhone or iPad with iOS 12.4 or
                  later or iPadOS. To manage Apple Card Monthly Installments,
                  you need an iPhone with iOS 13.2 or later or an iPad with
                  iPadOS 13.2 or later. Update to the latest version of iOS or
                  iPadOS by going to Settings, General, Software Update. Tap
                  Download and Install.
                </p>
                <p>Available for qualifying applicants in the United States.</p>
                <p>
                  Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
                  Branch.
                </p>
              </div>
              <hr />
              <div className="row links">
                <div className="col-md-2">
                  <div>
                    <br />
                    <h6>Shop and Learn</h6>
                    <a href="#">Mac </a>
                    <br />
                    <a href="#">iPad </a>
                    <br />
                    <a href="#">iPhone </a>
                    <br />
                    <a href="#">Watch </a>
                    <br />
                    <a href="#">TV </a>
                    <br />
                    <a href="#">Music </a>
                    <br />
                    <a href="#">Airpods </a>
                    <br />
                    <a href="#">HomePod </a>
                    <br />
                    <a href="#">iPod touch </a>
                    <br />
                    <a href="#">Accessories </a>
                    <br />
                    <a href="#">Gift Cards </a>
                  </div>
                </div>
                <div className="col-md-2">
                  <div>
                    <br />
                    <h6>Services</h6>
                    <a href="#">Apple Music</a>
                    <br />
                    <a href="#">Apple TV+</a>
                    <br />
                    <a href="#">Apple Fitness+</a>
                    <br />
                    <a href="#">Apple News+</a>
                    <br />
                    <a href="#">Apple Arcade</a>
                    <br />
                    <a href="#">iCloud</a>
                    <br />
                    <a href="#">Apple One</a>
                    <br />
                    <a href="#">Apple Books</a>
                    <br />
                    <a href="#">App Store</a>
                    <br />
                    <br />
                    <h6>Account</h6>
                    <a href="#">Manage Your Apple ID</a>
                    <br />
                    <a href="#">Apple Store Account</a>
                    <br />
                    <a href="#">iCloud.com</a>
                    <br />
                  </div>
                </div>
                <div className="col-md-2">
                  <div>
                    <br />
                    <h6>Apple Store</h6>
                    <a href="#">Find a Store</a>
                    <br />
                    <a href="#">Shop Online</a>
                    <br />
                    <a href="#">Genius Bar</a>
                    <br />
                    <a href="#">Today at Apple</a>
                    <br />
                    <a href="#">Apple Camp</a>
                    <br />
                    <a href="#">Apple Store App</a>
                    <br />
                    <a href="#">Refurbished and Clearance</a>
                    <br />
                    <a href="#">Financing</a>
                    <br />
                    <a href="#">Apple Trade In</a>
                    <br />
                    <a href="#">Order Status</a>
                    <br />
                    <a href="#">Shopping Help</a>
                  </div>
                </div>
                <div className="col-md-2">
                  <div>
                    <br />
                    <h6>For Bussines</h6>
                    <a href="#">Apple and Business</a>
                    <br />
                    <a href="#">Shop for Bussines</a>
                    <br />
                    <br />
                    <h6>For Education</h6>
                    <a href="#">Apple and Education</a>
                    <br />
                    <a href="#">Shop for K-12</a>
                    <br />
                    <a href="#">Shop for College</a>
                    <br />
                    <br />
                    <h6>For Healthcare</h6>
                    <a href="#">Apple in Healthcare</a>
                    <br />
                    <a href="#">Health on Apple Watch</a>
                    <br />
                    <a href="#">Health Records on iPhone</a>
                    <br />
                    <br />
                    <h6>For Government</h6>
                    <a href="#">Shop for Government</a>
                    <br />
                    <a href="#">Shop for Veterans and Military</a>
                  </div>
                </div>
                <div className="col-md-2">
                  <div>
                    <br />
                    <h6>Apple Values</h6>
                    <a href="#">Accessibility</a>
                    <br />
                    <a href="#">Education</a>
                    <br />
                    <a href="#">Environment</a>
                    <br />
                    <a href="#">Inclusion and Diversity</a>
                    <br />
                    <a href="#">Privacy</a>
                    <br />
                    <a href="#">Racial Equity and Justice</a>
                    <br />
                    <a href="#">Supplier Responsibility</a>
                    <br />
                    <br />
                    <h6>About Apple</h6>
                    <a href="#">Newsroom</a>
                    <br />
                    <a href="#">Apple Leadership</a>
                    <br />
                    <a href="#">Job Opportunities</a>
                    <br />
                    <a href="#">Investors</a>
                    <br />
                    <a href="#">Ethics & Compliance</a>
                    <br />
                    <a href="#">Events</a>
                    <br />
                    <a href="#">Contact Apple</a>
                  </div>
                </div>
              </div>
              <br />
              <p>
                More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
                <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
              </p>
              <hr />
              <div className="row links">
                <div className="col-md-4">
                  <p>
                    Copyright{" "}
                    <FontAwesomeIcon icon={faCopyright} /> 2021
                    Apple Inc. All rights reserved.
                  </p>
                </div>
                <div className="col-md-5">
                  <p>
                    <a href="#">Privacy Policy</a> |{" "}
                    <a href="#">Terms of Use</a> |{" "}
                    <a href="#">Sales and Refunds</a> | <a href="#">Legal</a> |{" "}
                    <a href="#">Site Map</a>
                  </p>
                </div>
                <div className="col-md-1">
                  <p />
                </div>
                <div className="col-md-2">
                  <a href="#">United States</a>
                </div>
              </div>
              <div />
            </div>
          </div>
        );
    }
};

export default Footer;