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
  const [input, setInput] = useState("");
  const [currentDate, setCurrentDate] = useState(todayCurrentDate);
  const [previousDate, setPreviousDate] = useState(weekAgoDate);
  const [source, setSource] = useState("everything");
  const [sortBy, setSortBy] = useState("publishedAt");

  const dispatch = useDispatch();

  const url = `https://newsapi.org/v2/${source}?q=${input}&from=${previousDate}&to=${currentDate}&sortBy=${sortBy}&apiKey=620ca7cdf5ac4e91935dccef8e5c8e0b`;

  const searchArticleNews = async (e) => {
    loading = true;
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
      className={`w-4/5 mt-2 rounded flex justify-between max-lg:flex-col py-2 mb-8 bg-white border-2 border-sky-400  max-lg:border-transparent`}
    >
      <input
        className="pl-8 mx-2 outline-none border-sky-400 border-2 flex-1 py-2 rounded-lg max-lg:border-2 max-lg:mx-0 max-lg:border-sky-400  max-sm:placeholder:text-xs"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter the Article"
        required
      />

      <select
        className="bg-transparent border-2 border-sky-400 text-gray-500 transition-all duration-300 ease-in-out max-md:w-full 
        max-lg:px-8 max-lg:my-4 rounded-lg mr-2 max-lg:mr-0 outline-none px-2 max-lg:py-3 max-md:text-sm"
        onChange={(e) => setPreviousDate(e.target.value)}
        // value={previousDatnpme} // Update to the selected value, not the state value
      >
        <option value="" disabled>
          Select Date
        </option>
        <option value={weekAgoDate}>Week Ago</option>
        <option value={monthAgoDate}>Month Ago</option>
        <option value={yearMonthsAgoDate}>Year Ago</option>
      </select>

      <select
        className="bg-transparent border-2 max-lg:mr-0 border-sky-400 text-gray-500 transition-all duration-300 ease-in-out max-md:w-full max-lg:pl-8 max-lg:mb-4 rounded-lg mr-2 outline-none px-2 max-lg:py-3 max-md:text-sm"
        onChange={(e) => setSortBy(e.target.value)}
        // value={sortBy} // Update to the selected value, not the state value
      >
        <option value="" disabled>
          Select Sort
        </option>
        <option value="publishedAt">Recent First</option>
        <option value="popularity">Popular First</option>
      </select>

      <button
        className="bg-transparent border-2 active:bg-sky-600  active:border-sky-600 border-sky-400 text-gray-500 hover:bg-sky-400 hover:text-white transition-all duration-300 ease-in-out max-lg:py-2  max-lg:mr-0  mr-8 px-4 py-1 rounded-lg max-sm:text-sm max-sm:px-2 max-sm:py-2"
        type="submit"
      > 
        Search
      </button>
    </form>
  );
};
