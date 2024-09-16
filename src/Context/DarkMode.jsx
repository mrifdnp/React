/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const DarkModeContext=createContext()

const DarkModeContextProvider = ({children})=>{
    const [isDarkMode, setIsDarkMode] = useState(true)
    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}  
        </DarkModeContext.Provider>
    )
}

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider