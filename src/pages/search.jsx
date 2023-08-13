import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { SearchBar } from "../components/search-page-components/search-bar";
import { NewsCard } from "../components/news-card";
import { Pagination } from "../components/pagination";
import searchPic from "../assets/search.svg";
import noResult from "../assets/noResult.svg";

import { useState } from "react";

const newsSelector = createSelector(
  (state) => state.news.searchedNews[0],
  (state) => state.news.loading,
  (searchedNews, loading) => ({ searchedNews, loading })
);

export const  Search = () => {
  const newsData = useSelector(newsSelector);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const [searchedData ,setSearchedData] = useState(false)

  const newsList = newsData.searchedNews ? newsData.searchedNews.articles : [];
  const currentPosts = newsList.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="flex pb-8 flex-col items-center">
      <SearchBar loading={newsData.loading} searchedData={searchedData} setSearchedData={setSearchedData} />
      {newsData.loading ? (
        <div className="loader-line fixed top-0"></div>
      ) : newsData.searchedNews ? (
        <div className="w-4/5 mt-8 flex flex-col items-center">
          <div className="w-full  flex flex-wrap justify-between just max-md:justify-center">
            {currentPosts.map((news, index) => (
              <NewsCard key={index} currentPage={currentPage} index={index} cardValue={news} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            postPerPage={postPerPage}
            totalPosts={newsList.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <div className="w-4/5 h-96 flex flex-col items-center">
          <h1 className="text-2xl max-md:text-base text-gray-600 font-bold">
          {searchedData? `No news found please search others news` : "Search somthing...."}
          </h1>
          <img
            className="w-2/5 max-md:w-4/5 object-cover"
            src={searchedData? noResult : searchPic}
            alt=""
          />
        </div>
      )}
    </div>
  );
};
