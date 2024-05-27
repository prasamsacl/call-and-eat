import React from "react";
import { useParams } from "react-router-dom";
import "./Platos.css";
import { Link } from "react-router-dom";

const Platos = () => {
  const { categoria } = useParams();

  const platosData = {
    "Entrantes": [
      { nombre: "Entrante 1", precio: "$10.00", imagen: require("../img/Entrantes/ensaladilla.jpeg").default },
      { nombre: "Entrante 2", precio: "$12.00", imagen: require("../img/Entrantes/entrante1.jpg").default },
      { nombre: "Entrante 1", precio: "$10.00", imagen: require("../img/Entrantes/ensaladilla.jpeg").default },
      { nombre: "Entrante 2", precio: "$12.00", imagen: require("../img/Entrantes/entrante1.jpg").default },
      // Más platos...
    ],
    "Caldos y Potajes": [
      { nombre: "Caldo 1", precio: "$15.00", imagen: require("../img/CaldosyPotajes/caldos1.jpg").default },
      { nombre: "Caldo 2", precio: "$9.00", imagen: require("../img/CaldosyPotajes/caldos.jpg").default },
      // Más platos...
    ],
    // Otras categorías...
  };

  const platos = platosData[categoria] || [];

  return (
    <div className="container">
      <header>
        <div className="header-top">
          <Link to="/">
            <div className="logo">Logo</div>
          </Link>
          <Link to="/">
            <div className="title">Call&Eat</div>
          </Link>
          <Link to="/Carro">
            <div className="cart">Carrito</div>
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
          {platos.map((plato, index) => (
            <div key={index} className="card">
              <img src={plato.imagen} alt={plato.nombre} className="image" />
              <div className="info">
                <h3>{plato.nombre}</h3>
                <p>{plato.precio}</p>
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
