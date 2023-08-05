import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchArticles } from "../../redux/slice/newsSlice";
import axios from "axios";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const searchArticleNews = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(
        `https://newsapi.org/v2/everything?q=${input}&from=2023-08-02&to=2023-08-02&sortBy=popularity&apiKey=620ca7cdf5ac4e91935dccef8e5c8e0b`
      );
      result.data.articles.length > 1
        ? dispatch(
            searchArticles(
              `https://newsapi.org/v2/everything?q=${input}&from=2023-08-02&to=2023-08-02&sortBy=popularity&apiKey=620ca7cdf5ac4e91935dccef8e5c8e0b`
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
      className={`w-full   py-2 mb-8 bg-white border-2  flex justify-between`}
    >
      <input
        className="pl-8 flex-1 max-sm:w-16 outline-none max-sm:placeholder:text-xs"
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter the Article"
        required
      />
      <button className="border-2 mr-8 px-4 py-1 rounded-lg max-sm:text-xs max-sm:px-2 max-sm:py-0" type="submit">
        Search
      </button>
    </form>
  );
};
