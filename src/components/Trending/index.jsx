import TrendingVideos from "../TrendingVideos";
import MenuBar from "../MenuBar";
import NavBar from "../NavBar";
import { HiFire } from "react-icons/hi";
import "./index.css";

const Trending = () => {
  return (
    <>
      <NavBar />
      <MenuBar />
      <main className="main-content">
        <div className="trending-banner">
          <HiFire size={37} color="red" />
          <span className="trending-banner-title">Trending</span>
        </div>
        <TrendingVideos />
      </main>
      
    </>
  );
};
export default Trending;
