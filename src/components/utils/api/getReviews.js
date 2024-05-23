export const getReviews = Id => async () => {
    const API_KEY = '064bc5fa04e70ee06b5bfcffdd0028ff'
    // const query = `https://api.themoviedb.org/3/movie/693134/reviews?language=en-US&api_key=064bc5fa04e70ee06b5bfcffdd0028ff`
  const query = `https://api.themoviedb.org/3/movie/${Id}/reviews?language=en-US&api_key=${API_KEY}`
  const response = await fetch(query)
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};