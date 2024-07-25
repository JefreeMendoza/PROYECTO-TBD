import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import '../Components/TalleresMenu'

function PersonasMenu() {

    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path ? 'talleres-link active' : 'talleres-link';
    };


    return (
        <>
            <div>
                {/* <h2>
                Personas: 
            </h2> */}
                <ul className="talleres-list">
                    <li><Link to="/personas/ingreso" className={getLinkClass('/personas/ingreso')}>Ingresar Datos</Link></li>
                    {/*  <li><Link to="/personas/" className={getLinkClass('/personas/')}>...</Link></li>
                    <li><Link to="/personas/" className={getLinkClass('/personas/')}>...</Link></li>
                    <li><Link to="/personas/" className={getLinkClass('/personas/')}>...</Link></li> */}
                </ul>
            </div>

        </>
    );
}

export default PersonasMenu;