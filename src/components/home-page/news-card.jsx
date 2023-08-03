import dummy from "../../assets/dummy.png"
export const NewsCard = ({cardValue}) => {

  return (
    <div className="flex flex-col w-96 max-lg:w-80 max-md:w-full">
      <div>
        <img className="w-full rounded-lg my-4"
          src={cardValue.urlToImage? cardValue.urlToImage: dummy}
          alt="not found"
        />
      </div>
      <div>
        <label className="my-4" htmlFor="Date">{cardValue.publishedAt.slice(0,10)}</label>
        <h1 className="text-2xl max-lg:text-xl my-4">{cardValue.title}</h1>
        <p className="my-4">
          {cardValue.description}
        </p>
      </div>
    </div>
  );
};
