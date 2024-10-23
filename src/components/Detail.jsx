import arrow from "../assets/arrow-back.svg";
import { Link } from "react-router-dom";
import useStore from "../store/store";
const Detail = () => {
  const { countryDetail } = useStore();
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
  } = countryDetail;
  console.log(countryDetail);

  const [currency] = Object.values(currencies);
  console.log(currency);
  const popu = new Intl.NumberFormat("en-US").format(population);

  return (
    <div
      id="body"
      className="flex flex-col bg-lightBackground dark:bg-darkBackground font-nunito overflow-hidden gap-y-10"
    >
      <div id="back" className="">
        <Link to="/">
          <button className="flex flex-row gap-3 text-lg rounded-md shadow-l py-1 px-6 bg-lightElement dark:bg-darkElement text-lightText dark:text-darkText font-sans items-center">
            <img src={arrow} alt="icon arrow" /> Back
          </button>
        </Link>
      </div>

      <div
        id="data"
        className="flex flex-col px-9 md:px-0 md:flex-row gap-32  text-lightText dark:text-darkText h-[750px] overflow-hidden  bg-lightBackground dark:bg-darkBackground items-center md:items-stretch"
      >
        <div id="image" className="object-cover md:w-[700px]">
          <img src={flags.svg} alt={flags.alt} />
        </div>
        <div id="details" className="flex flex-col gap-y-8 py-3 ">
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
                {name.nativeName.eng.common}
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
        </div>
      </div>
    </div>
  );
};

export default Detail;
