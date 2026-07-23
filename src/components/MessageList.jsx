import Message from "./Message";

function MessagesList({ messages }) {
  return (
    <section>
      <ul>
        {messages.map((message) => (
          <Message
            key={message.id}
            id={message.id}
            author={message.author}
            message={message.message}
          />
        ))}
      </ul>
    </section>
  );
}

export default MessagesList;