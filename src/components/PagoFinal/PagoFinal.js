import React, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import "./PagoFinal.css"; 
import logo from "../img/Logo.png"; 
import CestaCompra from "../img/CestaCompra.png"; 

// Definimos el componente PagoFinal
const PagoFinal = () => {
  // Definimos el estado inicial para los datos de pago usando useState
  const [datosPago, setDatosPago] = useState({
    nombre: "",
    apellidos: "",
    telefono:"",
    tarjeta: "",
    cv: "",
    fecha: "",
    direccion: "",
    cp: "",
  });

  const navigate = useNavigate(); // useNavigate se usa para redirigir a otras rutas

  // Maneja los cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosPago({
      ...datosPago,
      [name]: value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    const confirmar = window.confirm("¿Desea realizar la compra?"); // Pregunta al usuario si desea confirmar la compra
    if (confirmar) {
      // Aquí puedes agregar la lógica para enviar los datos de pago al servidor
      console.log("Datos de pago enviados:", datosPago); // Imprime los datos de pago en la consola
      alert("Compra realizada con éxito"); // Muestra una alerta de éxito
      navigate("/"); // Redirige a la página principal
    } else {
      navigate("/Carro"); // Redirige a la página del carro si no se confirma la compra
    }
  };

  return (
    <div className="containerPagoFinal">
      <header>
        <div className="header-top">
          {/* Enlace al inicio con el logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          {/* Enlace al inicio con el título */}
          <Link to="/">
            <div className="title">Call&Eat</div>
          </Link>
          {/* Enlace al carrito de compras */}
          <Link to="/Carro">
            <img src={CestaCompra} alt="Cesta" className="CestaCarrito" />
          </Link>
        </div>
        <div className="header-bottom">
          {/* Navegación principal */}
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/Carta">Carta</Link></li>
              <li><Link to="/CartaSemanal">Carta Semanal</Link></li>
              <li><Link to="/Galeria">Galería</Link></li>
              <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
          </nav>
          {/* Barra de búsqueda */}
          <div className="search">
            <input type="text" placeholder="Buscar..." />
            <button>Buscar</button>
          </div>
        </div>
      </header>
      <div className="formulario">
        <h2>Información de Pago</h2>
        {/* Formulario para los datos de pago */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={datosPago.nombre} onChange={handleChange} required />
          
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" value={datosPago.apellidos} onChange={handleChange} required />
          
          <label htmlFor="telefono">Telefono:</label>
          <input type="text" id="telefono" name="telefono" value={datosPago.tarjeta} onChange={handleChange} required />

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

export default PagoFinal; // Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación
