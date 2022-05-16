import {useMovies} from 'hooks';
import {useState} from 'react';

function Slides() {
  const {trendingMovies} = useMovies();
  const [selectedFilm, setSelectedFilm] = useState(trendingMovies[0].id);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const windowWidth = window.innerWidth;

  const handleChangeMovie=(movieId)=>{
    const index = trendingMovies?.slice(0, 6).findIndex(movie=>movie.id === movieId)
    setCurrentTranslateX((index+1) *windowWidth)
  }
  return (
    <section className={`container-0  my-20 relative`}>
      <aside className=' z-40 relative p-4'>
        <ul className={`inline-block w-full absolute  -translate-x-${currentTranslateX}`}>
          {trendingMovies &&
            trendingMovies?.slice(0, 6).map((movie) => (
              <li
                className={`px-2
                h-[676px] 
              opacity-${movie.id === selectedFilm ? '1' : '0'}  
              object-cover cursor-pointer w-full h-full flex items-center`}
                onClick={() => setSelectedFilm(movie)}
              >
                <img
                  className='w-full h-full object-contain'
                  src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
                  alt=''
                />
              </li>
            ))}
        </ul>
        <aside class='w-1/2 h-1/2 z-10 grid grid-cols-3 absolute right-0 bottom-0 '>
          {trendingMovies &&
             trendingMovies?.slice(0, 6).map((movie) => (
              <aside
                className='px-2 object-cover cursor-pointer w-full h-full flex items-center'
                onClick={handleChangeMovie(movie.id)}
              >
                <img
                  className='w-full h-full object-contain'
                  src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
                  alt=''
                />
              </aside>
            ))}
        </aside>
      </aside>
    </section>
  );
}

export default Slides;
