import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PagoFinal.css";
import logo from "../img/Logo.png"; 
import CestaCompra from "../img/CestaCompra.png";

const PagoFinal = () => {
  const [datosPago, setDatosPago] = useState({
    nombre: "",
    apellidos: "",
    tarjeta: "",
    cv: "",
    fecha: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmar = window.confirm("¿Desea realizar la compra?");
    if (confirmar) {
      // Aquí puedes agregar la lógica para enviar los datos de pago
      console.log("Datos de pago enviados:", datosPago);
      alert("Compra realizada con éxito");
      navigate("/"); // Redirige a la página principal u otra página tras la compra
    } else {
      navigate("/Carro"); // Redirige a la página del carro si no se confirma la compra
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
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={datosPago.nombre} onChange={handleChange} required />
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" value={datosPago.apellidos} onChange={handleChange} required />
          <label htmlFor="tarjeta">Tarjeta de Crédito:</label>
          <input type="text" id="tarjeta" name="tarjeta" value={datosPago.tarjeta} onChange={handleChange} required />
          <label htmlFor="cv">CV:</label>
          <input type="text" id="cv" name="cv" value={datosPago.cv} onChange={handleChange} required />
          <label htmlFor="fecha">Fecha de Caducidad:</label>
          <input type="text" id="fecha" name="fecha" value={datosPago.fecha} onChange={handleChange} required />
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" value={datosPago.direccion} onChange={handleChange} required />
          <label htmlFor="cp">Código Postal:</label>
          <input type="text" id="cp" name="cp" value={datosPago.cp} onChange={handleChange} required />
          <button type="submit">Confirmar Pedido</button>
        </form>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default PagoFinal;
