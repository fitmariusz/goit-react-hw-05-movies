import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { FetchMoviesSearch } from "components/utils/api/fetchMoviesSearch";


  let bool = false;

const Movies = () => {
    const [queryParams, setQueryParams] = useSearchParams("query");
    const [querySearch, setQuerySearch] = useState('');
  
  useEffect(() => {
    const query = queryParams.get('query');
    setQuerySearch(query || '');
  }, [queryParams]);
  
  const onChange = e => {
    setQuerySearch(e.target.value);
    bool = false;
  };
  const onSubmit = e => {
    bool = true;
    e.preventDefault();
    if (querySearch.trim() === ''){
      alert('Search is empty... Please enter text.');
    }
    else {
      bool = true;
      setQueryParams({ query: querySearch.trim().split(" ").join("+") });
      setQuerySearch('');
    }
    
  };


  return (
    <main>
      <form >
        <input name="searchMoviews" placeholder="Serch moviews" onChange={onChange}></input>
        <button name="Btn" onClick={onSubmit}>Search</button>
      </form>
      {bool && querySearch!=="" && <FetchMoviesSearch></FetchMoviesSearch>}
    </main>
  );
};

export default Movies;