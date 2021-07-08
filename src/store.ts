import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

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

interface TopHeadlinesState {
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

// Action creators are generated for each case reducer function
export const { setTopHeadlines, addTopHeadline, removeTopHeadline } =
  TopHeadlinesSlice.actions;

const store = configureStore({
  reducer: {
    TopHeadlines: TopHeadlinesSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectTopHeadlines = (state: RootState) =>
  state.TopHeadlines.topHeadlines;

export default store;
