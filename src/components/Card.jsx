/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ value }) => {
  const { name, population, region, capital, flags } = value;

  return (
    <Link
      id="card"
      className="flex flex-col bg-lightElement dark:bg-darkElement w-[300px] shadow-lg shadow-gray-200 dark:shadow rounded-md  gap-y-4 overflow-hidden transition-scale duration-700 hover:scale-105"
    >
      <img src={flags.svg} alt="" className="object-cover h-[200px]" />
      <div id="data" className="flex flex-col p-6 gap-y-5">
        <div id="title">
          <h3 className="text-lightText dark:text-darkText font-sans font-bold text-xl">
            {name.official}
          </h3>
        </div>
        <div id="details" className="flex flex-col gap-y-1">
          <span className="font-bold font-sans text-lightText dark:text-darkText">
            Population:{" "}
            <span className="font-sans font-thin">{population}</span>
          </span>
          <span className="font-bold font-sans text-lightText dark:text-darkText">
            Region: <span className="font-sans font-thin">{region}</span>
          </span>
          <span className="font-bold font-sans text-lightText dark:text-darkText">
            Capital: <span className="font-sans font-thin">{capital}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
