import React, { createContext, useContext, useReducer } from "react";
//Context API
export const DataLayerContext = createContext();

//children refers to <App />
export const DataLayer = ({ reducer, initialState, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);