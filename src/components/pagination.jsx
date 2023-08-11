import {
  NavigateNext,
  NavigateBefore,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import { PButton } from "./pagination-components/pagination-button";
import { Dots } from "./pagination-components/dots";

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
      {/* <SkipPrevious
        className="hover:cursor-pointer"
        onClick={() => {
          console.log("im clicked");
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
      /> */}

      {pages.length > 5 && (
        <>
          {currentPage > 1 && (
            <>
              <PButton setCurrentPage={setCurrentPage} val={1} />
              <Dots />
            </>
          )}
          {currentPage > 2 && (
            <PButton val={currentPage - 1} setCurrentPage={setCurrentPage} />
          )}
          <PButton
            currentPage={true}
            val={currentPage}
            setCurrentPage={setCurrentPage}
          />
          {currentPage < pages.length - 1 && (
            <PButton val={currentPage + 1} setCurrentPage={setCurrentPage} />
          )}
          {currentPage < pages.length && (
            <>
              <Dots />
              <PButton setCurrentPage={setCurrentPage} val={pages.length} />
            </>
          )}
        </>
      )}

      {pages.length < 5 &&
        pages.map((page, index) => (
          <PButton setCurrentPage={setCurrentPage} val={page + 1} key={index} />
        ))}

      {/* <NavigateNext
        className="hover:cursor-pointer"
        onClick={() => {
          setCurrentPage(
            currentPage < pages.length ? currentPage + 1 : currentPage
          );
          window.scroll(0, 0);
        }}
      />
      <SkipNext
        className="hover:cursor-pointer"
        onClick={() => {
          setCurrentPage(
            currentPage + 1 < pages.length ? currentPage + 2 : currentPage
          );
          window.scroll(0, 0);
        }}
      /> */}
    </div>
  );
};
