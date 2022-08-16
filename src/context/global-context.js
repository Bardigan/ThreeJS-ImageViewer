import React from "react";

const GlobalContext = React.createContext({
  token: "",
});

export const GlobalContextProvider = (props) => {
  const contextValue = {};

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
