let movies = [
  {
    id: 0,
    name: 'jh3618.kim',
    score: 30
  },
  {
    id: 1,
    name: 'dadfd',
    score: 30
  },
  {
    id: 2,
    name: 'fdgeim',
    score: 30
  },
  {
    id: 3,
    name: 'geim',
    score: 30
  },
  {
    id: 4,
    name: 'jh3qwqwm',
    score: 30
  },
  {
    id: 5,
    name: 'jsdkim',
    score: 30
  }
];
export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
