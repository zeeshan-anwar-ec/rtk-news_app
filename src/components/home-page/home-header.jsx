import dummy from "../../assets/dummy.png"

export const HomeHeader = ({firstNews}) => {


  return (
    <div className="w-full flex mb-8">
      <div className="w-1/2">
        <img
          className="rounded-lg object-cover"
          src={firstNews.urlToImage? firstNews.urlToImage: dummy}
          alt=""
        />
      </div>
      <div className="w-1/2 pl-8 flex flex-col flex-wrap justify-between">
      <label className="my-2" htmlFor="Date">{firstNews.publishedAt.slice(0,10)}</label>
        <h1 className="text-6xl my-4">{firstNews.title}</h1>
        <p className="my-2">
        {firstNews.description}
        </p>
      </div>
    </div>
  );
};
