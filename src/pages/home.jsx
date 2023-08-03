import { useState } from "react";
import { HomeHeader } from "../components/home-page/home-header";
import { NewsCard } from "../components/home-page/news-card";
import { Pagination } from "../components/pagination";

export const Home = () => {
  const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;

  var newsList = [];
  for (let i = 0; i < 30; i++) {
    newsList.push({ name: `homecard: ${i + 1} ` });
  }
  const [currentPage, setCurrentPage] = useState(2);
  const [postPerPage, setPostPerPage] = useState(9);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = newsList.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="w-4/5 mt-24 py-8 m-auto flex flex-col items-center">
      <HomeHeader />
      <div className="w-full flex flex-wrap justify-between max-md:w-full max-md:justify-center">
        {currentPosts.map((item, index) => (
          <NewsCard key={index} cardValue={item.name} />
        ))}
      </div>
      <Pagination
        totalPosts={newsList.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
