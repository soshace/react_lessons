import { ADD_COMMENT, FETCH_COMMENT_REQUEST, FETCH_COMMENT_FAILURE, FETCH_COMMENT_SUCCESS } from "../types";
import { Record } from "immutable";
import { recordsFromArray } from "./utils";

const Comment = Record({
  id: null,
  user: "",
  text: ""
});

const defaultComments = recordsFromArray(Comment, []);

const INITIAL_STATE = {
  comments: defaultComments,
  isFetching: false,
  errors: [],
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
    case FETCH_COMMENT_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_COMMENT_FAILURE:
      return { ...state, isFetching: false, errors: state.errors.push(action.error) };
    case FETCH_COMMENT_SUCCESS:
      return { ...state, isFetching: false, comments: recordsFromArray(Comment, action.payload) };
    default:
      return state;
  }
};
