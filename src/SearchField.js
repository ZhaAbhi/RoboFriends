import React from "react";

const SearchField = ({ onSearchChange }) => {
  return (
    <div className="pa3">
      <input
        onChange={onSearchChange}
        className="pa3 b--green bg-lightgreen"
        placeholder="Search For Robots"
      />
    </div>
  );
};
export default SearchField;
