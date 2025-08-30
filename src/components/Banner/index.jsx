import { IoMdClose } from "react-icons/io";
import "./index.css";

const Banner = ({ visible, handleCloseBanner }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="banner-container">
      <div className="banner-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="banner-img"
          className="banner-img"
        />
        <button
          type="button"
          className="banner-close-btn"
          onClick={handleCloseBanner}
          data-testid="close"
        >
          <IoMdClose size={25} />
        </button>
      </div>
      <div className="banner-content">
        <p className="banner-text">
          Buy Nxt Watch Premium prepaid plans with UPI
        </p>
      </div>
      <div className="banner-footer">
        <button type="button" className="banner-btn">
          Get it now
        </button>
      </div>
    </div>
  );
};

export default Banner;