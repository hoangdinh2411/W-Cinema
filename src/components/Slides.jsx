import {useMovies} from 'hooks';
import {memo} from 'react';
import Slider from 'react-slick';
import {Cards} from './MyComponents';

function Slides() {
  const {trendingMovies} = useMovies();
  console.log(trendingMovies);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <img
        className='w-full h-full object-cover'
        src={`https://image.tmdb.org/t/p/w500` + trendingMovies[i].backdrop_path}
        alt=''
      />
    ),
  };

  return (
    <div className=' container-0 '>
      <Slider {...settings}>
        {trendingMovies &&
          trendingMovies?.slice(0, 7).map((movie, index) => <Cards movie={movie} />)}
      </Slider>
    </div>
  );
}

export default memo(Slides);
