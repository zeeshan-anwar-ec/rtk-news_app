import { Link } from "react-router-dom";
import dummy from "../../assets/dummy.png";
import { HomeHeaderSkeleton } from "../skeleton/home-header-skeleton";

export const HomeHeader = ({ firstNews, imageLoading }) => {
  return (
    <Link className="w-full" to={firstNews.url} target="_blank">
      <div className="bg-gray-100 hover:scale-105 
      transition-all duration-300 ease-in-out w-full flex 
      mb-16 shadow-lg  max-xl:w-96 max-xl:flex-col max-md:w-full max-md:m-auto max-md:mb-16 ">

        <div className={`w-1/2 h-96  max-xl:h-60 max-xl:w-full max-md:w-full max-md:h-96 max-sm:h-60 ${imageLoading&& "bg-gray-700 animate-pulse rounded-lg ease-out"} transition-all`}>
          <img
            className={`w-full h-full object-cover rounded-l max-xl:rounded-t max-xl:rounded-b-none ${imageLoading? "opacity-0":"opacity-1 ease-in duration-1000"}  transition-all`}
            src={firstNews.urlToImage ? firstNews.urlToImage : dummy}
            alt=""
          />
        </div>

        <div className="w-1/2 py-4 max-xl:w-full max-xl:h-auto max-xl:pl-0 max-xl:py-6  max-md:w-full pl-8  flex flex-col justify-between rounded-r-lg max-xl:rounded-r-none max-xl:rounded-b-lg max-xl:rounded-br-lg">
          <label className={`text-gray-500 w-fit max-xl:ml-4 text-xl font-normal max-lg:font-normal max-lg:text-lg max-lg:my-2 ${imageLoading&& "bg-gray-700 text-gray-700 animate-pulse rounded-lg ease-out"} transition-all`} htmlFor="Date">
            {firstNews.publishedAt.slice(0, 10)}
          </label>
          <h1 className={`text-4xl font-bold max-xl:text-xl max-xl:font-bold max-xl:ml-4 max-lg:text-lg max-md:text-2xl ${imageLoading&& "bg-gray-700 text-gray-700 animate-pulse rounded-lg ease-out"} transition-all`}>
            {firstNews.title.substring(0, 70)}...
          </h1>
          <p className={`max-xl:ml-4 text-gray-700 ${imageLoading&& "bg-gray-700 text-gray-700 animate-pulse rounded-lg ease-out"} transition-all`}>{firstNews.description? firstNews.description.substring(0, 70):"No discription found"}...</p>
        </div>
      </div>
    </Link>
  );
};
