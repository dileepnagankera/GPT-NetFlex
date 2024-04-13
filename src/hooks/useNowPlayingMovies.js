import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  // Fetch Data From TMDB API and updata Store
  const dispatch = useDispatch();

  const getNowPLayinMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPLayinMovies();
  }, []);
};

export default useNowPlayingMovies;
