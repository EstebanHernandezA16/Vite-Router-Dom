import { useContext } from "react";
import { ThemeContext } from "../../../hooks/useTheme";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faS } from '@fortawesome/free-solid-svg-icons';
import { faSun } from "@fortawesome/free-solid-svg-icons";




export const Switch = () =>{


  const {nightMode, handleNightMode} = useContext(ThemeContext)
  return (
    <>
    
    <div
      className={`relative rounded-full w-14 h-7 bg-gray-300 dark:bg-gray-600 p-1 flex items-center cursor-pointer ${
        nightMode
          ? 'bg-primary-500 dark:bg-primary-300'
          : 'bg-gray-300 dark:bg-gray-600'
      }`}
      onClick={handleNightMode}
    >
      <div
        className={`w-5 h-5 rounded-full shadow-md transform ${
          nightMode ? 'translate-x-7' : ''
        } bg-white dark:bg-gray-900`}
      >
        {nightMode ? (<> 
          <FontAwesomeIcon icon={faMoon} color="azure"/>
        </>):(<>
       {/* sun */}
       <FontAwesomeIcon icon={faSun} color="yellow"/>
        </>)}

      </div>
    </div>
    </>
  );
}