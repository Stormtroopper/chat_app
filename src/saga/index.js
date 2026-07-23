const handleMessage = ({ socket, username }, action) => {
  const updatedAction = {
    ...action,
    author: username,
  };

  socket.send(JSON.stringify(updatedAction));
};

export default handleMessage;