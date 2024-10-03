import React from "react";
import { Nav } from './Nav';
import './Css/style.css';
import { Link } from "react-router-dom";


export const SolicitudCrear= () => {
    return(
        <>
        <Nav></Nav>
        <Link to="/Solicitud">
        <button type="button" className="btn btn-secondary">Volver</button>
        </Link>
        <div><center>
            <form className="form-table-to-create-Solicitud">
                <h2 className="title-to-Solicitud">Hola,<br /> ¿En que te puedo ayudar?</h2>
                <div >
                    <input className="application-section-SolicitudCrear" type="text" placeholder="Nombre Completo"/>
                </div>
                <div>
                    <input className="application-section-SolicitudCrear" type="text" placeholder="Nombre de la solicitud"/>
                </div>
                <div>
                    <input className="application-section-SolicitudCrear" type="text" placeholder="RUT (sin Guion, ni punto)"/>
                </div>
                <div >
                    <input className="application-section-SolicitudCrear" type="email" placeholder="Email"/>
                </div>
                <div>
                    <textarea className="application-section-SolicitudCrear" rows="8" placeholder="Deja tu mensaje"></textarea>
                </div>
                <div>
                <center>
                    <Link to='./Solicitud'>
                    <button type="button" className="btn btn-secondary">Enviar</button>
                    </Link>
                </center>
                </div>
            </form>
            </center>
        </div>
        </>
    )
}