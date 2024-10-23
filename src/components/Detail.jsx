import arrow from "../assets/arrow-back.svg";
import { Link } from "react-router-dom";
import useStore from "../store/store";
import { useEffect, useState } from "react";
const Detail = () => {
  const { countryDetail, countriesFiltered, setCountryDetail } = useStore();
  const [borderCountries, setBorderCountries] = useState([]);
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = countryDetail;
  console.log(countryDetail);

  const [currency] = Object.values(currencies);

  const popu = new Intl.NumberFormat("en-US").format(population);

  const native = Object.values(name.nativeName)[0].common;

  useEffect(() => {
    // Mapea los objetos de 'borders' para obtener el campo cca3
    if (borders && countriesFiltered) {
      const foundCountries = borders.map((border) => {
        return countriesFiltered.find((country) => country.cca3 === border);
      });
      // Filtra los que son undefined

      setBorderCountries(foundCountries);
    }
  }, [borders, countriesFiltered]);

  console.log(borderCountries);

  return (
    <div
      id="body"
      className="flex flex-col  bg-lightBackground dark:bg-darkBackground font-nunito overflow-hidden gap-y-10"
    >
      <div id="back" className="px-7 md:px-0">
        <Link to="/">
          <button className="flex flex-row gap-3 text-lg rounded-md drop-shadow-xl shadow-gray-500 py-1 px-6 bg-lightElement dark:bg-darkElement text-lightText dark:text-darkText font-sans items-center">
            <img src={arrow} alt="icon arrow" /> Back
          </button>
        </Link>
      </div>

      <div
        id="data"
        className="flex flex-col px-9 md:px-0 md:flex-row gap-32  text-lightText dark:text-darkText lg:h-[550px] overflow-hidden  bg-lightBackground dark:bg-darkBackground items-center md:items-stretch justify-around"
      >
        <div id="image" className=" md:w-[700px] self-center">
          <img src={flags.svg} alt={flags.alt} className="object-contain" />
        </div>
        <div id="details" className="flex flex-col gap-y-8 py-3 justify-center">
          <div id="title" className="flex font-bold font-sans text-4xl">
            <h1>{name.official}</h1>
          </div>
          <div
            id="details2"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-36 gap-y-4"
          >
            <span className="font-bold font-sans">
              Native Name:
              <span className="font-sans font-thin">
                {" "}
                {native ? native : "no-data"}
              </span>
            </span>
            <span className="font-bold font-sans">
              Population:
              <span className="font-sans font-thin"> {popu}</span>
            </span>
            <span className="font-bold font-sans">
              Region:
              <span className="font-sans font-thin"> {region}</span>
            </span>
            <span className="font-bold font-sans">
              Sub Region:
              <span className="font-sans font-thin">
                {" "}
                {subregion ? subregion : "no-data"}
              </span>
            </span>
            <span className="font-bold font-sans">
              Capital:
              <span className="font-sans font-thin"> {capital}</span>
            </span>
            <span className="font-bold font-sans">
              Language:
              <span className="font-sans font-thin"> {languages.eng}</span>
            </span>
            <span className="font-bold font-sans">
              Currency:
              <span className="font-sans font-thin">
                {" "}
                {currency.name} / {currency.symbol}
              </span>
            </span>
            <span className="font-bold font-sans">
              Top Level Domain:
              <span className="font-sans font-thin"> {tld}</span>
            </span>
          </div>
          <div id="borders" className="flex flex-col gap-y-6">
            <span className="flex font-bold font-sans">Borders:</span>
            <div
              id="bord"
              className="grid grid-cols-2 md:flex md:flex-wrap gap-4 items-center md:w-[600px]"
            >
              {borders
                ? borderCountries.map((value, index) => {
                    return (
                      <button
                        key={index}
                        className="w-[120px] px-4 py-2 justify-center items-center rounded-md  shadow-md bg-lightElement dark:bg-darkElement transition-all duration-500 hover:scale-105"
                        onClick={() => setCountryDetail(value)}
                      >
                        {value.name.common}
                      </button>
                    );
                  })
                : "no-data"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
