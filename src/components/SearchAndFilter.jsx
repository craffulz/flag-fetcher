import search from "../assets/search.svg";
import searchDark from "../assets/searchDark.svg";
import useStore from "../store/store";

const SearchAndFilter = () => {
  const {
    darkMode,
    setCountries,
    countries,
    countriesFiltered,
    setCountriesFiltered,
  } = useStore();

  const handleSelection = (event) => {
    console.log("aqui tambn?");
    const selectedValue = event.target.value;
    selectedValue
      ? setCountries(`region/${selectedValue}`)
      : setCountries("all");
    setCountriesFiltered(countries);
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value.toUpperCase();
    console.log(searchValue);
    if (searchValue === "") {
      setCountries(countriesFiltered);
      return;
    }

    setCountries(
      countriesFiltered.filter(({ name }) =>
        name.common.toUpperCase().startsWith(searchValue)
      )
    );
  };

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
          onChange={handleSearch}
        />
      </div>

      <div id="filter" className="">
        <div className="w-64">
          <select
            id="region"
            name="region"
            className=" w-full p-3 bg-lightElement dark:bg-darkElement  rounded-md focus:outline-none"
            onChange={handleSelection}
          >
            <option selected hidden>
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="oceania">Oceania</option>
            <option value="">All</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
