import {
  NavigateNext,
  NavigateBefore,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";

export const Pagination = ({
  currentPage,
  totalPosts,
  postPerPage,
  setCurrentPage,
}) => {
  let pages = [];

  for (let i = 0; i < Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center">
      <SkipPrevious
        className="hover:cursor-pointer"
        onClick={() => {
          setCurrentPage(currentPage > 2 ? currentPage - 2 : currentPage);
          window.scroll(0, 0);
        }}
      />
      <NavigateBefore
        className="hover:cursor-pointer"
        onClick={() => {
          setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
          window.scroll(0, 0);
        }}
      />

      {pages.length > 5 && (
        <>
          <button
            onClick={() => {
              setCurrentPage(1);
              window.scroll(0, 0);
            }}
            className="border-2 py-2 px-4 mr-2 max-lg:text-xs max-lg:mr-1 max-md:mr-0 max-lg:py-1 max-lg:px-2
          max-md:px-0 max-md:py-0 max-md:border-0"
          >
            1
          </button>
          <p
            className=" text-2xl py-2 px-4 ml-2 max-lg:text-xs max-lg:ml-1 max-lg:py-1 max-lg:px-2 
          max-md:px-0 max-md:py-0"
          >
            ...
          </p>
        </>
      )}

      {pages.length > 5 && (
        <button
          className=" py-2 px-4 mx-1 border-2 
          max-lg:text-xs max-lg:py-1 max-lg:px-2
          max-md:border-0 max-md:py-0 max-md:px-0
          "
        >
          {currentPage}
        </button>
      )}

      {pages.length > 5 && (
        <>
          <p
            className=" text-2xl py-2 px-4 ml-2 max-lg:text-xs max-lg:ml-1 max-lg:py-1 max-lg:px-2 
          max-md:px-0 max-md:py-0"
          >
            ...
          </p>
          <button
            onClick={() => {
              setCurrentPage(pages.length);
              window.scroll(0, 0);
            }}
            className="border-2 py-2 px-4 ml-2 max-lg:text-xs max-lg:ml-1 max-lg:py-1 max-lg:px-2 
          max-md:px-0 max-md:py-0 max-md:border-0"
          >
            {pages.length}
          </button>
        </>
      )}

      {pages.length < 5 &&
        pages.map((page, index) => (
          <button
            onClick={() => {
              setCurrentPage(page + 1);
              window.scroll(0, 0);
            }}
            className=" py-2 px-4 mx-1 border-2 
          max-lg:text-xs max-lg:py-1 max-lg:px-2
          max-md:border-0 max-md:py-0 max-md:px-0
          "
            key={index}
          >
            {page + 1}
          </button>
        ))}

      <NavigateNext
        className="hover:cursor-pointer"
        onClick={() => {
          setCurrentPage(
            currentPage < pages.length ? currentPage + 1 : currentPage
          );
          window.scroll(0, 0);
        }}
      />
      {/* <SkipNext onClick={}/> */}
      <SkipNext
        className="hover:cursor-pointer"
        onClick={() => {
          setCurrentPage(
            currentPage + 1 < pages.length ? currentPage + 2 : currentPage
          );
          window.scroll(0, 0);
        }}
      />
    </div>
  );
};
