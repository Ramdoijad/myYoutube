import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSLice";
import { GOOGLE_API_YOUTUBE_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cashResult } from "../utils/searchSlice";
import { videoResult } from "../utils/getVideoSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        fetchSearchApi();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchSearchApi = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await res.json();
    setSuggestions(data[1]);
    dispatch(cashResult({ [searchQuery]: data[1] }));
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const getSearchResultByTyping = async () => {
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=50&q=${searchQuery}&type=video&key=` + GOOGLE_API_YOUTUBE_KEY);
    const data = await res.json();
    dispatch(videoResult(data.items));
  };

  return (
    <div className="flex items-center h-[65px] p-2 bg-white shadow-md sticky top-0 z-10">
      <div className="flex items-center">
        <img
          onClick={handleToggleMenu}
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
          className="h-8 mx-4 cursor-pointer"
          alt="Menu Icon"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png"
          className="h-8 cursor-pointer w-20"
          alt="YouTube Logo"
        />
      </div>

      <div className="flex flex-grow items-center mx-4 ml-36 relative">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          value={searchQuery}
          type="text"
          placeholder="Search"
          className="w-full max-w-[600px] border border-gray-300 rounded-l-full p-2 focus:outline-none"
        />
        <button onClick={getSearchResultByTyping} className="bg-red-600 text-white rounded-r-full py-2 px-4">
          Search
        </button>

        {showSuggestions && suggestions.length > 0 && (
          <div className=" absolute  bg-white shadow-lg rounded-lg w-[500px] mt-[439px] mr-[449px]">
            <ul>
              {suggestions.map((item) => (
                <li
                  onMouseDown={getSearchResultByTyping}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center ml-auto mr-10">
        <img
          className="h-10 rounded-full"
          src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100262.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727136000&semt=ais_hybrid"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Head;
