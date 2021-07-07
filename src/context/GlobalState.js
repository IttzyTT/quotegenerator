import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// inital state
const initalState = {
  favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
};

// create context
export const GlobalContext = createContext(initalState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }, [state]);

  // actions
  const addFavorite = (data) => {
    dispatch({ type: 'ADD_QUOTE_TO_FAVORITE', payload: data });
  };

  const removeQuotefromFavorites = (id) => {
    dispatch({ type: 'REMOVE_QUOTE_FROM_FAVORITE', payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favorites: state.favorites,
        addFavorite,
        removeQuotefromFavorites,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
