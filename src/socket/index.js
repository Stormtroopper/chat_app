import * as types from "../constant/ActionTypes";
import { messageReceived, populateUsersList } from "../actions";

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket("ws://localhost:8989");

  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: types.ADD_USER,
        name: username,
      })
    );
  };

  socket.onmessage = ({ data }) => {
    const message = JSON.parse(data);

    if (message.type === types.ADD_MESSAGE) {
      dispatch(messageReceived(message.message, message.author));
    } else if (message.type === types.POPULATE_USER_LIST) {
      dispatch(populateUsersList(message.users));
    }
  };

  return socket;
};

export default setupSocket;