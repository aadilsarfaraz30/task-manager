import { ThemeActionTypes } from "../actionTypes/themeActionTypes"

export const lightTheme = () => {
    return {
        type: ThemeActionTypes.LIGHT_THEME
    }
}

export const darkTheme = () => {
    return {
        type: ThemeActionTypes.DARK_THEME
    }
}