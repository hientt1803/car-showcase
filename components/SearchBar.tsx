"use client";

import Image from "@/node_modules/next/image";
import { useRouter } from "@/node_modules/next/navigation";
import React, { useState } from "react";
import SearchManuFacture from "./SearchManuFacture";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <>
      <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}></button>
      <Image
        src="/magnifying-glass.svg"
        alt="maginifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </>
  );
};

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") {
      return alert("please fill in the search bar");
    }

    updateSearchParams(
      model.toLocaleLowerCase(),
      manufacturer.toLocaleLowerCase()
    );
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManuFacture
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hideen" />
      </div>
    </form>
  );
};

export default SearchBar;
