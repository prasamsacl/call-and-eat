import React from "react";
import { Link } from "react-router-dom";
import "./Galeria.css";

const imagenes = [
  require("../img/Entrantes/imagenEntrantes.jpg").default,
  require("../img/Entrantes/ensaladilla.jpeg").default,
  require("../img/CaldosyPotajes/caldos3.jpg").default,
  require("../img/PatatasyArroces/portadaPtatas.jpg").default,
  require("../img/Carnes/PortadaCarnes.jpg").default,
  require("../img/Pescado/portadaPescado.jpg").default,
  require("../img/Bebidas/portadaBebidas.jpg").default,
  require("../img/Postres/postre3.jpg").default,
];

const Galeria = () => {
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
      <main className="gallery-main">
        <div className="image-grid">
          {imagenes.map((imagen, index) => (
            <div key={index} className="card">
              <img src={imagen} alt={`Imagen ${index + 1}`} className="image" />
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

export default Galeria;
