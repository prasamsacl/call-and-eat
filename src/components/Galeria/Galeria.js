import React from "react";
import { Link } from "react-router-dom";
import "./Galeria.css";
import logo from "../img/Logo.png"; 
import CestaCompra from "../img/CestaCompra.png";

import imagenEntrantes from "../img/Entrantes/imagenEntrantes.jpg";
import ensaladilla from "../img/Entrantes/ensaladilla.jpeg";
import caldos3 from "../img/CaldosyPotajes/caldos3.jpg";
import portadaPtatas from "../img/PatatasyArroces/portadaPtatas.jpg";
import PortadaCarnes from "../img/Carnes/PortadaCarnes.jpg";
import portadaPescado from "../img/Pescado/portadaPescado.jpg";
import portadaBebidas from "../img/Bebidas/portadaBebidas.jpg";
import postre3 from "../img/Postres/postre3.jpg";

const imagenes = [
  imagenEntrantes,
  ensaladilla,
  caldos3,
  portadaPtatas,
  PortadaCarnes,
  portadaPescado,
  portadaBebidas,
  postre3,
];

const Galeria = () => {
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
