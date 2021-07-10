import axios from "axios";

export const getByQuery = (query: string) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/everything?apiKey=${process.env.REACT_APP_API_KEY}&q=${query}&pageSize=100`
  );
};
