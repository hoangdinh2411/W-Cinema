import {useSelector, useDispatch} from 'react-redux';
import axiosInstance from 'api/axios/axiosInstance';
import {SET_GENRES} from 'store/slices/genres';

function useGenres() {
  const dispatch = useDispatch();
  const genresList = useSelector((state) => state.genres.list);
  const handleFetchingGenres = async () => {
      try {
          const res = await axiosInstance.get('/genre/movie/list');
          dispatch(SET_GENRES(res.genres));
          
      } catch (error) {
          console.log(error)
      }
  };

  return {
    genresList,
    handleFetchingGenres,
  };
}

export default useGenres;
