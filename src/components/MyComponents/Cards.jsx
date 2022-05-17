import React from 'react';
import {getGenresOfMovie} from 'services/genres';
import {getYear} from 'services/formatDate';
import {Link} from 'react-router-dom';

function Cards({movie, amountShowedMovies, index, ...props}) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      title={movie.title}
      className={`${
        index + 1 > amountShowedMovies ? 'hidden' : ''
      }   w-[160px]   mb-6 ml-1 mr-2 `}
    >
      <div className='  relative rounded overflow-hidden'>
        <span className='absolute w-full h-full bg-sky-300 opacity-0 hover:opacity-20 duration-300'></span>
        <img
          className='w-full  h-[240px]  '
          src={`https://image.tmdb.org/ t/p/w500` + movie.poster_path}
          alt=''
        />
      </div>
      <aside class='text-gray-300 h-30 w-full'>
        <div className='mt-2'>
          <p className='truncate text-gray-100 font-bold text-md' title={movie.title}>
            {movie.title}
          </p>
          <span className='mr-2'>{getYear(movie.release_date)}</span>
          <ul className=' truncate'>
            {getGenresOfMovie(movie.genre_ids).map((genre) => (
              <li className=' inline-block mr-2' key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </Link>
  );
}

export default Cards;
