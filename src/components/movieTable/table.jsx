import React, { useEffect, useState } from "react";
import MovieDetailsModal from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../Redux/movieReducer";

const MovieTable = React.memo(() => {
  const movieData = useSelector((state) => state.current);
  let dispatch = useDispatch();

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState([]);

  const openDetailsModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  const deleteMovie = (index) => {
    const updatedMovies = [...movieData];
    updatedMovies.splice(index, 1);
    dispatch(setMovies(updatedMovies))
  };

  return (
      <div className="shadow-2xl inline-block mt-4 p-4">
        <div className="flex items-center justify-between py-4">
          <h3 className="text-2xl font-bold mb-2">
            View the List of the Movie
          </h3>
          <p className="text-gray-600">
            Showing {movieData.length} of 45 results
          </p>
        </div>
        <div className="">
          <table className="table-auto">
            <thead>
              <tr className="bg-gray-700  text-white">
                <th className="p-2">Sr. No.</th>
                <th className="p-2">Movie Title</th>
                <th className="p-2">Movie Year</th>
                <th className="p-2">Movie Genre</th>
                <th className="p-2 ml-8">Action</th>
              </tr>
            </thead>
            <tbody>
              {movieData.length > 0 &&
                movieData.map((movie, index) => (
                  <tr key={index} className="space-x-8">
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{movie.Title}</td>
                    <td className="p-2">{movie.Year}</td>
                    <td className="p-2">{movie.Genre}</td>
                    <td className="p-2 flex align-middle gap-4">
                      <button onClick={() => deleteMovie(index)}>Delete</button>
                      <button
                        className="mr-2"
                        onClick={() => openDetailsModal(movie)}
                      >
                        <svg
                          class="h-8 w-8 text-red-500"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <circle cx="12" cy="12" r="2" />{" "}
                          <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />{" "}
                          <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {selectedMovie && (
          <MovieDetailsModal
            isOpen={isModalOpen}
            movie={selectedMovie}
            onClose={closeDetailsModal}
          />
        )}
      </div>
  );
});

export default MovieTable;
