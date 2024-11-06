import React from 'react'
import { Nav } from './Nav'
import { Link } from 'react-router-dom'
export const AdminPanel = () => {
    return (
        <>
            <Nav></Nav>
            <div className="card">
                <div className='card-header text-center'>
                    <h5 className="card-title">Panel de Administrador</h5>
                    <div className="card-body">Administradores Registrados</div>
                </div>
            </div>

            <div className="container">
                <div className="container row p-4">
                    <Link to=""><button className="btn btn-primary rounded">Agregar Administrador</button></Link>
                </div>
                <div className="container row">
                    <table className='table table-bordered'>
                        <td>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </td>
                        <tbody>
                            <tr>
                                <td>Jhon doe</td>
                                <td>jhon.example@gmail.com</td>
                                <td>Admin</td>
                                <td>Active</td>
                                <td><button className="btn btn-warning m-1">editar</button><button className="btn btn-danger">X</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Jhon doe</td>
                                <td>jhon.example@gmail.com</td>
                                <td>Admin</td>
                                <td>Active</td>
                                <td><button className="btn btn-warning m-1">editar</button><button className="btn btn-danger">X</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Jhon doe</td>
                                <td>jhon.example@gmail.com</td>
                                <td>Admin</td>
                                <td>Active</td>
                                <td><button className="btn btn-warning m-1">editar</button><button className="btn btn-danger">X</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Jhon doe</td>
                                <td>jhon.example@gmail.com</td>
                                <td>Admin</td>
                                <td>Active</td>
                                <td><button className="btn btn-warning m-1">editar</button><button className="btn btn-danger">X</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Jhon doe</td>
                                <td>jhon.example@gmail.com</td>
                                <td>Admin</td>
                                <td>Active</td>
                                <td><button className="btn btn-warning m-1">editar</button><button className="btn btn-danger">X</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
