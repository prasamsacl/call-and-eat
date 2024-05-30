import React from "react";
import { Link } from "react-router-dom"; 
import "./Carta.css";  
import logo from "../img/Logo.png"; 
import CestaCompra from "../img/CestaCompra.png"; 

const Carta = () => {
  // Array de imágenes de los platos, usando require para importar las imágenes
  const imagenes = [
    require("../img/Entrantes/imagenEntrantes.jpg"),
    require("../img/CaldosyPotajes/caldos3.jpg"),
    require("../img/PatatasyArroces/portadaPtatas.jpg"),
    require("../img/Carnes/PortadaCarnes.jpg"),
    require("../img/Pastas/pastas1.jpg"),
    require("../img/Pescado/portadaPescado.jpg"),
    require("../img/Postres/postre3.jpg"),
    require("../img/Bebidas/portadaBebidas.jpg"),
  ];

  // Array de objetos que contiene los nombres de los platos y sus rutas correspondientes
  const platos = [
    { nombre: "Entrantes", ruta: "Entrantes" },
    { nombre: "Caldos y Potajes", ruta: "CaldosyPotajes" },
    { nombre: "Patatas y Arroces", ruta: "PatatasyArroces" },
    { nombre: "Carnes", ruta: "Carnes" },
    { nombre: "Pastas", ruta: "Pastas" },
    { nombre: "Pescado", ruta: "Pescado" },
    { nombre: "Postres", ruta: "Postres" },
    { nombre: "Bebidas", ruta: "Bebidas" },
  ];

  return (
    <div className="containerCarta">
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
      <main>
        {/* Grid de imágenes de los platos */}
        <div className="image-grid">
          {platos.map((plato, index) => (
            <Link key={index} to={`/Platos/${plato.ruta}`}>
              <div className="image-item">
                <img src={imagenes[index]} alt={`Imagen ${index + 1}`} className="image" />
                <div className="info">
                  <h3>{plato.nombre}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Carta; // Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación
