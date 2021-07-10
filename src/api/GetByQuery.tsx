import axios from "axios";

export const getByQuery = (query: string, sort: string) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/everything?apiKey=${process.env.REACT_APP_API_KEY}&q=${query}&sortBy=${sort}&pageSize=100`
  );
};
