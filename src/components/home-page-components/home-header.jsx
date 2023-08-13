import { Link } from "react-router-dom";
import dummy from "../../assets/dummy.png";
import { HomeHeaderSkeleton } from "../skeleton/home-header-skeleton";

export const HomeHeader = ({ firstNews, imageLoading }) => {
  return imageLoading ? (
    <HomeHeaderSkeleton />
  ) : (
    <Link className="w-full" to={firstNews.url} target="_blank">
      <div className="hover:bg-gray-100 hover:scale-105 
      transition-all duration-300 ease-in-out w-full flex 
      mb-16 shadow-lg  max-xl:w-96 max-xl:flex-col max-md:w-full max-md:m-auto max-md:mb-16 ">

        <div className="w-1/2 h-96  max-xl:h-60 max-xl:w-full max-md:w-full max-md:h-96 max-sm:h-60">
          <img
            className="w-full h-full object-cover rounded-l max-xl:rounded-t max-xl:rounded-b-none"
            src={firstNews.urlToImage ? firstNews.urlToImage : dummy}
            alt=""
          />
        </div>

        <div className="w-1/2 py-4 max-xl:w-full max-xl:h-auto max-xl:pl-0 max-xl:py-6  max-md:w-full pl-8  flex flex-col justify-between rounded-r-lg max-xl:rounded-r-none max-xl:rounded-b-lg max-xl:rounded-br-lg">
          <label className="text-gray-500 w-fit max-xl:ml-4 text-xl font-normal max-lg:font-normal max-lg:text-lg max-lg:my-2" htmlFor="Date">
            {firstNews.publishedAt.slice(0, 10)}
          </label>
          <h1 className="text-4xl font-bold max-xl:text-xl max-xl:font-bold max-xl:ml-4 max-lg:text-lg max-md:text-2xl">
            {firstNews.title.substring(0, 70)}...
          </h1>
          {console.log("first News>>> ",firstNews)}
          <p className="max-xl:ml-4 text-gray-700">{firstNews.description? firstNews.description.substring(0, 70):"No discription found"}...</p>
        </div>
      </div>
    </Link>
  );
};
