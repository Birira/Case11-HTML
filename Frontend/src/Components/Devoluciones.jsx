import React from 'react'
import { Nav } from './Nav'


export const Devoluciones = () => {
    return (
        <>
            <Nav></Nav>
            <div className="container align-items-center w-25 p-3">
                <div className="card-body">
                    <h2>Registro de Devolución</h2>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">ID del préstamo</label>
                            <br />
                            <input className="form-control" type="number" name="ID" placeholder="ID" id="data" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Fecha de devolución</label>
                            <br />
                            <input className="form-control" type="text" name="Nombre" placeholder="Fecha de devolución" id="data" />
                        </div>
                        <div className="align-items-center">
                            <br />
                            <button id="registrar-devolucion" className="btn btn-primary btn-block">Registrar devolución</button>
                        </div>
                    </form>
                    <div className="align-items-center mt-5">
                        <h2 className="">Consulta de Préstamos</h2>
                        <button className="btn btn-primary btn-block">Consultar préstamos</button>
                    </div>
                </div>
            </div>
        </>
    )
}
