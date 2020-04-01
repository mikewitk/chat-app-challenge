import React, { useContext } from "react";
import "./MessagesList.css";
import Message from "./components/Message";
import { GlobalContext } from "../../context/GlobalState";

export const MessagesList = () => {
  const { messages } = useContext(GlobalContext);

  return (
    <div className="messages-list-container">
      {messages.map(message => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};
