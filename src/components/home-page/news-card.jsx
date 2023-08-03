export const NewsCard = ({cardValue}) => {
  return (
    <div className="flex flex-col w-96 max-md:w-full">
      <div>
        <img className="rounded-lg my-4"
          src="https://i.ytimg.com/vi/eY1cnb4t3JM/maxresdefault_live.jpg"
          alt=""
        />
      </div>
      <div>
        <label className="my-4" htmlFor="Date">March 01,2021 card No: {cardValue}</label>
        <h1 className="text-2xl my-4">Taiwan Amps Up Chinese-Invasion</h1>
        <p className="my-4">
          Military and civilian exercises are larger, louder, better coordinated
          as government seeks to battle public complacency
        </p>
      </div>
    </div>
  );
};
