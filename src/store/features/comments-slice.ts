import { createSlice, Slice, PayloadAction } from "@reduxjs/toolkit";

export interface CommentsState {
  comments: Array<IComment>;
}

const initialState: CommentsState = {
  comments: [],
};

export const commentsSlice: Slice<CommentsState> = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    addComments: (
      state: CommentsState,
      action: PayloadAction<IComment[]>
    ): void => {
      state.comments = action.payload;
    },
  },
});

export default commentsSlice.reducer;
export const { addComments } = commentsSlice.actions;
