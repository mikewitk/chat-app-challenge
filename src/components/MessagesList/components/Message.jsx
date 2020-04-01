import React from "react";
import "./Message.css";

const Message = ({ message }) => {
  const { text } = message;

  return <div className="message">{text}</div>;
};

export default Message;
