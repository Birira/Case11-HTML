import React from "react";
import { Nav } from './Nav';


export const Inventory = () => {
    return (
        <>
            <Nav></Nav>
            <div className="card">
                <div className="card-header text-center">
                    <h5 className="card-title">Admin de Inventario</h5>
                </div>
            </div>
            <div className="container mt-5">
                <table className='table table-bordered'>
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
                            <td>Example: 10</td>
                            <td>True or False</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Example</td>
                            <td>Example: 10</td>
                            <td>True or False</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Example</td>
                            <td>Example: 10</td>
                            <td>True or False</td>

                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Example</td>
                            <td>Example: 10</td>
                            <td>True or False</td>

                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Example</td>
                            <td>Example: 10</td>
                            <td>True or False</td>

                        </tr>

                    </tbody>
                </table>

            </div>
            <center>
                <div className="container align-items-center w-25 p-3">
                    <div className="card-body">
                        <h2>Ingreso del producto</h2>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">ID</label>
                                <br /><input className="form-control" type="number" name="ID" placeholder="ID" id="data" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <br /><input className="form-control" type="text" name="Nombre" placeholder="Nombre del producto"
                                    id="data" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Stock</label>
                                <br /><input className="form-control" type="number" name="Stock" placeholder="Stock" id="data" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Disponibilidad</label>
                                <br /><input className="form-control" type="text" name="Disponibilidad" placeholder="Disponibilidad" id="data" />
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary w-100" type="submit" value="Submit" id="boton-enviar">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </center>
        </>
    )
}