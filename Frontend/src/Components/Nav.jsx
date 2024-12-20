import React from 'react'
import {Link} from "react-router-dom"

export const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container row">
            <div className="col">
                <Link to="/" className="navbar-brand">Inicio</Link>
            </div>
            <div className="col">
                <Link to="/AdminPanel" className="navbar-brand">Panel de Administrador</Link>
            </div>
            <div className="col">
                <Link to = "/AdminUser" className="navbar-brand">Panel de Usuarios</Link>
            </div>
            <div className="col">
                <Link to = "/Inventory" className="navbar-brand">Inventario</Link>
            </div>
            <div className="col">
                <Link to="/HDevoluciones" className="navbar-brand">Devoluciones</Link>
            </div>
            <div className="col">
            <Link to = "/Solicitud" className="navbar-brand">Solicitud</Link>
            </div>
        </div>
    </nav>
  )
}
