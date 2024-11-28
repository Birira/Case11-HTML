import React from "react";
import { Link } from "react-router-dom";
import { Nav } from './Nav';
import '../Css/style.css'; 

export const SolicitudCrear = () => {
    const formularioCrearS = async (e) => {
        e.preventDefault(); 

        const datosFormulario = new FormData(e.target);

        const solForm = {
            Nombre: datosFormulario.get("Nombre"),
            Rut: datosFormulario.get("Rut"),
            SolicitudObjeto: datosFormulario.get("SolicitudObjeto"),
            Email: datosFormulario.get("Email"),
            Mensaje: datosFormulario.get("Mensaje")
        };

        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(solForm)
            };
            const peticion = await fetch("TU_URL_AQUI", requestOptions);
            const { solicitud } = await peticion.json();
            console.log(solicitud);
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    };

    return (
        <>
            <Nav />
            <Link to="/Solicitud">
                <button type="button" className="btn btn-secondary">Volver</button>
            </Link>
            <div className="solicitud-crear-title">
                <h1>Crear Solicitud</h1>
            </div>
            <center>
                <form onSubmit={formularioCrearS} className="solicitud-crear-form">
                    <input type="text" name="Nombre" placeholder="Ingrese su nombre" required className="input-field"/>
                    <input type="text" name="Rut" placeholder="Ingrese su Rut" required className="input-field"/>
                    <input type="text" name="SolicitudObjeto" placeholder="Ingrese el nombre del artículo que desea" required className="input-field"/>
                    <input type="email" name="Email" placeholder="Ingrese su Email" required className="input-field"/>
                    <textarea name="Mensaje" placeholder="Ingrese un mensaje (opcional)" className="textarea-field"></textarea>
                    <button type="submit" className="btn btn-primary">Crear Solicitud</button>
                </form>
            </center>
        </>
    );
};
