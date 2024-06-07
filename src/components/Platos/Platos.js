import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MiniTostas from "../img/Entrantes/entrante4.jpg";
import BerenjenasRellenas from "../img/Entrantes/descarga.jpeg";
import EnsaladillaImg from "../img/Entrantes/ensaladilla.jpeg";
import CaldoImg from "../img/CaldosyPotajes/OIP.jpeg";
import PatatasFritasImg from "../img/PatatasyArroces/portadaPtatas.jpg";
import logo from "../img/Logo.png";
import CestaCompra from "../img/CestaCompra.png";
import Alergeno1 from "../img/alergenos/simbolo-alergeno-altramuz.png";
import Alergeno2 from "../img/alergenos/simbolo-alergeno-lacteos.png";
import Alergeno3 from "../img/alergenos/simbolo-alergeno-soja.png";
import "./Platos.css";

const Platos = ({ agregarAlCarrito }) => {
  const [platos, setPlatos] = useState([]);
  const [contador, setContador] = useState(0); // Estado para el contador de la cesta
  const [mensajeModal, setMensajeModal] = useState(""); // Estado para el mensaje modal

  useEffect(() => {
    // Función para cargar los platos desde la API al montar el componente
    const cargarPlatos = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/platos/");
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        if (Array.isArray(data.platos)) {
          setPlatos(data.platos);
        } else {
          console.error("La respuesta no contiene un array de platos:", data);
        }
      } catch (error) {
        console.error("Error al cargar los platos:", error);
      }
    };

    cargarPlatos();
  }, []);

  // Función para agregar un plato al carrito y mostrar el mensaje modal
  const agregarYMostrarMensajeModal = (plato) => {
    agregarAlCarrito(plato); // Agregar plato al carrito
    setContador((prevContador) => prevContador + 1); // Incrementar el contador
    setMensajeModal(`¡Se ha añadido ${plato.nombre} al carrito!`);
    setTimeout(() => {
      setMensajeModal("");
    }, 3000);
  };

  return (
    <div className="containerPlatos">
      {/* Encabezado */}
      <header>
        <div className="header-top">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <Link to="/">
            <div className="title">Call&Eat</div>
          </Link>
          {/* Enlace al carrito con el contador */}
          <Link to="/Carro">
            <div className="icono-carrito">
              <img src={CestaCompra} alt="Cesta" className="CestaCarrito" />
              {contador > 0 && <span className="contador-carrito">{contador}</span>}
            </div>
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
          {/* Barra de búsqueda */}
          <div className="search">
            <input type="text" placeholder="Buscar..." />
            <button>Buscar</button>
          </div>
        </div>
      </header>
      {/* Contenido principal */}
      <main>
        <div className="platos-grid">
          {/* Mapeo de los platos */}
          {platos.length > 0 ? (
            platos.map((plato) => (
              <div key={plato.id} className="plato-card">
                <div className="plato-img">
                  {/* Renderizado condicional de la imagen del plato */}
                  {plato.nombre === "Mix de Tostas" && (
                    <img src={MiniTostas} alt={plato.nombre} />
                  )}
                  {plato.nombre === "Berenjenas Rellenas" && (
                    <img src={BerenjenasRellenas} alt={plato.nombre} />
                  )}
                  {plato.nombre === "Ensaladilla" && (
                    <img src={EnsaladillaImg} alt={plato.nombre} />
                  )}
                  {plato.nombre === "Caldo Gallego" && (
                    <img src={CaldoImg} alt={plato.nombre} />
                  )}
                  {plato.nombre === "Patatas Fritas" && (
                    <img src={PatatasFritasImg} alt={plato.nombre} />
                  )}
                </div>
                <div className="plato-info">
                  <h3>{plato.nombre}</h3>
                  <p className="precio">Precio: {plato.precio} €</p>
                  <p className="descripcion">Descripción: {plato.descripcion}</p>
                  {/* Alergenos */}
                  <div className="alergenos">
                    <img src={Alergeno1} alt="Alergeno 1" />
                    <img src={Alergeno2} alt="Alergeno 2" />
                    <img src={Alergeno3} alt="Alergeno 3" />
                  </div>
                  {/* Botón para añadir al carrito con la función de actualización del contador */}
                  <button className="agregar" onClick={() => agregarYMostrarMensajeModal(plato)}>Añadir al Carrito</button>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron platos.</p>
          )}
        </div>
      </main>
      {/* Mensaje emergente */}
      {mensajeModal && (
        <div className="mensaje-modal">
          <p>{mensajeModal}</p>
        </div>
      )}
      {/* Pie de página */}
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Platos;

