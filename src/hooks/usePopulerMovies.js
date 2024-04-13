import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {  addPopulerMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopulerMovies = () => {
  // Fetch Data From TMDB API and updata Store
  const dispatch = useDispatch();

  const getPopulerMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopulerMovies(json.results));
  };

  useEffect(() => {
    getPopulerMovies();
  }, []);
};

export default usePopulerMovies;
