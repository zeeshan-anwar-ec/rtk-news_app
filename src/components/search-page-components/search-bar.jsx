import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchArticles } from "../../redux/slice/newsSlice";
import axios from "axios";
import {
  todayCurrentDate,
  yearMonthsAgoDate,
  monthAgoDate,
  weekAgoDate,
} from "../../utils";

export const SearchBar = ({ loading, searchedData, setSearchedData }) => {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const [input, setInput] = useState("");
  const [currentDate, setCurrentDate] = useState(todayCurrentDate);
  const [previousDate, setPreviousDate] = useState(weekAgoDate);
  const [source, setSource] = useState("everything");
  const [sortBy, setSortBy] = useState("publishedAt");

  const dispatch = useDispatch();

  const url = `https://newsapi.org/v2/${source}?q=${input}&language=en&from=${previousDate}&to=${currentDate}&sortBy=${sortBy}&apiKey=${apiKey}`;

  const searchArticleNews = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(url);
      result.data.articles.length > 1
        ? dispatch(searchArticles(url))
        : setSearchedData(!searchedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={searchArticleNews}
      className={`w-full rounded flex justify-between max-lg:flex-col py-2 mb-8 shadow bg-sky-400 border-2   max-lg:border-transparent`}
    >
      <input
        className="pl-8 mx-2 max-lg:pl-2 max-lg:mt-2 outline-none border-sky-400 border-2 flex-1 py-2 rounded-lg max-lg:border-2 max-lg:mx-0 max-lg:border-sky-400  max-sm:placeholder:text-xs"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter the Article"
        required
      />

      <select
        className="bg-white border-2 max-lg:mr-0 border-sky-400 text-gray-700 
        transition-all duration-300 ease-in-out max-md:w-full max-lg:px-2 max-lg:my-4 rounded-lg mr-2 outline-none px-2 
        max-lg:py-3 max-md:text-sm"
        onChange={(e) => setPreviousDate(e.target.value)}
      >
        <option value={weekAgoDate}>Week Ago</option>
        <option value={monthAgoDate}>Month Ago</option>
        <option value={yearMonthsAgoDate}>Year Ago</option>
      </select>

      <select
        className="bg-white border-2 max-lg:mr-0 border-sky-400 text-gray-700 
        transition-all duration-300 ease-in-out max-md:w-full max-lg:px-2 max-lg:mb-4 rounded-lg mr-2 outline-none px-2 
        max-lg:py-3 max-md:text-sm"
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="publishedAt">Recent First</option>
        <option value="popularity">Popular First</option>
      </select>

      <button
        className="bg-white border-2 active:bg-gray-700  active:border-gray-700 border-sky-400 text-gray-700 hover:bg-gray-500 hover:text-white transition-all duration-300 ease-in-out max-lg:py-2  max-lg:mr-0  mr-8 px-4 py-1 rounded-lg max-sm:text-sm max-sm:px-2 max-sm:py-2"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
