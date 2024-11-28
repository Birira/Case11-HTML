import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await axios.post('http://localhost:3000/api/', { email, password });
            setEmail(''); // Limpia los campos después del login
            setPassword('');

            // Redirige al usuario a la página principal o a la ruta que necesites
            if (response.data.role != "Admin") {
                navigate("/Solicitud");
            }
            else {
                navigate('/AdminPanel');
            }


        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error); // Muestra el mensaje de error del backend
            } else {
                setError('Error al iniciar sesión. Inténtalo de nuevo más tarde.');
            }
        }
    };



    return (

        <div className='container align-items-center w-25 p-3'>
            <div className="card">
                <div className="card-header text-center">
                    <h5 className="card-title">Bienvenido</h5>
                </div>
                <div className="card-body mb-3">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email"></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className='form-control'
                                placeholder="Ingresa tu correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className='form-control'
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <button type="submit" className="mt-3 btn btn-primary w-100">
                            {'Iniciar Sesión'}
                        </button>
                    </form >
                </div>
            </div>
        </div>
    )
}
