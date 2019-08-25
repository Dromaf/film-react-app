import React from "react";
import SearchBar from "material-ui-search-bar";

const Search = () => {
  return (
    <SearchBar
      onChange={() => console.log("onChange")}
      onRequestSearch={() => console.log("onRequestSearch")}
      style={{
        margin: "15px auto",
        maxWidth: 1700
      }}
    />
  );
};

export default Search;
