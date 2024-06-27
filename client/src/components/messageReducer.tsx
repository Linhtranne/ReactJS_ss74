// src/reducers/messageReducer.js
import { SHOW_MESSAGE } from './actions';

const messageReducer = (state = null, action: { type: any; payload: { text: any; messageType: any; }; }) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return { text: action.payload.text, type: action.payload.messageType };
    default:
      return state;
  }
};

export default messageReducer;
