import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHeadline } from "./store";

export interface SearchResultsState {
  searchResults: IHeadline[];
}

const initialState: SearchResultsState = {
  searchResults: [],
};

export const SearchResultsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<IHeadline[]>) => {
      state.searchResults = action.payload;
    },
    addSearchResult: (state, action: PayloadAction<IHeadline>) => {
      state.searchResults = [
        ...state.searchResults,
        {
          author: action.payload.author,
          content: action.payload.content,
          description: action.payload.description,
          publishedAt: action.payload.publishedAt,
          source: {
            id: action.payload.source.id,
            name: action.payload.source.name,
          },
          title: action.payload.title,
          url: action.payload.url,
          urlToImage: action.payload.urlToImage,
        },
      ];
    },
    removeSearchResult: (state, action: PayloadAction<IHeadline>) => {
      state.searchResults = state.searchResults.filter(
        (x) =>
          x.author !== action.payload.author &&
          x.content !== action.payload.content &&
          x.description !== action.payload.description &&
          x.publishedAt !== action.payload.publishedAt &&
          x.source.id !== action.payload.source.id &&
          x.source.name !== action.payload.source.name &&
          x.title !== action.payload.title &&
          x.url !== action.payload.url &&
          x.urlToImage !== action.payload.urlToImage
      );
    },
  },
});

export const { setSearchResults, addSearchResult, removeSearchResult } =
  SearchResultsSlice.actions;
