import { useQuery } from "react-query";
import { getCast } from "./getCast";

export const FetchCast = ({ Id }) => {
  //  const backLinkHref = location.state?.from ?? '/movies';
  // console.log(Id);
    const { data: cast, isLoading, error } = useQuery({ queryKey: ['getCast'], queryFn: getCast(Id)});
  return <>
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && !error && cast.cast.map(actor =>
                (
                    <li key={actor.id}>
                            <h3>{actor.name}</h3>
                            <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`: `https://as2.ftcdn.net/v2/jpg/04/00/24/31/1000_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg`
                            }
                           
                            alt={actor.name}
                            width={100}
                            />
                            <p >
                                <span >Role:</span>{' '}
                                <span >
                                {actor.character === '' ? 'unknown' : actor.character}
                                </span>
                            </p>
                    </li>
                ))
            }
        </>
}