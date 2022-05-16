import {useEffect} from 'react';
import Navbar from 'components/Navbar';
import {Outlet} from 'react-router-dom';
import {useGenres, useMovies} from 'hooks';

function App() {
  const {handleFetchingGenres} = useGenres();
  const {handleFetchingPopularMovies, handleFetchingTrending} = useMovies();
  
  useEffect(() => {
    handleFetchingPopularMovies();
    handleFetchingTrending();
    handleFetchingGenres();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
