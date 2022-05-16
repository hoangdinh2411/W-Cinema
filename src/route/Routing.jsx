import React, {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import App from '../App';

const Home = React.lazy(() => import('pages/Home'));
const NewFilms = React.lazy(() => import('pages/NewFilms'));
const Genres = React.lazy(() => import('pages/Genres'));

function Routing() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='new-films' element={<NewFilms />} />
          <Route path='genres' element={<Genres />}>
            <Route path=':genreName' element={<h1>Genres Name</h1>} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Routing;
