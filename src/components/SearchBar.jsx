import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default SearchBar;
