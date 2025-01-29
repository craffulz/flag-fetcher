import Card from "../components/Card";
import Navbar from "../components/Navbar";
import SearchAndFilter from "../components/SearchAndFilter";
import { useEffect } from "react";
import useStore from "../store/store";

const Home = () => {
  const { countries, setCountries, setCountriesFiltered } = useStore();

  useEffect(() => {
    const initializeStore = () => {
      setCountries("all");
      setCountriesFiltered("all");
    };

    initializeStore();
  }, [setCountries, setCountriesFiltered]);

  return (
    <div
      id="body"
      className="flex flex-col gap-y-16 bg-lightBackground dark:bg-darkBackground min-h-screen min-w-screen font-nunito overflow-hidden"
    >
      <Navbar />
      <div
        id="content"
        className="flex flex-col gap-y-16 px-7 items-center lg:items-stretch md:px-16"
      >
        <div id="search">
          <SearchAndFilter />
        </div>
        <div id="countries-grid" className="flex flex-row">
          <div id="countries" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {countries.length >= 1 &&
              countries.map((value, index) => (
                <Card value={value} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
