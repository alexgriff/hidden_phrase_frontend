import {
  NEW_CLUE,
  LOAD_GAME
} from '../actions/actions'

export default (state, action) => {
  switch (action.type) {
    case NEW_CLUE:
    case LOAD_GAME:
      return { word: action.clue.word, number: action.clue.number };
    default:
      return state;
  }
};
