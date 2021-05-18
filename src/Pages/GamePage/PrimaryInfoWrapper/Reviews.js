import React, {useContext, useEffect, useState} from "react"
import Review from "./Review.js"
import MediaContext from "../MediaContext.js";

function Reviews() {
    const {game} = useContext(MediaContext)
    const [reviewArr, setReviewArr] = useState([])

    useEffect(() => {
        fetch(game._links.reviews.href)
            .then(reviewsResponse => reviewsResponse.json())
            .then(reviewsResult => setReviewArr(reviewsResult._embedded.reviews))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1>Reviews</h1>
            <div className="ReviewsList">
                {
                    reviewArr && (
                        reviewArr.map(review => {
                            return <Review reviewText={review.reviewText} score={review.score.score} userUrl={review._links.user.href}/>
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Reviews