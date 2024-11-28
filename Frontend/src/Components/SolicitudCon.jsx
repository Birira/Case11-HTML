import React, { useEffect, useState } from "react";
import { Nav } from './Nav';
import '../Css/style.css';
import { Link } from "react-router-dom";

export const SolicitudCon = () => {
    const [solicitudes, setSolicitudes] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [solicitudEditando, setSolicitudEditando] = useState(null);

    // Obtener solicitudes desde el backend
    const fetchSolicitudesConsultar = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/Solicitudes"); // Cambia la URL por la de tu API
            const data = await response.json();
            setSolicitudes(data);
        } catch (error) {
            console.error("Error al obtener las solicitudes:", error);
        }
    };

    // Función para actualizar la solicitud en el backend
    const actualizarSolicitud = async (id, datosActualizados) => {
        try {
            const response = await fetch(`http://localhost:3000/api/Solicitudes/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datosActualizados),
            });

            if (!response.ok) throw new Error("Error al actualizar la solicitud");

            const solicitudActualizada = await response.json();
            setSolicitudes((prevSolicitudes) =>
                prevSolicitudes.map((solicitud) =>
                    solicitud._id === id ? solicitudActualizada : solicitud
                )
            );

            setSolicitudEditando(null); // Cerrar el formulario de edición
        } catch (error) {
            console.error("Error al actualizar la solicitud:", error);
        }
    };

    // Filtrar las solicitudes por RUT
    const solicitudesFiltradas = busqueda
        ? solicitudes.filter((solicitud) =>
            solicitud.rut.toLowerCase().includes(busqueda.toLowerCase())
        )
        : solicitudes;

    useEffect(() => {
        fetchSolicitudesConsultar();
    }, []);

    return (
        <>
            <Nav />
            <Link to="/Solicitud">
                <button type="button" className="btn btn-secondary">Volver</button>
            </Link>
            <div className="titulo-solicitud">
                <h1>Consultar Solicitudes de Pañol</h1>
            </div>

            <div className="contenedor-solicitudes">
                <center>
                    <input
                        className="barra-busqueda"
                        type="text"
                        id="search"
                        placeholder="Buscar solicitud por RUT..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <button onClick={() => console.log("Busqueda realizada")} className="btn btn-primary">Buscar</button>

                    <table className="tabla-solicitudes">
                        <thead>
                            <tr>
                                <th>RUT</th>
                                <th>Usuario</th>
                                <th>Fecha Solicitud</th>
                                <th>Estado</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitudesFiltradas.map((solicitud) => (
                                <tr key={solicitud._id}>
                                    <td>{solicitud.rut}</td>
                                    <td>{solicitud.user}</td>
                                    <td>{solicitud.fechaSolicitud}</td>
                                    <td>{solicitud.status}</td>
                                    <td>
                                        <button 
                                            onClick={() => setSolicitudEditando(solicitud)} 
                                            className="btn btn-primary">Editar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {solicitudEditando && (
                        <FormularioEditar
                            solicitud={solicitudEditando}
                            onSave={actualizarSolicitud}
                            onCancel={() => setSolicitudEditando(null)}
                        />
                    )}
                </center>
            </div>
        </>
    );
}

const FormularioEditar = ({ solicitud, onSave, onCancel }) => {
    const [datos, setDatos] = useState(solicitud);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(solicitud._id, datos);
    };

    return (
        <form onSubmit={handleSubmit} className="formulario-editar">
            <h2>Editar Solicitud</h2>
            <input
                type="text"
                value={datos.rut}
                onChange={(e) => setDatos({ ...datos, rut: e.target.value })}
                placeholder="RUT"
            />
            <input
                type="text"
                value={datos.user}
                onChange={(e) => setDatos({ ...datos, user: e.target.value })}
                placeholder="Usuario"
            />
            <textarea
                value={datos.product}
                onChange={(e) => setDatos({ ...datos, product: e.target.value })}
                className="textarea-field"
                placeholder="Descripción"
            />
            <select
                value={datos.status}
                onChange={(e) => setDatos({ ...datos, status: e.target.value })}
            >
                <option value="Pendiente">Pendiente</option>
                <option value="Aprobada">Aprobada</option>
                <option value="Rechazada">Rechazada</option>
            </select>
            <button type="submit" className="btn btn-primary">Guardar</button>
            <button type="button" onClick={onCancel} className="btn btn-secondary">Cancelar</button>
        </form>
    );
}
