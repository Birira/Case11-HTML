import React from "react";
import { Link } from "react-router-dom";
import { Nav } from './Nav';
import '../Css/style.css'; 

export const SolicitudCrear = () => {
    const formularioCrearS = async (e) => {
        e.preventDefault(); // Evita que la página se recargue al enviar el formulario

        const datosFormulario = new FormData(e.target);

        const solForm = {
            user: datosFormulario.get("Nombre"), 
            rut: datosFormulario.get("Rut"), 
            product: datosFormulario.get("SolicitudObjeto"), 
            email: datosFormulario.get("Email"), 
            solicitud: datosFormulario.get("Mensaje"), 
            status: "Pendiente" 
        };

        try {
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(solForm) // Convertimos el objeto a JSON
            };

            
            const peticion = await fetch("http://localhost:3000/api/Solicitudes", requestOptions);

            if (peticion.ok) {
                const { message } = await peticion.json();
                console.log(message); // Mostramos el mensaje de éxito desde el backend
                alert("Solicitud creada con éxito");
            } else {
                alert("Hubo un error al crear la solicitud");
            }
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
            alert("Error al enviar la solicitud");
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