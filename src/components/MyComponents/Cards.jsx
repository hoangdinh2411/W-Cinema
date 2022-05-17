import React from 'react';
import {getGenresOfMovie} from 'services/genres';
import {getYear} from 'services/formatDate';
import {Link} from 'react-router-dom';
import Button from './Button';

function Cards({movie}) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className='relative'>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
          alt=''
        />
        <div className=' text-white absolute w-1/2 top-1/2 left-4 pl-5'>
          <p className=' hover:text-sky-400 text-6xl uppercase font-bold  mb-8 tracking-wider text-left'>
            {movie.title}
          </p>
          <p className=' hover:text-sky-400 text-md flex font-normal mb-5  text-left'>
            <span className='h-5 mr-3 relative'>
              {getYear(movie.release_date)}
              <span className='block absolute top-1 -right-2  bg-white w-0.5 h-full'></span>
            </span>
            <ul className='hover:text-sky-400 w-auto flex-1 relative'>
              {getGenresOfMovie(movie.genre_ids).map((item) => (
                <li className='inline-block mr-2'>{item.name}</li>
              ))}
            </ul>
          </p>
          <div className='text-left'>
            <Button>Watch now</Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
