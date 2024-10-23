import Navbar from "../components/Navbar";
import Detail from "../components/Detail";
const details = () => {
  return (
    <>
      <div
        id="body"
        className="flex flex-col gap-y-16 bg-lightBackground dark:bg-darkBackground min-h-screen min-w-screen font-nunito overflow-hidden"
      >
        <Navbar />
        <div
          id="content"
          className="flex flex-col gap-y-16 items-center lg:items-stretch md:px-12"
        >
          <Detail />
        </div>
      </div>
    </>
  );
};

export default details;
