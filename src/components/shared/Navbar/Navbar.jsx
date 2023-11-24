import { NavLink } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";
import { useState } from "react";
import { Switch } from "../Switch/Switch";


export const Navbar = () => {
    const {themeColors, nightMode} = useTheme()
    
    const selected = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-mono bg-slate-100">
      <ul className="flex items-center gap-3 ">
        <li className="font-semibold, text-lg">
          <NavLink to="/" className={({isActive}) => isActive ? selected: undefined}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => isActive ? selected: undefined}>Sobre Nosotros</NavLink>
        </li>
        {/* <li>  
          <NavLink to="/forum" className={({isActive}) => isActive ? selected: undefined}>Forum</NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/charts" className={({isActive}) => isActive ? selected: undefined}>Charts</NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/Excel" className={({isActive}) => isActive ? selected: undefined}>Upload Excel</NavLink>
        </li> */}
        <li>
          {/* <text>Night Mode</text> */}
          {/* <input 
          type="checkbox"
          checked={nightMode}
          onChange={handleNightMode}/> */}
          <Switch/>
        </li>
      </ul>
    </nav>
  );
};
