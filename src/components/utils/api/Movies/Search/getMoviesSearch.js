

export const getMoviesSearch = querySearch => async () => {
    const API_KEY = '064bc5fa04e70ee06b5bfcffdd0028ff'
  const query =  `https://api.themoviedb.org/3/search/movie?query=${querySearch}&api_key=${API_KEY}`
    const response = await fetch(query)
    
  if (!response.ok) {
    throw new Error('Network response was not ok');
    }
  return response.json();
};