import NavBar from "../NavBar";
import MenuBar from "../MenuBar";
import "./index.css";
const NotFound = () => {
  return (
    <>
      <NavBar />
      <MenuBar />
      <div className="main-content">
        <div className="not-found-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
            alt="not-found"
            className="not-found-image"
          />
          <p className="not-found-title">Page Not Found</p>
          <p className="not-found-text">
            We are sorry, the page you requested could not be found.
          </p>
        </div>
      </div>
    </>
  );
};
export default NotFound;
