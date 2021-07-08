import axios from "axios";
import { Component } from "react";

export const getTopHeadlines = () =>
  axios.get(
    `${process.env.REACT_APP_API_URL}/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
  );
