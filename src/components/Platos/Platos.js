// Platos.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TartaChoco from "../img/Postres/postre2.jpg";
import BerenjenasRellenas from "../img/Entrantes/descarga.jpeg";
import EnsaladillaImg from "../img/Entrantes/ensaladilla.jpeg";
import CaldoImg from "../img/CaldosyPotajes/OIP.jpeg";
import PatatasFritasImg from "../img/PatatasyArroces/portadaPtatas.jpg";
import logo from "../img/Logo.png";
import CestaCompra from "../img/CestaCompra.png";

const Platos = ({ agregarAlCarrito }) => {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
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

  return (
    <div className="containerPlatos">
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
          {platos.length > 0 ? (
            platos.map((plato) => (
              <div key={plato.id} className="image-item">
                <Link to={`/InfPlato/${plato.id}`}>
                  {plato.nombre === "Tarta de 3 Chocolates" && (
                    <img src={TartaChoco} alt={plato.nombre} className="image" />
                  )}
                  {plato.nombre === "Berenjenas Rellenas" && (
                    <img src={BerenjenasRellenas} alt={plato.nombre} className="image" />
                  )}
                  {plato.nombre === "Ensaladilla" && (
                    <img src={EnsaladillaImg} alt={plato.nombre} className="image" />
                  )}
                  {plato.nombre === "Caldo Gallego" && (
                    <img src={CaldoImg} alt={plato.nombre} className="image" />
                  )}
                  {plato.nombre === "Patatas Fritas" && (
                    <img src={PatatasFritasImg} alt={plato.nombre} className="image" />
                  )}
                </Link>
                <div className="info">
                  <h3>{plato.nombre}</h3>
                  <p>Precio: {plato.precio} €</p>
                  <button onClick={() => agregarAlCarrito(plato)}>Añadir al Carrito</button>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron platos.</p>
          )}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Platos;
