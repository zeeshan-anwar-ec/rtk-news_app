import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchArticles } from "../../redux/slice/newsSlice";
import axios from "axios";
import {
  sixMonthsAgoDate,
  todayCurrentDate,
  twoDaysAgoDate,
} from "../../utils";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [currentDate, setCurrentDate] = useState(todayCurrentDate);
  const [previousDate, setPreviousDate] = useState(twoDaysAgoDate);
  const [sortBy, setSortBy] = useState("publishedAt");

  const dispatch = useDispatch();

  const searchArticleNews = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(
        `https://newsapi.org/v2/everything?q=${input}&from=${previousDate}&to=${currentDate}&sortBy=${sortBy}&apiKey=620ca7cdf5ac4e91935dccef8e5c8e0b`
      );
      result.data.articles.length > 1
        ? dispatch(
            searchArticles(
              `https://newsapi.org/v2/everything?q=${input}&from=${previousDate}&to=${currentDate}&sortBy=${sortBy}&apiKey=620ca7cdf5ac4e91935dccef8e5c8e0b`
            )
          )
        : alert(`no news available for: ${input}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={searchArticleNews}
      className={`w-full max-lg:flex-col  py-2 mb-8 bg-white border-2  flex justify-between`}
    >
      <input
        className="pl-8 flex-1 max-lg:py-2  max-lg:border-2 outline-none max-sm:placeholder:text-xs"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter the Article"
        required
      />
      <div className="flex items-center mr-2 max-lg:flex-col">
        <p className="mx-2">From</p>
        <input
          className="border-2 rounded-lg py-2 px-1 max-lg:w-full"
          type="date"
          onChange={(e) => setPreviousDate(e.target.value)}
          min={sixMonthsAgoDate}
          max={todayCurrentDate}
        />
        <p className="mx-2">To</p>
        <input
          className="border-2 rounded-lg py-2 px-1 max-lg:w-full"
          type="date"
          onChange={(e) => setCurrentDate(e.target.value)}
          min={sixMonthsAgoDate}
          max={todayCurrentDate}
        />
      </div>
      <select
        className="bg-transparent border-2 max-lg:mt-2 rounded-lg mr-2 outline-none px-2 max-lg:py-2"
        onChange={(e) => setSortBy(e.target.value)}
        defaultValue="publishedAt"
      >
        <option value="publishedAt" disabled selected>
          Sort Search
        </option>
        <option value="publishedAt">Recent First</option>
        <option value="popularity">Papular First</option>
      </select>
      <button
        className="border-2 max-lg:mr-0 max-lg:mt-2 mr-8 px-4 py-1 rounded-lg max-sm:text-xs max-sm:px-2 max-sm:py-2"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
