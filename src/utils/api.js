import axios from "axios";

const gamesApi = axios.create({
  baseURL: 'https://be-games-project-tm.herokuapp.com/api'
})

export const getReviews = (category) => {
    return gamesApi
    .get('/reviews', {params: {category}})
    .then(({ data }) => {
      return data.reviews;
    });
}

export const getComments = (review_id) => {
  return gamesApi
  .get(`/reviews/${review_id}/comments`)
  .then(({ data }) => {
    return data.comments;
  })
}