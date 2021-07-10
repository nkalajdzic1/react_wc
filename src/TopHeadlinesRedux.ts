import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHeadline } from "./store";

export interface TopHeadlinesState {
  topHeadlines: IHeadline[];
}

const initialState: TopHeadlinesState = {
  topHeadlines: [],
};

export const TopHeadlinesSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setTopHeadlines: (state, action: PayloadAction<IHeadline[]>) => {
      state.topHeadlines = action.payload;
    },
    addTopHeadline: (state, action: PayloadAction<IHeadline>) => {
      state.topHeadlines = [
        ...state.topHeadlines,
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
    removeTopHeadline: (state, action: PayloadAction<IHeadline>) => {
      state.topHeadlines = state.topHeadlines.filter(
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

export const { setTopHeadlines, addTopHeadline, removeTopHeadline } =
  TopHeadlinesSlice.actions;
