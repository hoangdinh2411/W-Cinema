import {useSelector} from 'react-redux';
import axiosInstance from 'api/axios/axiosInstance';

function useGenres() {
  const popularMovies = useSelector((state) => state.movies.popular);
  const trendingForTheDayMovies = useSelector((state) => state.movies.trending.day);

  const handleFetchingPopularMovies = async () => {
    return await axiosInstance.get('/movie/popular');
  };
  
  const handleFetchingTrendingForTheDay = async () => {
    return await axiosInstance.get('/trending/movie/day');
  };
  const handleFetchingTrendingForTheWeek = async () => {
    return await axiosInstance.get('/trending/movie/week');
  };

  return {
    popularMovies,
    trendingForTheDayMovies,
    handleFetchingPopularMovies,
    handleFetchingTrendingForTheDay,
    handleFetchingTrendingForTheWeek
  };
}

export default useGenres;
