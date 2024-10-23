import search from "../assets/search.svg";
import searchDark from "../assets/searchDark.svg";
import useStore from "../store/store";
import { useState } from "react";

const SearchAndFilter = () => {
  const { darkMode } = useStore();
  const [selected, setSelected] = useState();

  const handleSelection = (event) => {
    setSelected(event.target.value);
  }
  return (
    <div
      id="searchFilter"
      className="flex flex-col gap-y-9 lg:flex-row lg:items-center lg:justify-between text-lightText dark:text-darkText"
    >
      <div
        id="search"
        className="flex flex-row p-3 px-6 bg-lightElement dark:bg-darkElement rounded-md gap-4 w-[300px] md:w-[500px]"
      >
        <img src={darkMode ? searchDark : search} alt="search icon" />
        <input
          type="text"
          className="bg-lightElement dark:bg-darkElement outline-none"
          placeholder="Search for a country..."
        />
      </div>

      <div id="filter" className="">
        <div className="w-64">
          <select
            id="region"
            name="region"
            className=" w-full p-3 bg-lightElement dark:bg-darkElement  rounded-md focus:outline-none"
            value={selected}
            onChange={() => handleSelection()}
          >
            <option disabled selected hidden>
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
