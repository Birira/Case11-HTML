import React, { useEffect, useState } from 'react';
import { Nav } from './Nav';
import { useParams } from 'react-router-dom';

export const Devoluciones = () => {
    const { id } = useParams(); // Obtener el ID de los parámetros de la URL
    const [prestamo, setPrestamo] = useState(null); // Estado para almacenar los datos del préstamo
    const [error, setError] = useState(null); // Estado para manejar errores
    const [fechaDevolucion, setFechaDevolucion] = useState(new Date().toISOString().split('T')[0]); // Fecha de devolución

    useEffect(() => {
        const fetchPrestamo = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/inventory/${id}`);
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                const data = await response.json(); // Intenta convertir a JSON
                setPrestamo(data);
            } catch (error) {
                console.error('Error al obtener el préstamo:', error.message);
                setError(error.message); // Muestra el error
            }
        };

        if (id) {
            fetchPrestamo();
        }
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario

        const devolucionData = {
            ID: prestamo._id,  // ID del préstamo que se está devolviendo
            fechaD: fechaDevolucion, // Fecha de devolución
        };

        try {
            const response = await fetch(`http://localhost:3000/api/devoluciones`, {
                method: 'POST', // Usamos POST para crear la devolución
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(devolucionData),
            });

            if (response.ok) {
                alert('Devolución registrada correctamente');
            } else {
                const errorData = await response.json();
                alert(`Error al registrar la devolución: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error al registrar la devolución:', error.message);
            alert('Hubo un error al registrar la devolución');
        }
    };

    return (
        <>
            <Nav />
            <div className="container align-items-center w-25 p-3">
                <div className="card-body">
                    <h2>Registro de Devolución</h2>
                    {error ? (
                        <p className="text-danger">{error}</p>
                    ) : !prestamo ? (
                        <p>Cargando datos del préstamo...</p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">ID del préstamo</label>
                                <br />
                                <input
                                    className="form-control"
                                    type="text"
                                    name="ID"
                                    value={prestamo._id} // El valor sigue siendo el ID completo
                                    readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Fecha de devolución</label>
                                <br />
                                <input
                                    className="form-control"
                                    type="date"
                                    name="FechaDevolucion"
                                    value={fechaDevolucion}
                                    onChange={(e) => setFechaDevolucion(e.target.value)} // Manejar cambio de fecha
                                />
                            </div>
                            <div className="align-items-center">
                                <br />
                                <button
                                    id="registrar-devolucion"
                                    className="btn btn-primary btn-block"
                                >
                                    Registrar devolución
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};
