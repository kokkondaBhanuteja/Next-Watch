import PlayVideo from "../PlayVideo";
import MenuBar from "../MenuBar";
import NavBar from "../NavBar";
import "./index.css";

const Video = (props) => {
  return (
    <>
      <NavBar />
      <MenuBar />
      <main className="main-content">
        <PlayVideo {...props}/>
      </main>
      
    </>
  );
};
export default Video;
