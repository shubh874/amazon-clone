//create a data layer
//setup a basket

import React, { createContext, useReducer, useContext } from 'react';

// THIS IS THE DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children})=>(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//THIS IS HOW WE USE IT INSIDE OF A COMPONENT
export const useStateValue = ()=> useContext(StateContext);