import React from "react";
import { Nav } from './Nav';
import '../Css/style.css';
import { Link } from "react-router-dom";

export const Solicitud = () => {
    return (
        <>
            <div className="solicitud-container">
                <h1 className="solicitud-title">Solicitud de Pañol</h1>
                <br />
                <div className="solicitud-center">
                    <CuadrosInteractivos 
                        titulo="Crear Solicitud" 
                        texto="Permite a alumnos y docentes solicitar recursos de Pañol para sus actividades académicas a través de un formulario sencillo" 
                        direccion="/SolicitudCrear"
                        nombreButton="Crear" 
                    />
                    <CuadrosInteractivos
                        titulo="Consultar Solicitudes Previas" 
                        texto="El pañolero revisa todas las solicitudes enviadas, organizadas en una tabla, y puede acceder a su validación o edición." 
                        direccion="/SolicitudCon" 
                        nombreButton="Consultar"
                    />
                </div>
            </div>
        </>
    );
}

const CuadrosInteractivos = ({ titulo = "", texto = "", direccion = "", nombreButton = "" }) => {
    return (
        <div className="solicitud-card">
            <h2>{titulo}</h2>
            <p>{texto}</p>
            {nombreButton && (
                <Link to={direccion}>
                    <button type="button" className="btn">{nombreButton}</button>
                </Link>
            )}
        </div>
    );
}