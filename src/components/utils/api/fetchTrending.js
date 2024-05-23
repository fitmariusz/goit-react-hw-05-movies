
import { useQuery } from 'react-query'
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from './getTrending'

export const FetchTrends = () => {
  const location = useLocation();
    const { data: moviesTreading, isLoading, error } = useQuery({ queryKey: ['get'], queryFn: getTrending});
  return <>
    <p></p>
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
    {!isLoading && !error && moviesTreading.results.map(({ id, title }) =>
      <li key={id}>
        <Link to={`/Movies/${id}`}
           state={{ from: location }}
           >{title}</Link></li>)}
  </>
}