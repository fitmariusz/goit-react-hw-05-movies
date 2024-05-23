import { useParams} from 'react-router-dom';
import { FetchCast } from "components/utils/api/fetchCast";


export const Cast = () => {
    const { idMovie} = useParams();
    return (
        <FetchCast Id={idMovie}> Cast</FetchCast>
  );
};