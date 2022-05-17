import {useMovies} from 'hooks';
import {memo} from 'react';
import Slider from 'react-slick';
import {getGenresOfMovie} from 'services/genres';
import {getYear} from 'services/formatDate';
import {Link} from 'react-router-dom';
import {Button} from 'components/MyComponents';
function Slides() {
  const {trendingForTheDayMovies} = useMovies();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <img
        className=' z-10 w-full h-full object-cover'
        src={`https://image.tmdb.org/t/p/w500` + trendingForTheDayMovies[i].backdrop_path}
        alt=''
      />
    ),
  };
  return (
    <div className=' container-0 relative w-full'>
      <Slider {...settings}>
        {trendingForTheDayMovies &&
          trendingForTheDayMovies?.slice(0, 7).map((movie, index) => (
            <>
              <Link to={`/movie/${movie.id}`}>
                <div className='relative'>
                  <img
                    className='w-full h-full object-cover rounded-lg'
                    src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
                    alt=''
                  />
                  <div className=' text-white absolute w-2/3 top-1/2 -translate-y-1/2 left-4 pl-5'>
                    <p className=' hover:text-sky-400 text-6xl uppercase font-bold  mb-6 tracking-wide text-left'>
                      {movie.title}
                    </p>
                    <p className=' hover:text-sky-400 text-md flex font-normal mb-5  text-left'>
                      <span className='h-5 mr-3 relative'>
                        {getYear(movie.release_date)}
                        <span className='block absolute top-1 -right-2  bg-white w-0.5 h-full'></span>
                      </span>
                      <div className='hover:text-sky-400 w-auto flex-1 relative  '>
                        {getGenresOfMovie(movie.genre_ids).map((item) => (
                          <span className='inline-block mr-2'>{item.name}</span>
                        ))}
                      </div>
                    </p>
                    <div className='text-left'>
                      <Button>Watch now</Button>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
      </Slider>
      <div className=' z-10 absolute -bottom-2   w-full h-14 bg-gradient-to-t from-slate-700 '></div>
    </div>
  );
}

export default memo(Slides);
