import axios from "axios";

export const getLocation = () => {
  return axios.get("https://ipapi.co/json/");
};
