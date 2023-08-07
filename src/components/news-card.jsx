import { Link } from "react-router-dom";
import dummy from "../assets/dummy.png";
import { HomeHeader } from "./home-page-components/home-header";
export const NewsCard = ({ index, cardValue }) => {
  console.log("index>>>", index);

  return index === 0 ? (
    <HomeHeader firstNews={cardValue} />
  ) : (
    <Link to={cardValue.url} target="_blank">
      <div className="flex my-6 flex-col w-96 max-lg:w-80 max-md:w-full">
        <div className=" h-60 max-md:h-96 max-sm:h-60">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={cardValue.urlToImage ? cardValue.urlToImage : dummy}
            alt="not found"
          />
        </div>
        <div className="mt-4">
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
