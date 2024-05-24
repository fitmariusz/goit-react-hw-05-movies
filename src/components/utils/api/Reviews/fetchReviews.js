import { useQuery } from "react-query";
import { getReviews } from "./getReviews";

export const FetchReviews = ({ Id }) => {
    const { data: reviews, isLoading, error } = useQuery({ queryKey: ['getReviews'], queryFn: getReviews(Id)});
  return <>
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
      {!isLoading && !error &&
         <ul >
      {!reviews.results ||
        (reviews.results.length === 0 && <div>There is no reviews yet.</div>)}
      {reviews.results.map(review => (
        <li  key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
            }
        </>
}