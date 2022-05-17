import {useEffect, useState} from 'react';
import Navbar from 'components/Navbar';
import {Outlet} from 'react-router-dom';
import {useMovies} from 'hooks';
import {SET_POPULAR_MOVIES, SET_TRENDING_FOR_THE_DAY_MOVIES} from 'store/slices/movies';

import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const {handleFetchingPopularMovies, handleFetchingTrendingForTheDay} = useMovies();

  useEffect(() => {
    Promise.all([handleFetchingPopularMovies(), handleFetchingTrendingForTheDay()])
      .then((res) => {
        dispatch(SET_POPULAR_MOVIES(res[0].results));
        dispatch(SET_TRENDING_FOR_THE_DAY_MOVIES(res[1].results));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <section className='container-0 my-24'>
        <Outlet />
      </section>
    </>
  );
}

export default App;
