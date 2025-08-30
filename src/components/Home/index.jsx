import { useState } from "react";
import Banner from "../Banner";
import HomeVideos from "../HomeVideos";
import MenuBar from "../MenuBar";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import "./index.css";

const Home = () => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const handleCloseBanner = () => {
    setBannerVisible(false);
  };
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  const getVideos = () => { };

  return (
    <>
      <NavBar />
      <MenuBar />
     
      <main className="main-content">
      <Banner visible={bannerVisible} handleCloseBanner={handleCloseBanner} />
      <section className={`${!bannerVisible ? 'no-banner' : ''}`}>
        <SearchBar
            searchInput={searchInput}
            handleSearchInput={handleSearchInput}
            getVideos={getVideos}
          />
          <HomeVideos searchInput={searchInput} />
        </section>
      </main>
      
    </>
  );
};
export default Home;
