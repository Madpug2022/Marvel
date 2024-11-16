import "./SearchBar.scss";
import { IoSearchSharp } from "react-icons/io5";

function SearchBar() {
  return (
    <nav className="search-bar">
      <div className="search-bar__container">
        <form action="" className="search-bar__container__form">
          <button type="submit">
            <IoSearchSharp className="icon" />
          </button>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="SEARCH A CHARACTER ..."
          />
        </form>
      </div>
      <div className="search-bar__results">
        <p>
          <span>50 </span>
          <span>RESULTS</span>
        </p>
      </div>
    </nav>
  );
}

export default SearchBar;
