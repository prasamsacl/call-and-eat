import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Platos.css";
import logo from "../img/Logo.png";
import CestaCompra from "../img/CestaCompra.png";

const Platos = () => {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    const cargarPlatos = async () => {
      try {
        const respuesta = await axios.get("http://127.0.0.1:8000/platos/");
        setPlatos(respuesta.data);
      } catch (error) {
        console.error("Error al cargar los platos:", error);
      }
    };

    cargarPlatos();
  }, []);

  return (
    <div className="container">
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
      <main>
        <div className="image-grid">
          {platos.map((plato) => (
            <div key={plato.id} className="image-item">
              <Link to={`/InfPlato/${plato.id}`}>
                <img src={`http://127.0.0.1:8000${plato.imagen}`} alt={plato.nombre} className="image" />
              </Link>
              <div className="info">
                <h3>{plato.nombre}</h3>
                <p>Precio: {plato.precio}</p>
                <button>Añadir al Carrito</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Platos;