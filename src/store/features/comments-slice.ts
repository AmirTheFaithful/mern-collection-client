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
    addComment: (
      state: CommentsState,
      action: PayloadAction<IComment>
    ): void => {
      state.comments.push({
        authorID: action.payload.authorID,
        content: action.payload.content,
        publicationDate: action.payload.publicationDate,
      });
    },
  },
});

export default commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;
