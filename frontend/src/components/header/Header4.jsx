import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

Header4.propTypes = {};

function Header4({ handleMobile }) {
  // const [ setActiveIndex] = useState(null);
  // const handleDropdown = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <header id="header" className="header header-default">
      <div className="tf-container ct2">
        <div className="row">
          <div className="col-md-12">
            <div className="sticky-area-wrap">
              <div className="header-ct-left">
                <div id="logo" className="logo">
                  <Link to="/">
                    <img
                      className="site-logo"
                      id="trans-logo"
                      src={logo}
                      alt="Women Helpline"
                    />
                  </Link>
                </div>
                <div className="categories">
                <Link to="#">
                    <span className="icon-grid"></span>Issues
                  </Link>
                  <div className="sub-categorie">
                    <ul className="pop-up">
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-1"></span>Crime
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Major Crimes</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Rape</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Sexual Harassment</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Dowry Harassment</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Suicidal Tendicies</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Stalking</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Major Crimes</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Cyberbullying</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Bullying</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Death Threat</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Blackmailing</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-8"></span>Business and
                          Career
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Business and Career</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Career counselling</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Workplace issues</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Maternity Related</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">
                                  Salary, Wage, Benefits, Leave
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <ul>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-2"></span>Family
                          related
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Family related</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Relationship</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">
                                  Cheating or Adultary
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <ul>
                              <li>
                                <Link to="/#"></Link>
                              </li>

                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="#"></span>
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <ul>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <ul>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="#"></span>
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <ul>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <ul>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header-ct-center">
                <div className="nav-wrap">
                <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li>
                        <Link to="/">Home </Link>
                      </li>
                      <li>
                        <Link to="/search">Helpline Numbers </Link>
                      </li>

                      {/* about */}
                      <li>
                        <Link to="/aboutus">About Us</Link>
                      </li>

                      
                      <li>
                        <Link to="/contactus">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-ct-right">
                <div className="header-customize-item help">
                  <Link to="/termsofuse">
                    <span className="icon-help-circle"></span>
                  </Link>
                </div>
                
                
                
              </div>
              <div className="nav-filter" onClick={handleMobile}>
                <div className="nav-mobile">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header4;
