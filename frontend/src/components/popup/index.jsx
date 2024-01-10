import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/review/bg-popup.jpg";

function PopUpForm() {
  const handleClosePopup = () => {
    const getPopup = document.querySelector(".wd-popup-form");
    getPopup.classList.remove("modal-menu--open");
  };

  return (
    <div className="wd-popup-form">
      <div className="modal-menu__backdrop" onClick={handleClosePopup} />
      <div className="content">
        <div className="content-left">
          <div className="thumb">
            <img src={img} alt="Women Helpline" />
          </div>
        </div>
        <div className="content-right">
          <Link className="title-button-group" onClick={handleClosePopup}>
            <i className="icon-close" />
          </Link>
          <h6>Welcome to Women Helpline</h6>
          <p>
            The website is under beta testing.We will go live soon.
          </p>
          
            <div className="group-radio">
              <input type="radio" />
              <label>Prevent this Pop-up</label>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PopUpForm;
