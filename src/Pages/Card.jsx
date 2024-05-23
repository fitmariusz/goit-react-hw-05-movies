import { FetchMovieFromId } from "components/utils/api/fetchMovieFromId";
import { Link, useLocation } from "react-router-dom";
import { useParams} from 'react-router-dom';
// import { useEffect, useState, Suspense } from 'react';

// location.state?.from ?? 

export const Card = () => {
   const  backLinkHref= useLocation().state?.from ?? "/Moves";
    const { idMovie} = useParams();
    
  return (
    <main>
      <Link to={backLinkHref}>Go beck</Link>
      <FetchMovieFromId Id={idMovie}></FetchMovieFromId>
    </main>
  );
};