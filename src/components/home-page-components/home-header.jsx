import { Link } from "react-router-dom";
import dummy from "../../assets/dummy.png";
import { HomeHeaderSkeleton } from "../skeleton/home-header-skeleton";

export const HomeHeader = ({ firstNews, imageLoading }) => {
  return imageLoading ? (
    <HomeHeaderSkeleton />
  ) : (
    <Link to={firstNews.url} target="_blank">
      <div className="w-full flex mb-8 max-xl:w-96 max-xl:flex-col max-xl: max-md:w-full max-md:m-auto ">
        <div className="w-1/2 h-96 max-xl:h-60 max-xl:my-6 max-xl:w-full max-md:w-full max-md:h-96 max-sm:h-60">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={firstNews.urlToImage ? firstNews.urlToImage : dummy}
            alt=""
          />
        </div>

        <div className="home-header-child-2 flex flex-col justify-between">
          <label className="text-gray-600" htmlFor="Date">
            {firstNews.publishedAt.slice(0, 10)}
          </label>
          <h1 className="text-6xl max-xl:text-xl max-lg:font-normal font-black max-lg:text-3xl max-md:text-2xl">
            {firstNews.title.slice(0, 50)}...
          </h1>
          <p>{firstNews.description.slice(0, 150)}...</p>
        </div>
      </div>
    </Link>
  );
};
