import React from "react";
import "./MessagesInput.css";

export const MessagesInput = () => {
  return (
    <form className="input-container">
      <textarea
        rows="3"
        placeholder="Type a message"
        type="text"
        className="input-textarea"
      />
      <button className="input-button">Send</button>
    </form>
  );
};
