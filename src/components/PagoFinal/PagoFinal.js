import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./PagoFinal.css"; 
import logo from "../img/Logo.png"; 
import CestaCompra from "../img/CestaCompra.png"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PagoFinal = () => {
    const [datosPago, setDatosPago] = useState({
        nombre: "",
        apellidos: "",
        telefono: "",
        tarjeta: "",
        cv: "",
        fecha: new Date(),
        direccion: "",
        cp: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosPago({
            ...datosPago,
            [name]: value,
        });
    };

    const handleFechaChange = (date) => {
        setDatosPago({
            ...datosPago,
            fecha: date,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const confirmar = window.confirm("¿Desea realizar la compra?");
        if (confirmar) {
            try {
                const csrfToken = getCSRFToken();
                const response = await axios.post(
                    'http://127.0.0.1:8000/pago_final/',
                    datosPago,
                    {
                        headers: {
                            'X-CSRFToken': csrfToken,
                        },
                    }
                );
                console.log("Datos de pago enviados:", datosPago);
                alert("Compra realizada con éxito");
                navigate("/");
            } catch (error) {
                console.error("Hubo un error al enviar los datos de pago:", error);
                if (error.response) {
                    console.log("Respuesta del servidor:", error.response.data);
                }
                alert("Hubo un error al realizar la compra. Inténtelo nuevamente.");
            }
        } else {
            navigate("/Carro");
        }
    };

    const getCSRFToken = () => {
        let token = null;
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            if (name === 'csrftoken') {
                token = value;
            }
        });
        return token;
    };

    return (
        <div className="containerPagoFinal">
            <header>
                <div className="header-top">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                    <Link to="/">
                        <div className="title">Call&Eat</div>
                    </Link>
                    <Link to="/Carro">
                        <img src={CestaCompra} alt="Cesta" className="CestaCarrito" />
                    </Link>
                </div>
                <div className="header-bottom">
                    <nav>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/Carta">Carta</Link></li>
                            <li><Link to="/CartaSemanal">Carta Semanal</Link></li>
                            <li><Link to="/Galeria">Galería</Link></li>
                            <li><Link to="/Contacto">Contacto</Link></li>
                        </ul>
                    </nav>
                    <div className="search">
                        <input type="text" placeholder="Buscar..." />
                        <button>Buscar</button>
                    </div>
                </div>
            </header>
            <div className="formulario">
                <h2>Información de Pago</h2>
                <form onSubmit={handleSubmit}>
                    {/* Agregar token CSRF como un campo oculto */}
                    <input type="hidden" name="csrfmiddlewaretoken" value={getCSRFToken()} />
                    
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={datosPago.nombre} onChange={handleChange} required />
                    
                    <label htmlFor="apellidos">Apellidos:</label>
                    <input type="text" id="apellidos" name="apellidos" value={datosPago.apellidos} onChange={handleChange} required />
                    
                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="text" id="telefono" name="telefono" value={datosPago.telefono} onChange={handleChange} required />

                    <label htmlFor="tarjeta">Tarjeta de Crédito:</label>
                    <input type="text" id="tarjeta" name="tarjeta" value={datosPago.tarjeta} onChange={handleChange} required />
                    
                    <label htmlFor="cv">CV:</label>
                    <input type="text" id="cv" name="cv" value={datosPago.cv} onChange={handleChange} required />
                    
                    <label htmlFor="fecha">Fecha de Caducidad:</label>
                    <DatePicker id="fecha" selected={datosPago.fecha} onChange={handleFechaChange} dateFormat="MM/yyyy" showMonthYearPicker />

                    <label htmlFor="direccion">Dirección:</label>
                    <input type="text" id="direccion" name="direccion" value={datosPago.direccion} onChange={handleChange} required />
                    
                    <label htmlFor="cp">Código Postal:</label>
                    <input type="text" id="cp" name="cp" value={datosPago.cp} onChange={handleChange} required />
                    
                    <button type="submit">Confirmar Pago</button>
                </form>
            </div>
            <footer>
                <div className="footer-bottom">
                © 2024 Call&Eat. Todos los derechos reservados.
                </div>
            </footer>
        </div>
    );
};

export default PagoFinal;


