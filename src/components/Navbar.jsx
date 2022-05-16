import React, {useState} from 'react';
import logo from 'assets/images/logo.png';
import {useGenres} from 'hooks';
import {NavLink, Link} from 'react-router-dom';
const links = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    children: false,
  },
  {
    id: 2,
    title: 'New films ',
    path: '/new-films',
    children: false,
  },
  {
    id: 3,
    title: 'Genres',
    path: '/genres',
    children: true,
  },
  {
    id: 4,
    title: 'Top films',
    path: '/top-films',
    children: false,
  },
  {
    id: 5,
    title: 'Upcoming',
    path: '/upcoming',
    children: false,
  },
];
function Navbar() {
  const [showGenresList, SetShowGenresList] = useState(false);
  const {genresList} = useGenres();
  const formatGenreNameToPath = (gerceName) => {
    return gerceName.toLowerCase().split(' ').join('-');
  };
  return (
    <header className='container-0 px-8 shadow mx-0 z-50 flex bg-white fixed top-0 left-0 right-0'>
      <aside className='h-20 w-32'>
        <Link to='/' className='hover:opacity-60 '>
          <img className='h-full w-full object-contain ' src={logo} alt='' />
        </Link>
      </aside>
      <nav className='flex-1 '>
        <ul className='ml-auto w-1/2 mr-6 z-20'>
          {links.map((link) => (
            <NavLink
              key={link.id}
              style={({isActive}) => {
                return {
                  color: isActive ? 'rgb(56 189 248)' : 'black',
                };
              }}
              to={link.path}
              className={`text-lg   font-semibold p-3  inline-flex h-20 relative  w-1/5 justify-center items-center`}
              onMouseOver={link.children ? () => SetShowGenresList(true) : () => {}}
              onMouseOut={link.children ? () => SetShowGenresList(false) : () => {}}
            >
              <li
                key={link.id}
                className={`w-full text-center ${link.children ? '' : 'hover:text-sky-400 '}`}
              >
                {link.title}
                {link.children && genresList ? (
                  <div
                    className={`rounded-md ${
                      showGenresList ? 'z-0' : '-z-10'
                    } bg-slate-100 duration-700 opacity-${showGenresList ? '1' : '0'}  
                    ${showGenresList ? 'translate-y-4' : '-translate-y-60'}
                    absolute right-0 
                    top-[60px]
                    p-4
                    w-128 shadow bg-white`}
                    onMouseOver={link.children ? () => SetShowGenresList(true) : () => {}}
                  >
                    <div className=' grid grid-cols-5  w-full '>
                      {genresList.map((genre) => (
                        <div
                          key={genre.id}
                          className=' hover:underline text-black font-semibold text-sm hover:text-sky-400 text-left w-full h-8 p-2'
                        >
                          <Link to={`genres/${formatGenreNameToPath(genre.name)}`}>
                            {genre.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
      <aside className='h-20  w-20 flex justify-center items-center'>
          Login</aside>
    </header>
  );
}

export default Navbar;
