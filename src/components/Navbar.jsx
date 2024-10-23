import useStore from "../store/store";
import lightMode from "../assets/mode/lightMode.svg";
import blackMode from "../assets/mode/darkMode.svg";

const Navbar = () => {
  const { toggleDarkMode, darkMode } = useStore();
  const handleDarkMode = () => {
    console.log("darkMode toggled: ", darkMode);
    toggleDarkMode();
  };

  return (
    <div
      id="navbar"
      className="flex flex-row bg-lightElement dark:bg-darkElement text-lightText dark:text-darkText py-3 px-14 items-center justify-between"
    >
      <div id="title" className="font-sans font-bold text-xl">
        <h2>Where in the world?</h2>
      </div>
      <div id="darkMode">
        <button className="p-2 cursor-pointer " onClick={handleDarkMode}>
          <img src={`${darkMode ? lightMode : blackMode}`} alt="light mode" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
