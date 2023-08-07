import { Link } from "react-router-dom";
import dummy from "../../assets/dummy.png";

export const HomeHeader = ({ firstNews }) => {
  return (
    <Link to={firstNews.url} target="_blank">
      <div className="w-full flex mb-8 max-md:flex-col max-md:w-4/5 max-md:m-auto">
        <div className="w-1/2 h-96 max-md:w-full max-md:h-96">
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
          <h1 className="text-6xl font-black max-lg:text-3xl max-md:text-2xl">
            {firstNews.title.slice(0, 50)}...
          </h1>
          <p>{firstNews.description.slice(0,150)}...</p>
        </div>
      </div>
    </Link>
  );
};
