import React from 'react'
import { Link } from 'react-router-dom'


export const Login = () => {
    return (
        
        <div className='container align-items-center w-25 p-3'>
            <div className="card">
                <div className="card-header text-center">
                    <h5 className="card-title">Bienvenido</h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input id="email" type="email" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" required />
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <Link to="/AdminPanel"><button className="btn btn-primary w-100">ADM</button></Link>
                </div>
                <div className="card-footer">
                    <Link ><button className="btn btn-danger w-100">User</button></Link>
                </div>
            </div>
        </div>
    )
}
