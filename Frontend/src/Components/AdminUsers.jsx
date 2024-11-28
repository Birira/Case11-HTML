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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>{item.status ? "Activo" : "Inactivo"}</td>
                                    <td><button className='btn btn-warning m-1'>Editar</button><button className='btn btn-danger'>X</button></td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
