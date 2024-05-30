import React from "react"; 
import { Link } from "react-router-dom"; 
import "./Galeria.css"; 
import logo from "../img/Logo.png"; 
import CestaCompra from "../img/CestaCompra.png"; 

// Importamos las imágenes que se mostrarán en la galería
import imagenEntrantes from "../img/Entrantes/imagenEntrantes.jpg";
import ensaladilla from "../img/Entrantes/ensaladilla.jpeg";
import caldos3 from "../img/CaldosyPotajes/caldos3.jpg";
import portadaPtatas from "../img/PatatasyArroces/portadaPtatas.jpg";
import PortadaCarnes from "../img/Carnes/PortadaCarnes.jpg";
import portadaPescado from "../img/Pescado/portadaPescado.jpg";
import portadaBebidas from "../img/Bebidas/portadaBebidas.jpg";
import postre3 from "../img/Postres/postre3.jpg";

// Creamos un array con todas las imágenes importadas
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

// Definimos el componente Galeria
const Galeria = () => {
  return (
    <div className="container">
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
      <main className="gallery-main">
        <div className="image-grid">
          {/* Mapeamos las imágenes en el array para crear un grid */}
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

export default Galeria; // Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación
