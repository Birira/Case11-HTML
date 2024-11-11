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
            <h1>Consultar Solicitudes de Pañol</h1>
        </div>

        <div >
        <center>
        <input className="search-bar-to-SolicitudCon" type="text" id="search" placeholder="Buscar solicitud..."/>  
        <button>Enviar</button>
        <table className="lookup-table-to-SolicitudCon">
            <td>
                <tr>
                    <th>ID</th>
                    <th>Nombre del producto</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </td>   
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Cámara, Trípode</td>
                    <td>Pendiente</td>
                    <td >
                    <button type="button" className="btn btn-secondary">Editar</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Micrófono</td>
                    <td>Aprobado</td>
                    <td >
                    <button type="button" className="btn btn-secondary">Editar</button>
                    </td>
                </tr>
            </tbody>
            </table>
            </center>
            </div>
            </>
        )
    }