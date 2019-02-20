import {
  LOAD_GAME,
  UPDATE_BOARD,
  REVEAL_IDENTITY
} from '../actions/actions'

export default (state, action) => {
  switch (action.type) {
    case LOAD_GAME:
    case UPDATE_BOARD:
      return action.cards;
    case REVEAL_IDENTITY:
      return state.map(card => {
        return card.word === action.word ? { ...card, known: true } : card;
      });
    default:
      return state;
  }
};
