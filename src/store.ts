import { configureStore } from "@reduxjs/toolkit";
import { SearchResultsSlice } from "./SearchResultsRedux";
import { TopHeadlinesSlice } from "./TopHeadlinesRedux";

export interface IHeadline {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

const store = configureStore({
  reducer: {
    TopHeadlines: TopHeadlinesSlice.reducer,
    SearchResults: SearchResultsSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectTopHeadlines = (state: RootState) =>
  state.TopHeadlines.topHeadlines;

export const selectSearchResults = (state: RootState) =>
  state.SearchResults.searchResults;

export default store;
