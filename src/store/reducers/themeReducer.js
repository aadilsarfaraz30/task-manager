import { ThemeActionTypes } from "../actionTypes/themeActionTypes";

const initialState = {
 theme: 'light'
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
        case ThemeActionTypes.LIGHT_THEME: 
        return { ...state, theme: 'light'}
        case ThemeActionTypes.DARK_THEME: 
        return { ...state, theme: 'dark'}
    default:
      return state;
  }
};

export default themeReducer;
