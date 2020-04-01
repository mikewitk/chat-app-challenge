import React, { useContext, useEffect, useRef } from "react";
import "./MessagesList.css";
import Message from "./components/Message";
import { GlobalContext } from "../../context/GlobalState";

export const MessagesList = () => {
  const { messages } = useContext(GlobalContext);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () =>
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="messages-list-container">
      {messages.map(message => (
        <Message message={message} key={message.id} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
