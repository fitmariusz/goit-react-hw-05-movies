import { useQuery } from "react-query";
import { getMoviesSearch } from './getMoviesSearch';
import { Link, useLocation, useSearchParams } from "react-router-dom";


export const FetchMoviesSearch = () => { 
  const location = useLocation();
    const [searchParams] = useSearchParams();
  const querySearch = searchParams.get('query');

  const { data: moviesSearch, isLoading, error } = useQuery({ queryKey: ['getSearch'], queryFn: getMoviesSearch(querySearch) });
  console.log(moviesSearch);
  return <>
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
       {!isLoading && !error && moviesSearch.results.map(({ id, title }) =>
      <li key={id}>
        <Link to={`/Movies/${id}`}
           state={{ from: location }}
           >{title}</Link></li>)}
  </>

};