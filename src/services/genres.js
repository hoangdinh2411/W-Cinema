import genresList from 'assets/data/genres.json';
export const getGenresOfMovie = (genresIds) => {
  return genresList.genres.filter((genre) => {
    return genresIds.includes(genre.id);
  });
};
