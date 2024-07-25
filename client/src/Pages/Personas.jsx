import NavBar from "../Components/NavBar";
import IngresoPer from "./PersonasPages/IngresoPer";
import PersonasMenu from '../Components/PersonasMenu';



function Personas() {
    return (
        <>
            <NavBar />
            <h1>
                ESTAS EN LA PAGINA DE PERSONAS
            </h1>
            <PersonasMenu />
        </>
    );
}

export default Personas;