import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) =>{

    const [nightMode, setNightMode]= useState(false)

    // const themeColors = {
    //     dark:{
    //         colors:{
    //             bgPrimary:'#181c2c',
    //             bgSecondary:'#202c44',
    //             text:'#ffffff',
    //             border:'#ffffff',
    //             hover:'#000080',
    //         }
    //     },
    //     light:{
    //         colors:{
    //             bgPrimary:'#ffffff',
    //             text:'#000000',
    //             bgSecondary:'#c9c9c9',
    //             border:'#000000',
    //             hover:'#87CEEB',
    //         }
    //     }
    // }

    //Tailwind colors
    const themeColors = {
        dark:{
            colors:{
                bgPrimary:'bg-dark-primary',
                bgSecondary:'bg-dark-secondary',
                text:'text-white',
                border:'border-white',
                hover:'hover:bg-blue-800',
            }
        },
        light:{
            colors:{
                bgPrimary:'bg-slate-100',
                text:'text-black',
                bgSecondary:'bg-gray-300',
                border:'border-black',
                hover:'hover:bg-blue-300',
            }
        }
    }
    const handleNightMode = () =>{
        setNightMode(!nightMode)
    }

    return(
        <ThemeContext.Provider value={{nightMode, handleNightMode, themeColors}}>
        {children}
        </ThemeContext.Provider>
    );
}


export const useTheme = () => useContext(ThemeContext);