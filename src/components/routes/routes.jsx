import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Navbar } from "../shared/Navbar/Navbar";
import { App } from "../../App";
import { Home } from "../Home/Home";
import { SignIn } from "../SignIn/SignIn";
import { Footer } from "../shared/Footer/Footer";
import { NotFound } from "../NotFound/NotFound";
import { useTheme } from "../../hooks/useTheme";

const Dashboard = () =>{
const {themeColors, nightMode} = useTheme();

    console.log(themeColors.light.colors.bgPrimary);
    // ${nightMode? themeColors.dark.colors.bgPrimary : themeColors.light.colors.bgPrimary }
    // ${nightMode? themeColors.light.colors.bgPrimary : themeColors.dark.colors.bgPrimary}
    // {`h-11 ${nightMode? themeColors.dark.colors.bgPrimary : themeColors.light.colors.bgPrimary} top-0`}
    
    return(
    <div className="font-mono flex flex-col text-center">
        <div className={`h-11 ${nightMode? themeColors.dark.colors.bgPrimary : themeColors.light.colors.bgPrimary} top-0`}><Navbar/></div>
        <div className={`h-screen ${nightMode? themeColors.dark.colors.bgPrimary : themeColors.light.colors.bgPrimary}`} ><Outlet/></div>
        <div className={`h-24 ${nightMode? themeColors.dark.colors.bgPrimary : themeColors.light.colors.bgPrimary} bottom-0`} ><Footer/></div>
    </div>
    );
}

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Dashboard/>,
        children:[{
            path:"/",
            element:<Home/>
        },
        {
            path:"/signin",
            element:<SignIn/>
        },
        {
            path:"/*",
            element:<NotFound/>
        }
    
    ]
    }
])