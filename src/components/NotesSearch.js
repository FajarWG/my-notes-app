import React from "react";

const NotesSearch = ({ onSearch, search }) => {
  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search Note"
        className="search-input"
        value={search}
      />
    </div>
  );
};

export default NotesSearch;
