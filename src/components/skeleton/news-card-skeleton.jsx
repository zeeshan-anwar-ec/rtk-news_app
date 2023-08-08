export const NewsCardSkeleton = () => {
  return (
    <div className="flex my-6 flex-col w-96 max-lg:w-80 max-md:w-full animate-pulse">
      <div className="rounded-lg bg-slate-300  h-60 max-md:h-96 max-sm:h-60"></div>
      <div className="mt-4">
        <label
          className="text-slate-300 w-8 h-2 rounded-lg bg-slate-300"
          htmlFor="Date"
        >
            ..............
        </label>
        <h1 className="text-slate-300 rounded-lg bg-slate-300 text-2xl max-lg:text-xl my-2">
          askjasasdasd
        </h1>
        <p className="text-slate-300 mb-2 rounded-lg bg-slate-300">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <p className="text-slate-300 rounded-lg bg-slate-300">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
    </div>
  );
};
