import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm , setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="d-flex align-items-center position-relative" style={{ minWidth: "250px" }}>
      <input
        type="text"
        className="form-control  border-black"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ paddingRight: "30px" }}
      />
      {searchTerm && (
        <i
          className="bi bi-x-circle-fill position-absolute end-0 me-2"
          style={{ cursor: "pointer", fontSize: "1.2rem", color: "#6c757d" }}
          onClick={clearSearch}
          title="Clear search"
        ></i>
      )}
    </div>
  );
};

export default Search;
