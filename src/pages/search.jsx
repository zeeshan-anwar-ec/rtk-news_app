import { useSelector } from "react-redux";
import { SearchBar } from "../components/search-page/search-bar";
import { NewsCard } from "../components/home-page/news-card";
import { Pagination } from "../components/pagination";
import { useState } from "react";
import { HomeHeader } from "../components/home-page/home-header";

export const Search = () => {
  const newsData = useSelector((state) => {
    return state.posts.searchedNews[0];
  });

  const newsList = newsData ? newsData.articles : [];
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = newsList.slice(firstPostIndex, lastPostIndex);

  


  return (
    <div className="mt-14 py-8 flex flex-col items-center">
      {/* <SearchBar /> */}
      {newsData ? (
        <div className="w-4/5 flex flex-col items-center">
          <HomeHeader firstNews={currentPosts[0]} />
          <div className="w-full  flex flex-wrap justify-between just max-md:justify-center">
            {currentPosts.slice(1).map((news, index) => (
              <NewsCard key={index} cardValue={news} />
            ))}
          </div>
          <Pagination
            postPerPage={postPerPage}
            totalPosts={newsList.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <h1 className="mt-8 text-2xl">Search the data....</h1>
      )}
    </div>
  );
};
