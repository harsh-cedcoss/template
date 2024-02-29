// SortableTable.jsx
import React, { useState } from "react";
import { setMovies } from "../../Redux/movieReducer";
import { useSelector, useDispatch } from "react-redux";

const TableSort = () => {
  const movieData = useSelector((state) => state.current);
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState("asc");

  const sortMovies = () => {
    const sortedMovies = [...movieData].sort((a, b) => {
      const titleA = a.Title.toUpperCase();
      const titleB = b.Title.toUpperCase();

      if (sortOrder === "asc") {
        return titleA.localeCompare(titleB);
      } else {
        return titleB.localeCompare(titleA);
      }
    });

    dispatch(setMovies(sortedMovies))
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="shadow-2xl mb-4">
    <button
      className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-700"
      onClick={sortMovies}
    >
      Sort {sortOrder === "asc" ? "A <-- Z" : "Z <-- A"}
    </button>
    </div>
  );
};

export default TableSort;
