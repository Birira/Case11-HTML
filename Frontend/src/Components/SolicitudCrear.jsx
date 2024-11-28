import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from './Nav';
import '../Css/style.css'; 

export const SolicitudCrear = () => {
    const [errorRut, setErrorRut] = useState("");  // Para el mensaje de error del RUT
    const [formData, setFormData] = useState({
        Nombre: '',
        Rut: '',
        SolicitudObjeto: '',
        Email: '',
        Mensaje: ''
    });  // Para controlar el estado de los inputs

    const formRef = React.createRef(); // Referencia al formulario

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Función para validar el RUT
    const validarRut = (rut) => {
        const rutLimpio = rut.replace(/[^\dKk]/g, "");
        return rutLimpio.length >= 8 && rutLimpio.length <= 9;
    };

    const formularioCrearS = async (e) => {
        e.preventDefault();

        const rut = e.target.Rut.value;
        
        // Validación del RUT
        if (!validarRut(rut)) {
            setErrorRut("El RUT ingresado no es válido. Asegúrese de que tenga entre 8 y 9 dígitos.");
            return; // No continuar con el envío si el RUT es inválido
        } else {
            setErrorRut(""); // Limpiar mensaje de error si el RUT es válido
        }

        const solForm = {
            user: e.target.Nombre.value,
            rut: rut,
            product: e.target.SolicitudObjeto.value,
            email: e.target.Email.value,
            solicitud: e.target.Mensaje.value,
            status: "Pendiente",
        };

        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(solForm),
            };

            const peticion = await fetch("http://localhost:3000/api/solicitudes", requestOptions);

            if (peticion.ok) {
                const { message } = await peticion.json();
                console.log(message);
                alert("Solicitud creada con éxito");

                // Limpiar los campos después de la creación de la solicitud
                setFormData({
                    Nombre: '',
                    Rut: '',
                    SolicitudObjeto: '',
                    Email: '',
                    Mensaje: ''
                });  // Limpiar los datos
            } else {
                alert("Hubo un error al crear la solicitud");
            }
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
            alert("Error al enviar la solicitud");
        }
    };

    return (
        <>
            <Link to="/Solicitud">
                <button type="button" className="btn btn-secondary">Volver</button>
            </Link>
            <div className="solicitud-crear-title">
                <h1>Crear Solicitud</h1>
            </div>
            <center>
                <form onSubmit={formularioCrearS} className="solicitud-crear-form" ref={formRef}>
                    <input 
                        type="text" 
                        name="Nombre" 
                        placeholder="Ingrese su nombre" 
                        value={formData.Nombre}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                    <input 
                        type="text" 
                        name="Rut" 
                        placeholder="Ingrese su Rut" 
                        value={formData.Rut}
                        onChange={handleChange}
                        required 
                        className="input-field"
                    />
                    {errorRut && <div className="error-message">{errorRut}</div>}
                    <input 
                        type="text" 
                        name="SolicitudObjeto" 
                        placeholder="Ingrese el nombre del artículo que desea" 
                        value={formData.SolicitudObjeto}
                        onChange={handleChange}
                        required 
                        className="input-field"
                    />
                    <input 
                        type="email" 
                        name="Email" 
                        placeholder="Ingrese su Email" 
                        value={formData.Email}
                        onChange={handleChange}
                        required 
                        className="input-field"
                    />
                    <textarea 
                        name="Mensaje" 
                        placeholder="Ingrese un mensaje (opcional)" 
                        value={formData.Mensaje}
                        onChange={handleChange}
                        className="textarea-field"
                    ></textarea>
                    <button type="submit" className="btn btn-primary">Crear Solicitud</button>
                </form>
            </center>
        </>
    );
};
