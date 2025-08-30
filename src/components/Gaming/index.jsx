import GamingVideos from "../GamingVideos";
import MenuBar from "../MenuBar";
import NavBar from "../NavBar";
import { SiYoutubegaming } from 'react-icons/si'
import "./index.css";

const Gaming = () => {
  return (
    <>
      <NavBar />
      <MenuBar />
      <main className="main-content">
        <div className="gaming-banner">
        <SiYoutubegaming size={37} color="red" />
        <span className="gaming-banner-title">Gaming</span>
        </div>
        <GamingVideos />
      </main>
      
    </>
  );
};
export default Gaming;
