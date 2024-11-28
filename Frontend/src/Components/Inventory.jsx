import React, { useState, useEffect } from "react";
import { Nav } from "./Nav";
import axios from "axios";

export const Inventory = () => {
    const [id, setId] = useState(""); // Nuevo estado para ID
    const [product, setProduct] = useState("");
    const [stock, setStock] = useState(0);
    const [disponibilidad, setDisponibilidad] = useState(true);
    const [inventoryList, setInventoryList] = useState([]);

    // GetInventory
    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/inventory");
                setInventoryList(response.data); // Guardar datos en el estado
            } catch (error) {
                console.error("Error al obtener los datos del inventario:", error);
                alert("No se pudieron cargar los datos del inventario");
            }
        };

        fetchInventory();
    }, []);

    // PostInventory de formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/inventory", { product, stock, disponibilidad });
            alert("Producto ingresado correctamente");
            console.log(response.data);

            // Actualizar lista del get
            setInventoryList((prev) => [...prev, { product, stock, disponibilidad }]);
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            alert("Error al enviar los datos");
        }
    };

    // putInventory desde el formulario
    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/inventory/${id}`, { product, stock, disponibilidad });
            alert("Producto actualizado correctamente");
            console.log(response.data);

            // Actualizar lista del put
            setInventoryList((prev) =>
                prev.map((item) => (item._id === id ? { ...item, product, stock, disponibilidad } : item))
            );
        } catch (error) {
            console.error("Error al editar el producto:", error);
            alert("Error al editar el producto");
        }
    };

    const handleChange = (e) => {
        setDisponibilidad(e.target.checked);
    };

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
                        {inventoryList.map((item, index) => (
                            <tr key={index}>
                                <td>{item._id}</td>
                                <td>{item.product}</td>
                                <td>{item.stock}</td>
                                <td>{item.disponibilidad ? "Disponible" : "No disponible"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <center>
                <div className="container align-items-center w-25 p-3">
                    <div className="card-body">
                        <h2>Ingreso/Edición de Producto</h2>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">ID</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="id"
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                    placeholder="Introducir ID solo si desea agregar nuevo producto"
                                />
                            </div>
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
                                    checked={disponibilidad}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3 d-flex gap-2">
                                <button className="btn btn-primary w-50" onClick={handleSubmit}>
                                    Agregar
                                </button>
                                <button className="btn btn-success w-50" onClick={handleEdit}>
                                    Editar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </center>
        </>
    );
};

