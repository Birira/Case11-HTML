import React, { useEffect, useState } from 'react';
import { Nav } from './Nav';

export const HDevoluciones = () => {
    const [devoluciones, setDevoluciones] = useState([]); // Estado para almacenar las devoluciones
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        const fetchDevoluciones = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/devoluciones');
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
                console.log("Devoluciones obtenidas:", data); // Verifica si los datos se están recibiendo correctamente
                setDevoluciones(data); // Almacenar las devoluciones en el estado
            } catch (error) {
                console.error('Error al obtener las devoluciones:', error.message);
                setError(error.message); // Mostrar el error
            }
        };
    
        fetchDevoluciones(); // Llamar a la API cuando el componente se monte
    }, []); // La dependencia vacía [] asegura que se ejecute solo una vez

    return (
        <>
            <Nav />
            <div className="container align-items-center w-75 p-3">
                <div className="card-body">
                    <h2>Lista de Devoluciones</h2>
                    {error ? (
                        <p className="text-danger">{error}</p>
                    ) : devoluciones.length === 0 ? (
                        <p>No hay devoluciones registradas</p>
                    ) : (
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Número de Devolución</th>
                                    <th>ID de Préstamo</th>
                                    <th>Fecha de Devolución</th>
                                </tr>
                            </thead>
                            <tbody>
                                {devoluciones.map((devolucion,index) => (
                                    <tr key={devolucion._id || index}>
                                        <td>{index+1}</td>
                                        <td>{devolucion.ID}</td>
                                        <td>{devolucion.fechaD}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
};
