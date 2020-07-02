import { ADD_COMMENT } from "../types";
import { normalizedComments } from "../fixtures";
import { Record } from "immutable";
import { recordsFromArray } from "./utils";

const Comment = Record({
  id: null,
  user: "",
  text: ""
});

const defaultComments = recordsFromArray(Comment, normalizedComments);

const INITIAL_STATE = {
  comments: defaultComments
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state, comments: state.comments.set(
          action.randomId,
          new Comment({
            id: action.randomId,
            user: action.payload.user,
            text: action.payload.text,
          })
        )}
    default:
      return state;
  }
};
