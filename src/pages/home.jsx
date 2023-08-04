import { useEffect, useState } from "react";
import { fetchNews } from "../redux/slice/newsSlice";
import { HomeHeader } from "../components/home-page/home-header";
import { NewsCard } from "../components/home-page/news-card";
import { Pagination } from "../components/pagination";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  const storeData = useSelector((state) => {
    return state.posts.posts.articles;
  });

  var newsList = storeData ? storeData : [];

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = newsList.slice(firstPostIndex, lastPostIndex);

  return storeData ? (
    <div className="w-4/5 mt-24 py-8 m-auto flex flex-col items-center">
      <HomeHeader firstNews={currentPosts[0]} />
      <div className="w-full flex flex-wrap justify-between max-md:w-full max-md:justify-center">
        {currentPosts.slice(1).map((item, index) => (
          <NewsCard key={index} cardValue={item} />
        ))}
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={newsList.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  ) : (
    <h1 className="mt-24 text-4xl">Loading......</h1>
  );
};
