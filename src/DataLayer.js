import React, {
       createContext,
       useContext,
       useReducer
} from "react";

export const DataLayerContext = createContext();

//children is what is wrapped, in this case, the App component
export const DataLayer = ({ initialState, reducer, children }) => (
       <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
              {children}
       </DataLayerContext.Provider>
);


export const useDataLayerValue = () => useContext(DataLayerContext);
