import React from "react";
import "./App.css";
import { AppTitle, MessagesList, MessagesInput } from "./components/";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <AppTitle />
        <MessagesList />
        <MessagesInput />
      </div>
    </GlobalProvider>
  );
}

export default App;
