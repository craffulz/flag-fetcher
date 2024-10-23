import arrow from "../assets/arrow-back.svg";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <div
      id="body"
      className="flex flex-col bg-lightBackground dark:bg-darkBackground font-nunito overflow-hidden gap-y-10"
    >
      <div id="back" className="">
        <Link to='/'>
          <button className="flex flex-row gap-3 text-lg rounded-md shadow-l py-1 px-6 bg-lightElement dark:bg-darkElement text-lightText dark:text-darkText font-sans items-center">
            <img src={arrow} alt="icon arrow" /> Back
          </button>
        </Link>
      </div>

      <div id="data" className="flex flex-row gap-16 items-center">
        <div id="image">
          <img src="" alt="" className="object-contain" />
        </div>
        <div id="details"> </div>
      </div>
    </div>
  );
};

export default Detail;
