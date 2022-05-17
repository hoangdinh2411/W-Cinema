import {useSelector} from 'react-redux';
import axiosInstance from 'api/axios/axiosInstance';

function useGenres() {
  const popularMovies = useSelector((state) => state.movies.popular);
  const trendingMovies = useSelector((state) => state.movies.trending);

  const handleFetchingPopularMovies = async () => {
    return await axiosInstance.get('/movie/popular');
  };
  
  const handleFetchingTrending = async () => {
    return await axiosInstance.get('/trending/movie/day');
  };

  return {
    popularMovies,
    trendingMovies,
    handleFetchingPopularMovies,
    handleFetchingTrending,
  };
}

export default useGenres;
