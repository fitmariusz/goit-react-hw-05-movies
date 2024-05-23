import { useState } from "react";
import { useSearchParams } from "react-router-dom"

export const MoviesSearch = () => { 
    const [queryParams, setQueryParams] = useSearchParams("query");
    const [querySearch, setQuerySearch] = useState('');

    const onChange = (name) => { 

        
    };
    <form >
        <input name="searchMoviews" placeholder="Serch moviews" onChange={onChange(e.target.value)}></input>
        <button name="Btn" onClick={onSubmit}>Search</button>
      </form>
};

