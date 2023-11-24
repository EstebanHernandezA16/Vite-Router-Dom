import { Carrousel } from "../Carrousel/Carrousel";
import { FormReserva } from "../FormReserva/Form";
import { useContext } from "react";
import { ThemeContext } from "../../hooks/useTheme";
import { Alternate } from "../Alternate/Alternate";
import { Pros } from "../Pros/Pros";
import { Clients } from "../Clients/Clients";
export const Home = () =>{
  const {nightMode, handleNightMode, themeColors} = useContext(ThemeContext)
    return (
      <div className={`container mx-auto ${nightMode ? themeColors.dark.colors.bgPrimary : themeColors.light.colors.bgPrimary}`}>
        

        <Carrousel />
        <FormReserva />
        <Alternate />
        <Pros/>
        <Clients/>
        {/* <Carrousel /> */}
      </div>
    );
}