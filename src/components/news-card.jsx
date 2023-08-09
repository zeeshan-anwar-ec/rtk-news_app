import { Link } from "react-router-dom";
import dummy from "../assets/dummy.png";
import { HomeHeader } from "./home-page-components/home-header";
import { useEffect, useState } from "react";
import { NewsCardSkeleton } from "./skeleton/news-card-skeleton";
export const NewsCard = ({ index, cardValue }) => {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const imageLoadTimeout = setTimeout(() => {
      setImageLoading(false);
    }, 3000);

    return () => {
      clearTimeout(imageLoadTimeout);
    };
  }, []);


  return index === 0 ? (
    <HomeHeader imageLoading={imageLoading} firstNews={cardValue} />
  ) : imageLoading ? (
    <NewsCardSkeleton />
  ) : (
    <Link to={cardValue.url} target="_blank">
      <div className="hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out flex rounded-lg shadow mb-16 flex-col w-96 max-lg:w-80 max-md:w-full">
        <div className=" h-60 max-md:h-96 max-md:w-full max-sm:h-60">
          <img
            className="w-full h-full object-fill rounded-t-lg"
            src={cardValue.urlToImage ? cardValue.urlToImage : dummy}
            alt="not found"
          />
        </div>
        <div className="mt-4 mb-8 pl-4">
          <label className="text-gray-600" htmlFor="Date">
            {cardValue.publishedAt.slice(0, 10)}
          </label>
          <h1 className="text-2xl max-lg:text-xl my-2">
            {cardValue.title.slice(0, 20)}...
          </h1>
          <p>
            {cardValue.description && cardValue.description.slice(0, 70)}...
          </p>
        </div>
      </div>
    </Link>
  );
};
