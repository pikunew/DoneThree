import { useEffect,useState } from "react";
import Category from "../components/category";
import dataCate from "../assets/fakeData/dataCategory";
import Header from "../components/header";
import Footer from "../components/footer";
import Banner08 from "../components/banner/Banner08";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import logo from "../assets/images/logo.png";




function Home_v8(props) {
  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });
  const [isShowMobile, setShowMobile] = useState(false);

  const handleToggle = (key) => {
    if (toggle.key === key) {
      setToggle({
        status: false,
      });
    } else {
      setToggle({
        status: true,
        key,
      });
    }
  };

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);

 

  return (
    <>
    
      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <Link to="/">
                <img className="site-logo" src={logo} alt="Women Helpline" />
              </Link>
            </div>
            <Link className="title-button-group" onClick={handleMobile}>
              <i className="icon-close"></i>
            </Link>
          </div>

          <Tabs className="tf-tab">
            <TabList className="menu-tab">
              <Tab className="user-tag">Menu</Tab>
              <Tab className="user-tag">Categories</Tab>
            </TabList>

            <div className="content-tab">
              <TabPanel className="header-ct-center menu-moblie animation-tab">
                <div className="nav-wrap">
                  <nav className="main-nav mobile">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="">
                        <Link
                          to="/"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("home");
                          }}
                        >
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/search"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("job");
                          }}
                        >
                          Helpline Numbers
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/aboutus"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog_v2"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("candidate");
                          }}
                        >
                          Blog
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/contactus"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("pages");
                          }}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </TabPanel>

              <TabPanel className="categories animation-tab">
                <div className="sub-categorie-mobile">
                  <ul className="pop-up">
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">Crime</Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">Business and Career</Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">Family related</Link>
                    </li>
                  </ul>
                </div>
              </TabPanel>
            </div>
          </Tabs>

          <div className="mobile-footer">
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
                  <Link to="tel:01244007444">0124-4007444</Link>
                </h6>
              </div>
            </div>
            <div className="wd-social d-flex aln-center">
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
      <Header clname="act1" handleMobile={handleMobile} />
      <Banner08 />

      <Category data={dataCate} className="job-category-section" />

      <Footer />

      {/* <Gotop /> */}
    </>
  );
}

export default Home_v8;
