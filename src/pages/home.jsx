import Card from "../components/Card";
import Navbar from "../components/Navbar";
import SearchAndFilter from "../components/SearchAndFilter";
import fetcher from "../helpers/fetcher";
import { useEffect, useState } from "react";

const Home = () => {
  const [countries, setCountries] = useState([{}]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetcher('/all'); // Llama a tu función fetcher

        setCountries(data);
        // Actualiza el estado con los datos recibidos
      } catch (error) {
        setError(error.message); // Maneja el error si ocurre
      }
    };

    fetchData(); // Ejecuta la función dentro de useEffect
  }, []);

  console.log(error, countries);

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
        <div id="couuntries-grid" className="flex justify-center">
          {" "}
          <div
            id="countries"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-20"
          >
            {countries.length > 1 &&
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
