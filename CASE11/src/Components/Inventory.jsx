import React from "react";
import { Nav } from './Nav';
import './Css/style.css'
import { Link } from "react-router-dom"


export const Inventory = () => {
    return (
        <>
            <Nav></Nav>
            <div class="card align-items-center">
                <h1>Admin de Inventario</h1>
            </div>
            <div class="container-fluid">
                <table class='table table-bordered'>
                    <td>
                        <tr>
                            <th>ID</th>
                            <th>Producto/Recurso</th>
                            <th>Stock</th>
                            <th>Disponibilidad</th>
                        </tr>
                    </td>
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
                <div class="container align-items-center w-25 p-3">
                    <div class="card-body">
                        <h2>Ingreso del producto</h2>
                        <form>
                            <div class="mb-3">
                                <label class="form-label">ID</label>
                                <br /><input class="form-control" type="number" name="ID" placeholder="ID" id="data" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Nombre</label>
                                <br /><input class="form-control" type="text" name="Nombre" placeholder="Nombre del producto"
                                    id="data" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Stock</label>
                                <br /><input class="form-control" type="number" name="Stock" placeholder="Stock" id="data" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Disponibilidad</label>
                                <br /><input class="form-control" type="text" name="Disponibilidad" placeholder="Disponibilidad" id="data" />
                            </div>
                            <div class="mb-3">
                                <button class="btn btn-primary w-100" type="submit" value="Submit" id="boton-enviar">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </center>
        </>
    )
}