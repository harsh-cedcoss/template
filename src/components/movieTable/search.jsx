import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../Redux/movieReducer";

const TableSearch = () => {
    const movieData = useSelector((state) => state.current);
    const originalMovies = useSelector((state) => state.original);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const searchResults = movieData.filter((movie) =>movie.Title.toLowerCase().includes(searchTerm.toLowerCase()));
    dispatch(setMovies(searchResults));
  };

  const handleClear = () => {
    setSearchTerm("");
    dispatch(setMovies(originalMovies));
  };

  return (
    <div className="inline-block">
    <div className="shadow-lg flex items-center justify-between p-4 mb-4">
      <input
        type="text"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded mr-2"
      />
      <button
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700 mr-2"
        onClick={handleSearch}
      >
        Apply
      </button>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
    </div>
  );
};

export default TableSearch;
