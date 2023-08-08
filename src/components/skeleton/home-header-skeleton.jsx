import { Link } from "react-router-dom";
import dummy from "../../assets/dummy.png";

export const HomeHeaderSkeleton = () => {
  return (
      <div className="w-full animate-pulse flex mb-8 max-xl:w-96 max-xl:flex-col max-xl: max-md:w-full max-md:m-auto ">
        <div className=" bg-slate-300 rounded-lg w-1/2 h-96 max-xl:h-60 max-xl:my-6 max-xl:w-full max-md:w-full max-md:h-96 max-sm:h-60">
         
        </div>

        <div className="home-header-child-2 flex flex-col justify-between">
          <label className="my-2 w-28 text-slate-300 bg-slate-300 rounded-lg" htmlFor="Date">
            .
          </label>
          <h1 className="my-2 text-6xl text-slate-300 rounded-lg bg-slate-300 tex max-xl:text-xl max-lg:font-normal font-black max-lg:text-3xl max-md:text-2xl">
            ...........................
          </h1>
          <p className="my-2 text-slate-300 rounded-lg bg-slate-300">................</p>
        </div>
      </div>
  );
};
