// main.jsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MovieTable from "./table";
import { apiKey } from "../config/config";
import { retainOriginal, setMovies } from "../../Redux/movieReducer";
import axios from "axios";
import TableSearch from "./search";
import TableSort from "./sort";

function Main() {
  const dispatch = useDispatch();
  const movieTitles = ["Inception", "The Dark Knight", "Interstellar", "Memento"];

  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch movie data from API
  const fetchData = async () => {
    try {
      // Create promises for fetching data for each movie title
      const movieDataPromises = movieTitles.map(async (title) => {
        const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`;
        const response = await axios.get(apiUrl);
        return response.data;
      });

      // Wait for all promises to resolve
      const fetchedMovies = await Promise.all(movieDataPromises);
      // Filter out any null values from fetched data
      const movies = fetchedMovies.filter(Boolean);
      // Dispatch actions to set and retain movies in Redux store
      dispatch(setMovies(movies));
      dispatch(retainOriginal(movies));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="p-4">
      <TableSearch />
      <TableSort />
      <MovieTable />
    </div>
  );
}

export default Main;
