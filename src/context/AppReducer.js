// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'ADD_QUOTE_TO_FAVORITE':
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    case 'REMOVE_QUOTE_FROM_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter((favorite) => favorite.id !== action.payload),
      };
    default:
      return state;
  }
};
