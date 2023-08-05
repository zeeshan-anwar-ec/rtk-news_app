import dummy from "../assets/dummy.png"
export const NewsCard = ({cardValue}) => {

  

  return (
    <div className="flex flex-col w-96 max-lg:w-80 max-md:w-full">
      <div className=" h-60 max-md:h-96 max-sm:h-60">
        <img className="w-full h-full object-cover rounded-lg"
          src={cardValue.urlToImage? cardValue.urlToImage: dummy}
          alt="not found"
        />
      </div>
      <div className="mt-4 mb-4">
        <label className="my-4" htmlFor="Date">{cardValue.publishedAt.slice(0,10)}</label>
        <h1 className="text-2xl max-lg:text-xl my-4">{cardValue.title.slice(0,20)}</h1>
        <p className="my-4">
          {cardValue.description && cardValue.description.slice(0,70)}
        </p>
      </div>
    </div>
  );
};