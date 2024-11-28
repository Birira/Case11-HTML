import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'
import { Link } from 'react-router-dom'
import axios from "axios";

export const AdminUsers = () => {
    const [UsersList, setUsersList] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/users");
                setUsersList(response.data); // Datos guardados
            } catch (error) {
                console.error("Error al obtener los datos de usuarios:", error);
                alert("No se pudieron cargar los datos de usuarios");
            }
        };
        fetchUsers();
    }, []);


    const actualizarSolicitud = async (id, datosActualizados) => {
        try {
            const response = await fetch(`http://localhost:3000/api/solicitudes/${id}`, {
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

    const handleDelete = async (_id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/users/${_id}`);

            const res = await axios.get("http://localhost:3000/api/users");
            setUsersList(res.data); // Datos guardados
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    return (
        <>
            <Nav></Nav>
            <div className="card">
                <div className='card-header text-center'>
                    <h5 className="card-title">Panel de Usuarios y Profesores</h5>
                    <div className="card-body">Usuarios Registrados</div>
                </div>
            </div>
            <div className="container">
                <div className="container row p-4">
                    <Link to="/AddUser"><button className="btn btn-primary rounded">Agregar Usuarios</button></Link>
                </div>
                <div className="container row">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {UsersList.map((item) => (
                            item.role !== "Admin" && (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>{item.status ? "Activo" : "Inactivo"}</td>
                                    <td><button className='btn btn-warning m-1'>Editar</button><button className='btn btn-danger' onClick={() => handleDelete(item._id)}>X</button></td>
                                </tr>)))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
