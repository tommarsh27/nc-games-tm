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

export const patchReviews = (review_id, vote) => {
  return gamesApi.patch(`/reviews/${review_id}`, {inc_votes: vote})
  .then((res) => {
    return res.data;
  });
};