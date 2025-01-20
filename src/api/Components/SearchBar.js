import React from "react";

export default function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <form>
      <input
        className="searcher"
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </form>
  );
}
