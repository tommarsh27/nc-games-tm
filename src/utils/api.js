import axios from "axios";

export const getReviews = (category) => {
    return axios
    .get('https://be-games-project-tm.herokuapp.com/api/reviews', {params: {category}})
    .then(({ data }) => {
      return data.reviews;
    });
}