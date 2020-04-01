import React, { createContext, useReducer } from "react";
import AppReducer from "../AppReducer";

const initialState = {
  messages: [
    {
      id: 1,
      text: "Good morning y'all. We got tons to do today"
    },
    {
      id: 2,
      text: "Hey good morning!"
    },
    {
      id: 3,
      text: "Let me get my coffee first"
    },
    {
      id: 4,
      text: "Can you grab me one too?"
    },
    {
      id: 5,
      text: "Get a donut for me."
    },
    {
      id: 6,
      text: "Who is going to Tim?"
    },
    {
      id: 7,
      text: "You are now"
    },
    {
      id: 8,
      text:
        "Hey guys, I am stuck in traffic. Be a little late. Sorry about that"
    },
    {
      id: 9,
      text:
        "Ok, who left the tools on the floor yesterday? These things are too expensive to be on the weather like that. Next time, I will take it to my place"
    },
    {
      id: 10,
      text: "Hey hey hey...it wasn't me. Mines are with me...always"
    },
    {
      id: 11,
      text: "Can someone give me a hand today?"
    },
    {
      id: 12,
      text: "Yeap, what's up?"
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMessage = messageInfo => {
    return dispatch({
      type: "ADD_MESSAGE",
      payload: messageInfo
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        messages: state.messages,
        addMessage
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
