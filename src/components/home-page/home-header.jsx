export const HomeHeader = () => {
  return (
    <div className="w-full flex mb-8">
      <div className="w-1/2">
        <img
          className="rounded-lg object-cover"
          src="https://i.ytimg.com/vi/eY1cnb4t3JM/maxresdefault_live.jpg"
          alt=""
        />
      </div>
      <div className="w-1/2 pl-8 flex flex-col flex-wrap justify-between">
      <label className="my-2" htmlFor="Date">March 01,2021</label>
        <h1 className="text-6xl my-4">Taiwan Amps Up Chinese-Invasion</h1>
        <p className="my-2">
          Military and civilian exercises are larger, louder, better coordinated
          as government seeks to battle public complacency
        </p>
      </div>
    </div>
  );
};
