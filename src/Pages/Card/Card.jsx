import { FetchMovieFromId } from "components/utils/api/Movies/FromId/fetchMovieFromId";
import { Link, useLocation } from "react-router-dom";
import { useParams} from 'react-router-dom';
// import { useEffect, useState, Suspense } from 'react';

// location.state?.from ?? 
const Card = () => {
   const  backLinkHref= useLocation().state?.from ?? "/Movies";
    const { idMovie} = useParams();
    
  return (
    <main>
      <Link to={backLinkHref}>Go beck</Link>
      <FetchMovieFromId Id={idMovie}></FetchMovieFromId>
    </main>
  );
};

export default Card;