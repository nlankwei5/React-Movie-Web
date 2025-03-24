const API_KEY = "f7311b1928e41b1cffb9f3c8f6682b99"; // Generate your own APi key at themoviedb.org. this is just a dummmy version. 
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )} `
  );
  const data = await response.json();
  return data.results;
};
