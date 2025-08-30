import "./index.css";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ searchInput, handleSearchInput, getVideos }) => {
  const onSearch = () => {
    getVideos();
  };

  const onChangeSearchInput = (event) => {
    handleSearchInput(event);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        value={searchInput}
        onChange={onChangeSearchInput}
        placeholder="Search"
      />
      <button className="search-icon" onClick={onSearch}>
        <IoIosSearch size={20} />
      </button>
    </div>
  );
};
export default SearchBar;