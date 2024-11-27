import React, { useState } from "react";
import { Nav } from "./Nav";
import { Link } from "react-router-dom"
import axios from "axios";

export const Inventory = () => {
    const [product, setProduct] = useState("");
    const [stock, setStock] = useState(0);
    const [disponibilidad, setDisponibilidad] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/inventory", { product, stock, disponibilidad });
            alert("Producto ingresado correctamente");
            console.log(response.data);
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            alert("Error al enviar los datos");
        }
    };

    const handleChange = (e) =>{
        setDisponibilidad(e.target.checked);
    }

    return (
        <>
            <Nav />
            <div className="card">
                <div className="card-header text-center">
                    <h5 className="card-title">Admin de Inventario</h5>
                </div>
            </div>
            <div className="container mt-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto/Recurso</th>
                            <th>Stock</th>
                            <th>Disponibilidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Example</td>
                            <td>10</td>
                            <td>True</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <center>
                <div className="container align-items-center w-25 p-3">
                    <div className="card-body">
                        <h2>Ingreso del producto</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="product"
                                    value={product}
                                    onChange={(e) => setProduct(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Stock</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    name="stock"
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Disponibilidad</label>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="disponibilidad"
                                    value= {disponibilidad}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary w-100" type="submit">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                    {disponibilidad.toString()}
                </div>
            </center>
        </>
    );
};
