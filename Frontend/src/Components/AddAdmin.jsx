import React, { useState } from "react";
import { Nav } from "./Nav";
import { Link } from "react-router-dom"
import axios from "axios";

export const AddAdmin = () => {
    return (
        <div>
            <Nav />
            <div className="container m-6 w-25 p-3">

                <form >
                    <div className="form-group">
                        <label className="form-label">Nombre</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nombre"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">email</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">role</label>
                        <input
                            className="form-control"
                            type="text"
                            name="role"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Disponibilidad</label>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="disponibilidad"
                           /*  value={ }
                            onChange={ } */
                        />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary w-100" type="submit">
                            Subir Administrador
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
