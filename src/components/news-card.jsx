import { Link } from "react-router-dom";
import dummy from "../assets/dummy.png";
import { HomeHeader } from "./home-page-components/home-header";
import { useEffect, useState } from "react";
import { NewsCardSkeleton } from "./skeleton/news-card-skeleton";
export const NewsCard = ({ index, cardValue, currentPage }) => {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageLoading(true);
    const imageLoadTimeout = setTimeout(() => {
      setImageLoading(false);
    }, 3000);

    return () => {
      clearTimeout(imageLoadTimeout);
    };
  }, [currentPage]);
  return index === 0 ? (
    <HomeHeader imageLoading={imageLoading} firstNews={cardValue} />
  ) : (
    <div>
      <Link to={cardValue.url} target="_blank">
        <div className=" bg-gray-100 hover:scale-105  hover:border-2 hover:border-sky-400 transition-all duration-300 ease-in-out flex rounded shadow-lg overflow-hidden mb-16 flex-col w-96 max-lg:w-80 max-md:w-full">
          <div className={`h-60 max-md:h-96 max-md:w-full max-sm:h-60 ${imageLoading&& "bg-gray-700 animate-pulse rounded-lg ease-out"} transition-all`}>
            <img
              className={`w-full h-full object-cover rounded-t ${imageLoading? "opacity-0":"opacity-1 ease-in duration-1000"}  transition-all`}
              src={cardValue.urlToImage ? cardValue.urlToImage : dummy}
              alt="not found"
            />
        
          </div>
          <div
            className="mt-4 mb-8 px-4 h-36 flex flex-col justify-center"
            style={{ wordWrap: "break-word" }}
          >
            <div>
              <label className={`text-gray-500 ${imageLoading&& "bg-gray-700 text-gray-700 animate-pulse rounded-lg ease-out"} transition-all `} htmlFor="Date">
                {cardValue.publishedAt.slice(0, 10)}
              </label>
              <h1 className={`text-xl  font-bold max-lg:text-xl my-2 ${imageLoading&& "bg-gray-700 text-gray-700 animate-pulse rounded-lg ease-out"} transition-all`}>
                {cardValue.title.slice(0, 20)}...
              </h1>
              <p className={`text-gray-700 text-base ${imageLoading&& "bg-gray-700 animate-pulse rounded-lg ease-out"} transition-all`}>
                {cardValue.description
                  ? cardValue.description.substring(0, 70)
                  : `No discription found`}
                ...
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
