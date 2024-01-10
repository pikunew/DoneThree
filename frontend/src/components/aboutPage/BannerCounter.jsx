import React, { useState } from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";
import img from "../../assets/images/partners/thum-1.png";
import "./style.scss";

function BannerCounter() {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };

  return (
    <section className="wd-banner-counter">
      <div className="tf-container st3">
        <div className="row">
          <div className="col-lg-12">
            <div className="group-title-counter stc">
              <h3>Few Datas About Us</h3>
              <p>About 8k Women are being helped</p>
            </div>
            <div className="group-counter wow fadeInUp">
              <div className="row align-item-center">
                <div className="col-lg-3 col-md-6">
                  <div className="wd-counter widget-counter">
                    <div className="inner wrap-counter">
                      <h2>
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="counter-number"
                                end={25}
                                suffix="M+"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h2>
                    </div>
                    <p className="description">Point One</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="wd-counter widget-counter">
                    <div className="inner wrap-counter">
                      <h2>
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="counter-number"
                                end={177}
                                suffix="K+"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h2>
                    </div>
                    <p className="description">Point Two</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="wd-counter widget-counter">
                    <div className="inner wrap-counter">
                      <h2>
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="counter-number"
                                end={298}
                                suffix="K+"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h2>
                    </div>
                    <p className="description">Point Three</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="wd-counter widget-counter br-none">
                    <div className="inner wrap-counter">
                      <h2>
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="counter-number"
                                end={5}
                                suffix="M+"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h2>
                    </div>
                    <p className="description">Point Four</p>
                  </div>
                </div>
              </div>
              <img className="thumb ani4" src={img} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerCounter;
