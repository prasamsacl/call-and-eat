import React from "react"; 
import "./PagPrincipal.css"; 
import { Link } from "react-router-dom"; 
import pagPrincipal from "../img/pagPrincipal.jpg"; 
import logo from "../img/Logo.png"; 
import CestaCompra from "../img/CestaCompra.png"; 

// Definimos el componente PagPrincipal
const PagPrincipal = () => {
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
      <main>
        {/* Imagen de la página principal */}
        <img src={pagPrincipal} alt="Página Principal" className="image" />
        <div className="overlay">
          <h1>Bienvenido a Call&Eat</h1>
          <p>Descubre los mejores platos en nuestra carta y carta semanal</p>
          {/* Enlace a la carta */}
          <Link to="/Carta"><button>Ver Carta</button></Link>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default PagPrincipal; // Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación
