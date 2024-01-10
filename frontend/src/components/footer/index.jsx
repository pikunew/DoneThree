import React from "react";
import { Link } from "react-router-dom";

Footer.propTypes = {};

function Footer() {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-2 col-md-4">
              <div className="footer-logo">
                <img
                  src={require("../../assets/images/logo.png")}
                  alt="images"
                />
              </div>
            </div>
            <div className="col-lg-10 col-md-8">
              <div className="wd-social d-flex aln-center">
                <span>Follow Us:</span>
                <ul className="list-social d-flex aln-center">
                  <li>
                    <Link to="#">
                      <i className="icon-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-linkedin2"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-pinterest"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-instagram1"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="inner-footer">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-cl-1">
                <div className="icon-infor d-flex aln-center">
                  <div className="icon">
                    <span className="icon-call-calling">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                    </span>
                  </div>
                  <div className="content">
                    <p>Need help? 24/7</p>
                    <h6>
                      <Link to="tel:0123456678">0124-4007444</Link>
                    </h6>
                  </div>
                </div>
                <p>A Helpline for women!</p>
                <div className="ft-icon">
                  {" "}
                  <i className="icon-map-pin"></i> Lajpat Nagar 3, New
                  Delhi-110024 , India
                </div>
                <form action="#" id="subscribe-form">
                  <input
                    type="email"
                    placeholder="Your email address"
                    required=""
                    id="subscribe-email"
                  />
                  <button
                    className="tf-button"
                    type="submit"
                    id="subscribe-button"
                  >
                    <i className="icon-paper-plane-o"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="bt-left">
                <div className="copyright">
                  ©2023 HRHelpdesk Trust. All Rights Reserved.
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul className="menu-bottom d-flex aln-center">
                <li>
                  <Link to="term-of-use.html">Terms Of Services</Link>{" "}
                </li>
                <li>
                  <Link to="pricing.html">Privacy Policy</Link>{" "}
                </li>
                <li>
                  <Link to="contact-us.html">Cookie Policy</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
