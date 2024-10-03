import React from 'react'
import { Nav } from './Nav'


export const Devoluciones = () => {
  return (
    <>
    <Nav></Nav>
    <div className="container align-items-center w-25 p-3"/>
        <div className="card">
            <div className="container card-body">
                <h2 className="text-center">Registro de Devolución</h2>
                <form>
                    <div className="mb-3">
                        <label for="id-prestamo">ID del préstamo:</label>
                        <input type="number" id="id-prestamo" name="id-prestamo" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="fecha-devolucion">Fecha de devolución:</label>
                        <input type="date" id="fecha-devolucion" name="fecha-devolucion" className="form-control"/>
                    </div>
                    <button id="registrar-devolucion" className="btn btn-primary btn-block">Registrar devolución</button>
                </form>
            </div>
        </div>
  
        <div className="justify-content-center mt-5">
            <h2 className="">Consulta de Préstamos</h2>
            <button className="btn btn-primary btn-block">Consultar préstamos</button>
        </div>
    </>
  )
}
