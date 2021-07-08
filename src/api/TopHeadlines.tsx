import axios from "axios";

export const getTopHeadlines = (country: string) =>
  axios.get(
    `${process.env.REACT_APP_API_URL}/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=100`
  );
