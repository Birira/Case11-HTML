import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'
import { Link } from 'react-router-dom'
import axios from "axios";

export const AdminPanel = () => {
    const [UsersList, setUsersList] = useState([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Admin");
    const [status, setStatus] = useState(true);
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

    const handleChange = (e) => {
        setStatus(e.target.checked);
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
    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/users/${id}`, { name, email, role, status });
            alert("usuario actualizado correctamente");
            console.log(response.data);

            // Actualizar lista del put
            setUsersList((prev) =>
                prev.map((item) => (item._id === id ? { ...item, name, email, role, status } : item))
            );
        } catch (error) {
            console.error("Error al editar el usuario:", error);
            alert("Error al editar el usuario");
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
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {UsersList.map((item) => (
                                item.role === "Admin" && (
                                    <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.email}</td>
                                        <td>{item.role}</td>
                                        <td>{item.status ? "Activo" : "Inactivo"}</td>
                                        <td><button className='btn btn-danger' onClick={() => handleDelete(item._id)}>X</button></td>
                                    </tr>)))}
                        </tbody>
                    </table>
                    <form>
                        <div className='container w-50'>
                            <div className="mb-3">
                                <label className="form-label">ID</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="id"
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                    placeholder="Introducir ID solo si desea agregar nuevo usuario"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="product"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="product"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Rol</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="product"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Status</label>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="disponibilidad"
                                    checked={status}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className="btn btn-success w-50" onClick={handleEdit}>
                                Editar
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}
