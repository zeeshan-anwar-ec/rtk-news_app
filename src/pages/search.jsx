import { useSelector } from "react-redux";
import { SearchBar } from "../components/search-page-components/search-bar";
import { NewsCard } from "../components/news-card";
import { Pagination } from "../components/pagination";
import { useState } from "react";
import { HomeHeader } from "../components/home-page-components/home-header";
import { NewsCardSkeleton } from "../components/skeleton/news-card-skeleton";

export const Search = () => {
  const newsData = useSelector((state) => {
    return {
      searchedNews: state.news.searchedNews[0],
      loading: state.news.loading,
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;


  const newsList = newsData.searchedNews ? newsData.searchedNews.articles : [];
  const currentPosts = newsList.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="flex pb-8 flex-col items-center">
      <SearchBar />
      {newsData.loading ? (
        <div className="loader-line fixed top-0"></div>
      ) : newsData.searchedNews ? (
        <div className="w-4/5 mt-8 flex flex-col items-center">
          <div className="w-full  flex flex-wrap justify-between just max-md:justify-center">
            {currentPosts.map((news, index) => (
              <NewsCard key={index} index={index} cardValue={news}/>
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
        <h1 className="text-2xl">Search the data....</h1>
      )}
    </div>
  );
};
