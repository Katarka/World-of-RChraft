import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { changeCssVaribles } from '../function/changeCssVaribles';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

const ThemeContext = React.createContext()

export const ThemeProvider = ({ children, ...props}) => {
    let key = 'theme'; //key для локального хранилища пока что не нужен потом пригодиться
    const [theme, setTheme] = useState(null);

    const change = name => {
        setTheme(name);
        changeCssVaribles(name)
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                change
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);