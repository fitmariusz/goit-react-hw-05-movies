import { useQuery } from 'react-query'
import { getMovieFromId } from './getMovieFromId'
import {Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, Nav , DetalisCard} from '../Movies.styled';


export const FetchMovieFromId = ({ Id }) => {
    const { data: movieDetails, isLoading, error } = useQuery({ queryKey: ['getId'], queryFn: getMovieFromId(Id)});
  return <>
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
    {!isLoading && !error && 
     <div>
      {/* <BackLink to={backLinkHref}>Back to Movies</BackLink> */}
      <DetalisCard >
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                : `https://as2.ftcdn.net/v2/jpg/04/00/24/31/1000_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg`
              // defaultImg
          }
            width={ 200}
          alt="film poster"
        />
        <div >
          <h2>{movieDetails.title || movieDetails.name}</h2>
          <p>User Score: {movieDetails.vote_average}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>
            {movieDetails.genres &&
              movieDetails.genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </DetalisCard>
      <div >
        <h3>Additional Details</h3>
        <Nav >
          <Link
            // className={navData => (navData.isActive ? css.active : css.link)}
            to="Cast"
          >
            Cast
          </Link>
          <Link
            // className={navData => (navData.isActive ? css.active : css.link)}
            to="Reviews"
          >
            Reviews
          </Link>
        </Nav>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
    
    
    
    
    }
  </>
}