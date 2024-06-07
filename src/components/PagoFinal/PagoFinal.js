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
        csrfmiddlewaretoken: ""
    });

    const [errores, setErrores] = useState({});
    const [enviado, setEnviado] = useState(false);

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
            const erroresFormulario = {};
            Object.keys(datosPago).forEach((campo) => {
                if (!datosPago[campo]) {
                    erroresFormulario[campo] = "Este campo es obligatorio";
                }
            });
            if (Object.keys(erroresFormulario).length > 0) {
                setErrores(erroresFormulario);
                return;
            }
            setErrores({});
            setEnviado(true);
            try {
                await axios.post(
                    'http://127.0.0.1:8000/pago_final/',
                    datosPago
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
        }
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
                    <input type="hidden" name="csrfmiddlewaretoken" value={datosPago.csrfmiddlewaretoken} />
                    
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={datosPago.nombre}
                        onChange={handleChange}
                        className={errores.nombre ? "error" : enviado ? "completado" : ""}
                        required
                    />
                    {errores.nombre && <p className="error">{errores.nombre}</p>}
                    
                    <label htmlFor="apellidos">Apellidos:</label>
                    <input
                        type="text"
                        id="apellidos"
                        name="apellidos"
                        value={datosPago.apellidos}
                        onChange={handleChange}
                        className={errores.apellidos ? "error" : enviado ? "completado" : ""}
                        required
                    />
                    {errores.apellidos && <p className="error">{errores.apellidos}</p>}
                    
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        value={datosPago.telefono}
                        onChange={handleChange}
                        className={errores.telefono ? "error" : enviado ? "completado" : ""}
                        required
                    />
                    {errores.telefono && <p className="error">{errores.telefono}</p>}
                    
                    <label htmlFor="tarjeta">Tarjeta de Crédito:</label>
                    <input
                        type="text"
                        id="tarjeta"
                        name="tarjeta"
                        value={datosPago.tarjeta}
                        onChange={handleChange}
                        className={errores.tarjeta ? "error" : enviado ? "completado" : ""}
                        required
                    />
                    {errores.tarjeta && <p className="error">{errores.tarjeta}</p>}
                    
                    <label htmlFor="cv">CV:</label>
                    <input
                        type="text"
                        id="cv"
                        name="cv"
                        value={datosPago.cv}
                        onChange={handleChange}
                        className={errores.cv ? "error" : enviado ? "completado" : ""}
                        required
                    />
                    {errores.cv && <p className="error">{errores.cv}</p>}
                    
                    <label htmlFor="fecha">Fecha de Caducidad:</label>
                    <DatePicker
                        id="fecha"
                        selected={datosPago.fecha}
                        onChange={handleFechaChange}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        className={errores.fecha ? "error" : enviado ? "completado" : ""}
                    />
                    {errores.fecha && <p className="error">{errores.fecha}</p>}
                    
                    <label htmlFor="direccion">Dirección:</label>
                    <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        value={datosPago.direccion}
                        onChange={handleChange}
                        className={errores.direccion ? "error" : enviado ? "completado" : ""}
                        required
                    />
                    {errores.direccion && <p className="error">{errores.direccion}</p>}
                    
                    <label htmlFor="cp">Código Postal:</label>
                    <input
                        type="text"
                        id="cp"
                        name="cp"
                        value={datosPago.cp}
                        onChange={handleChange}
                        className={errores.cp ? "error" : enviado ? "completado" : ""}
                        required
                    />
                    {errores.cp && <p className="error">{errores.cp}</p>}
                    
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
