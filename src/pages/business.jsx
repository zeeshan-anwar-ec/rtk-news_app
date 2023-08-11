import { useEffect, useRef, useState } from "react";
import { fetchBusinessNews } from "../redux/slice/newsSlice";
import { NewsCard } from "../components/news-card";
import { Pagination } from "../components/pagination";
import { useDispatch, useSelector } from "react-redux";

export const Business = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBusinessNews());
  }, []);

  const storeData = useSelector((state) => {
    return state.news.news.articles;
  });

  var newsList = storeData ? storeData : [];

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = newsList.slice(firstPostIndex, lastPostIndex);


  return storeData ? (
    <div className="w-4/5  py-8 m-auto flex flex-col items-center">
      <div className="w-full flex flex-wrap justify-between max-md:w-full max-md:justify-center">
        {currentPosts.map((item, index) => (
          <NewsCard key={index} index={index} cardValue={item} />
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
    <div className="loader-line fixed top-0"></div>
  );
};
