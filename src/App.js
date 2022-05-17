import {useEffect, useState} from 'react';
import Navbar from 'components/Navbar';
import {Outlet} from 'react-router-dom';
import {useMovies} from 'hooks';
import {SET_POPULAR_MOVIES, SET_TRENDING_MOVIES} from 'store/slices/movies';

import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const {handleFetchingPopularMovies, handleFetchingTrending} = useMovies();

  useEffect(() => {
    Promise.all([handleFetchingPopularMovies(), handleFetchingTrending()])
      .then((res) => {
        dispatch(SET_POPULAR_MOVIES(res[0].results));
        dispatch(SET_TRENDING_MOVIES(res[1].results));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <section className='container my-24'>
        <Outlet />
      </section>
    </>
  );
}

export default App;
