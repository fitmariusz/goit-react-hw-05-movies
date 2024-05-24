// import { useEffect, useState } from "react";
// import axios from 'axios'
// import { nanoid } from "nanoid";
import { FetchTrends } from "components/utils/api/fetchTrending";

const Home = () => {
  // const [topFilms, setTopFilms] = useState();

  return (
    <main>
      <h1>Trending movies</h1>
      <ul>
        <FetchTrends></FetchTrends>
      </ul>
    </main>
  );
};

export default Home;