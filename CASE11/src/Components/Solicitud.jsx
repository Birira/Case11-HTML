import React from "react";
import { Nav } from './Nav';
import './Css/style.css'
import {Link} from "react-router-dom"


export const Solicitud = () => {
    return(
        <>
        <Nav></Nav>
        <div>
            <div className="title-to-Solicitud">
                <h1>Solicitud de pañol</h1>
            </div>
            <br />
            <div>
                <center>
                    <CuadrosInteractivos 
                        titulo="Crear Solicitud" 
                        texto="Permite a alumnos y docentes solicitar recursos de Pañol para sus actividades académicas a través de un formulario sencillo" 
                        direccion= "/SolicitudCrear"
                        nombreButton="Crear" 
                        />
                    <CuadrosInteractivos
                        titulo="Consultar Solicitudes" 
                        texto="El pañolero revisa todas las solicitudes enviadas, organizadas en una tabla, y puede acceder a su validación o edición." 
                        direccion="/SolicitudCon" 
                        nombreButton="Consultar"
                    />
                </center>
            </div>
        </div>
        </>
    )

}


const CuadrosInteractivos = ({ titulo = "", texto = "", direccion = "", nombreButton = ""}) => {
    return (
        <div className="card-to-Solicitud">
            <h2>{titulo}</h2>
            <p>{texto}</p>
            {nombreButton && (
                <Link to={direccion}>
                    <button type="button" className="btn btn-secondary">{nombreButton}</button>
                </Link>
            )}
        </div>
    );
}
