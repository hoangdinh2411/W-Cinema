import {Button, Cards} from 'components/MyComponents';
import {useMovies} from 'hooks';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {RiArrowRightSFill} from 'react-icons/ri';
function PopularMovies() {
  const [amountShowedMovies, setAmountShowedMovies] = useState(11);
  const [canShowMore, setCanShowMore] = useState(true);
  const {popularMovies} = useMovies();
  const moreNumb = 7;
  const handleSeeMore = () => {
    const newAmount = amountShowedMovies + moreNumb;
    setAmountShowedMovies(newAmount);

    if (popularMovies.length - newAmount < moreNumb) {
      setCanShowMore(false);
    }
  };
  if (!popularMovies) return;
  return (
    <section className='container-0 my-20'>
      <div className='flex flex-wrap justify-around px-4'>
        <aside className='w-2/5 mb-4 h-[240px] mr-6 text-gray-400 relative pr-5'>
          <span className='block absolute -top-3 left-0  bg-gray-400 w-1/6 h-[1px] '></span>

          <h3 className='text-4xl font-bold text-gray-100 w-2/3 leading-normal mb-4'>
            Popular Movies to Watch Now
          </h3>
          <p className='pb-4 border-b border-gray-400 mb-3'>Most watched movies by days</p>
          <Link className='hover:text-sky-400 text-md flex w-1/3 font-semibold items-center duration-300' to='/popular'>
            <span>VIEW ALL</span>
            <RiArrowRightSFill class='ml-1 text-xl mt-1' />
          </Link>
        </aside>
        {popularMovies.map((movie, index) => (
          <Cards movie={movie} index={index} amountShowedMovies={amountShowedMovies} />
        ))}
      </div>
      <div className='text-center my-4'>
        <Button onClick={handleSeeMore}>
          {canShowMore ? 'See more' : <Link to='/popular'>See more</Link>}
        </Button>
      </div>
    </section>
  );
}

export default PopularMovies;
