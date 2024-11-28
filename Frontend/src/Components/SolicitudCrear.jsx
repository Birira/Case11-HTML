import React from "react";
import { Nav } from './Nav';
import '../Css/style.css'
import {Link} from "react-router-dom"

export const SolicitudCrear= () => {
    return(
        <>
        <Nav></Nav>
        <Link to="/Solicitud">
        <button type="button" className="btn btn-secondary">Volver</button>
        </Link>
        <div className="title-to-Solicitud">
            <h1>Crear Solicitud</h1>
        </div>
        <center>
        <form >
            <input type="text" name="Nombre" placeholder="Ingrese su nombre" /> 
            <input type="text" name="Rut" placeholder="Ingrese su Rut" /> 
            <input type="text" name="SolicitudObjeto"  placeholder="Ingrese el nombre del articulo que desea"/> 
            <input type="email" name="Email" placeholder="Ingrese su Email" /> 
            <input type="text" name="Mensaje" placeholder="Ingrese un mensaje (opcional)" /> 
        </form>
        <button onClick={ e=> formularioCrearS(e)} name="Crear_Solicitud"> Crear_Solicitud</button>
        </center>

            </>
        )
    }
    const formularioCrearS= (e) =>{
        let datosFormulario= document.getElementsByName("formularioSolicitud").item(0);
        let solForm ={
            "Nombre": datosFormulario.nombre.value,
            "Rut": datosFormulario.rut.value,
            "SolicitudObjeto": datosFormulario.solicitudObjeto.value,
            "Email": datosFormulario.email.value,
            "Mensaje": datosFormulario.extra.value
        }
        setTimeout(async ()=>{
            const requestOptions = {
                method:'POST',
                headers: {'Content-Type':''}
                body: JSON.stringify{}
            }
        }

        )
    }