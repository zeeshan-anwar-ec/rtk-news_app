import { Link } from "react-router-dom";
import dummy from "../../assets/dummy.png";
import { HomeHeaderSkeleton } from "../skeleton/home-header-skeleton";

export const HomeHeader = ({ firstNews, imageLoading }) => {
  return imageLoading ? (
    <HomeHeaderSkeleton />
  ) : (
    <Link to={firstNews.url} target="_blank">
      <div className="hover:bg-gray-100 hover:scale-105 
      transition-all duration-100 ease-in-out w-full flex 
      mb-16 max-lg:mb-0 max-xl:w-96 max-xl:flex-col max-xl: max-md:w-full max-md:m-auto ">

        <div className="w-1/2 h-96 max-xl:h-60 max-xl:w-full max-md:w-full max-md:h-96 max-sm:h-60">
          <img
            className="w-full h-full object-cover rounded-l-lg max-xl:rounded-t-xl max-xl:rounded-b-none"
            src={firstNews.urlToImage ? firstNews.urlToImage : dummy}
            alt=""
          />
        </div>

        <div className="max-xl:py-6 home-header-child-2 border-2 rounded-r-lg max-xl:rounded-r-none max-xl:rounded-b-lg max-xl:rounded-br-lg flex flex-col justify-between">
          <label className="text-gray-500 w-fit max-xl:ml-4 text-2xl font-black" htmlFor="Date">
            {firstNews.publishedAt.slice(0, 10)}
          </label>
          <h1 className="text-6xl max-xl:text-xl max-xl:ml-4 max-lg:font-normal font-black max-lg:text-3xl max-md:text-2xl">
            {firstNews.title.slice(0, 50)}...
          </h1>
          <p className="max-xl:ml-4">{firstNews.description.slice(0, 150)}...</p>
        </div>
      </div>
    </Link>
  );
};
