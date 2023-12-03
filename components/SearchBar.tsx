"use client";
import React, { useState } from "react";
import SearchManuFacture from "./SearchManuFacture";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManuFacture
          manufacturer={manufacturer}
          setManufacturer={() => {}}
        />
      </div>
    </form>
  );
};

export default SearchBar;
