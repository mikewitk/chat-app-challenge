import React from "react";
import "./App.css";
import { AppTitle, MessagesList, MessagesInput } from "./components/";

function App() {
  return (
    <div className="container">
      <AppTitle />
      <MessagesList />
      <MessagesInput />
    </div>
  );
}

export default App;
