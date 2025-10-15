import React, { useState } from "react";

export default function Searchbar({ setQuery }) {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    if (search.trim() !== "") {
      setQuery(search);
    }
  };
  return (
    <div
      style={{ fontFamily: `"Lobster Two", sans-serif` }}
      className="gap-6 flex flex-col justify-center items-center"
    >
      <h1 className="text-6xl md:text-7xl lg:text-8xl pt-10 w-full font-semibold flex justify-center items-center">
        Snap Shot
      </h1>
      <div className=" flex">
        <input
          className="bg-gray-200 px-4 py-2 rounded-l-2xl active:ring-0"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-950 p-2 rounded-r-2xl flex hover:scale-105 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-6"
          >
            <path
              className=""
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 p-2 justify-center items-center">
        <button
          onClick={() => {
            setQuery("nature");
          }}
          className="bg-blue-900 text-white rounded-[12px] py-2 px-4 lg:hover:scale-x-110 lg:sacle-y-105 transition-transform duration-300"
        >
          Nature
        </button>
        <button
          onClick={() => {
            setQuery("animals");
          }}
          className="bg-blue-900 text-white rounded-[12px] py-2 px-4 lg:hover:scale-x-110 lg:sacle-y-105 transition-transform duration-300"
        >
          Animals
        </button>
        <button
          onClick={() => {
            setQuery("technology");
          }}
          className="bg-blue-900 text-white rounded-[12px] py-2 px-4 lg:hover:scale-x-110 lg:sacle-y-105 transition-transform duration-300"
        >
          Technology
        </button>
        <button
          onClick={() => {
            setQuery("food");
          }}
          className="bg-blue-900 text-white rounded-[12px] py-2 px-4 lg:hover:scale-x-110 lg:sacle-y-105 transition-transform duration-300"
        >
          Food
        </button>
      </div>
    </div>
  );
}
