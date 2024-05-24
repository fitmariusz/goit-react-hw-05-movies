import { useQuery } from "react-query";
import { getMoviesSearch } from './getMoviesSearch';
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Li } from "../Movies.styled";


export const FetchMoviesSearch = () => { 
  const location = useLocation();
    const [searchParams] = useSearchParams();
  const querySearch = searchParams.get('query');

  const { data: moviesSearch, isLoading, error } = useQuery({ queryKey: ['getSearch'], queryFn: getMoviesSearch(querySearch) });
  console.log(moviesSearch);
  return <>
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
    {!isLoading && !error &&moviesSearch.results.map(({ id, title }) =>
      <Li key={id}>
        <Link to={`/Movies/${id}`}
           state={{ from: location }}
           >{title}</Link></Li>)}
  </>

};