import dummy from "../../assets/dummy.png";

export const HomeHeader = ({ firstNews }) => {
  return (
    <div className="w-full flex mb-8 max-md:flex-col">

      <div className="w-1/2 max-md:w-full max-md:h-96">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={firstNews.urlToImage ? firstNews.urlToImage : dummy}
          alt=""
        />
      </div>


      <div className="w-1/2 max-md:mb-10 max-md:w-full pl-8 max-md:pl-0 flex flex-col justify-between">
        <label className="my-2" htmlFor="Date">
          {firstNews.publishedAt.slice(0, 10)}
        </label>
        <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl my-4">
          {firstNews.title}
        </h1>
        <p className="my-2">{firstNews.description}</p>
      </div>
    </div>
  );
};
