import React, { useState } from "react";
import { Nav } from "./Nav";
import { Link } from "react-router-dom"
import axios from "axios";

export const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Estudiante");
    const status = true;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/users", { name, email, password, role, status });
            alert("Usuario ingresado correctamente");
            console.log(response.data);

        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };

    return (
        <div>
            <Nav />
            <div className="container m-6 w-25 p-3">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Nombre</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">email</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">password</label>
                        <input
                            className="form-control"
                            type="text"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">role</label>
                        <input
                            className="form-control"
                            type="text"
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary w-100" type="submit">
                            Subir Usuario
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
