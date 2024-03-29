import React from "react";
import { Link } from "react-router-dom";
import SelectLocation from "../dropdown";

Banner08.propTypes = {};

function Banner08() {
  return (
    <section className="tf-slider sl6 parallax">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content wow fadeInUp">
              <div className="heading text-center">
                <h2 className="text-white">Search for Helpline Numbers</h2>
                <h4>Website is Under Beta Testing</h4>
                <p className="text-pink-900">
                  Write appropiate helpline and choose your location
                </p>
              </div>
              <div className="form-sl">
                <form action="/Search">
                  <div className="row-group-search home1 st">
                    <div className="form-group-1">
                      <span className="icon-search search-job"></span>
                      <input
                        type="text"
                        className="input-filter-search"
                        placeholder="Sexual Haresment, key words or issues"
                      />
                    </div>
                    <div className="form-group-2">
                      <span className="icon-map-pin"></span>
                      <SelectLocation />
                    </div>
                    <div className="form-group-4">
                      <button type="submit" className="btn btn-find">
                        Search Helpline
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <ul className="list-category text-black">
                <li>
                  <Link to="#">Sexual Harassment</Link>
                </li>
                <li className="current">
                  <Link to="#">Blackmailing</Link>
                </li>
                <li>
                  <Link to="#">Workplace issues</Link>
                </li>
                <li>
                  <Link to="#">Dowry Harassment</Link>
                </li>
                <li>
                  <Link to="#">Cheating or Adultary</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
}
export default Banner08;
