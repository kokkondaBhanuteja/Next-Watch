import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { HiFire } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { MdPlaylistAdd } from "react-icons/md";

import "./index.css";

const MenuBar = () => {
    return(
        <div className="menubar-container">
            <ul className="menu-items">
                <li className="menu-item">
                    <Link to = "/">
                    <button
                    type="button"
                    >
                        <AiFillHome size={27} color="#555" />
                        <span className="menu-item-text">Home</span>
                    </button>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to = "/trending">
                    <button
                    type="button"
                    >
                        <HiFire size={27} color="#555" />
                        <span className="menu-item-text">Trending</span>
                    </button>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to = "/gaming">
                    <button
                    type="button"
                    >
                        <SiYoutubegaming size={27} color="#555" />
                        <span className="menu-item-text">Gaming</span>
                    </button>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to = "/saved-videos">
                    <button
                    type="button"
                    >
                        <MdPlaylistAdd size={30} color="#555" />
                        <span className="menu-item-text">Saved Videos</span>
                    </button>
                    </Link>
                </li>
            </ul>
            <div className="contact-us">
                <p className="contact-us-title">Contact Us</p>
                <ul className="contact-us-links">
                    <li className="contact-us-link">
                        <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                        />
                    </li>
                    <li className="contact-us-link">
                        <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                        />
                    </li>
                    <li className="contact-us-link">
                        <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" 
                        alt="linkedin logo"
                        />
                    </li>
                </ul>
                <p className="contact-us-text">Enjoy! Now to see your channels and recommendations!</p>
            </div>
        </div>
    )
}
export default MenuBar; 