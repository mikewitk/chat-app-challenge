import React, { useContext, useState } from "react";
import "./MessagesInput.css";
import { GlobalContext } from "../../context/GlobalState";

export const MessagesInput = () => {
  const [textMessage, setTextMessage] = useState("");
  const { messages, addMessage } = useContext(GlobalContext);

  const handleSubmit = event => {
    event.preventDefault();
    const newMessage = {
      id: messages.length + 1,
      text: textMessage
    };
    addMessage(newMessage);
  };

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        placeholder="Type a message"
        type="text"
        className="input-textarea"
        onChange={e => setTextMessage(e.target.value)}
        required={true}
      />
      <button className="input-button">Send</button>
    </form>
  );
};
