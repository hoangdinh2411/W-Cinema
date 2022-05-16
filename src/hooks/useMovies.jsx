import {useSelector, useDispatch} from 'react-redux';
import axiosInstance from 'api/axios/axiosInstance';
import {SET_POPULAR_MOVIES,SET_TRENDING_MOVIES} from 'store/slices/movies';

function useGenres() {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popular);
  const trendingMovies = useSelector((state) => state.movies.trending);
  const handleFetchingPopularMovies = async () => {
    try {
      const res = await axiosInstance.get('/movie/popular');
      dispatch(SET_POPULAR_MOVIES(res.results));
    } catch (error) {
      console.log(error);
    }
  };
  const handleFetchingTrending = async () => {
    try {
      const res = await axiosInstance.get('/trending/movie/day');
      dispatch(SET_TRENDING_MOVIES(res.results));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    popularMovies,
    trendingMovies,
    handleFetchingPopularMovies,
    handleFetchingTrending
  };
}

export default useGenres;
