import { Carrousel } from "../Carrousel/Carrousel";
import { FormReserva } from "../FormReserva/Form";



export const Home = () =>{
    return (
      <div className="container mx-auto bg-cyan-300">
        <text style={{ textAlign: "center" }}>Hotel</text>

        <Carrousel />
        <FormReserva />
        <Carrousel />
      </div>
    );
}