import React, { useContext, useEffect, useState } from "react";
import "./MessagesInput.css";
import { GlobalContext } from "../../context/GlobalState";

export const MessagesInput = () => {
  const [textMessage, setTextMessage] = useState("");
  const [rows, setRows] = useState(1);
  const { messages, addMessage } = useContext(GlobalContext);

  const handleSubmit = event => {
    event.preventDefault();
    const newMessage = {
      id: messages.length + 1,
      text: textMessage
    };
    addMessage(newMessage);
    setTextMessage("");
  };

  const rowsHandler = event => {
    let currentRows = rows;

    if (event.charCode === 13 && rows < 3) {
      setRows(currentRows + 1);
    }
  };

  useEffect(() => {
    let splitByEnter = textMessage.split("\n");
    if (splitByEnter.length < 3) {
      setRows(splitByEnter.length);
    }
  }, [textMessage]);

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <textarea
        placeholder="Type a message"
        className="input-textarea"
        onChange={e => setTextMessage(e.target.value)}
        required={true}
        rows={rows}
        onKeyPress={e => rowsHandler(e)}
        value={textMessage}
      />
      <button className="input-button">Send</button>
    </form>
  );
};
