// import { Link } from "react-router-dom";
import { useParams} from 'react-router-dom';
// import { useEffect, useState, Suspense } from 'react';
import { FetchReviews } from "components/utils/api/fetchReviews";


const Reviews = () => {
    // const backLinkHref = location.state?.from ?? '/movies';
    const { idMovie} = useParams();
  return (
    <main>
      <FetchReviews Id={idMovie}></FetchReviews>
    </main>
  );
};

export default Reviews;