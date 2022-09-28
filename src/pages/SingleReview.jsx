import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ReviewCard from "../components/ReviewCard";


const SingleReview = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [review, setReview] = useState({});
    const {review_id} = useParams();

    useEffect(() => {
        setIsLoading(true);
        axios
        .get(`https://be-games-project-tm.herokuapp.com/api/reviews/${review_id}`)
        .then(({data}) => {
            const {review} = data;
            setReview(review);
            setIsLoading(false);
        })
    }, [review_id]);

    return (
        <section>
            <Loading isLoading={isLoading}>
                <ReviewCard review={review} />
            </Loading>
        </section>
    )
}

export default SingleReview