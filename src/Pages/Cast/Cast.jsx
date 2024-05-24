import { useParams} from 'react-router-dom';
import { FetchCast } from "components/utils/api/Cast/fetchCast";


const Cast = () => {
    const { idMovie} = useParams();
    return (
        <FetchCast Id={idMovie}> Cast</FetchCast>
  );
}; export default Cast;