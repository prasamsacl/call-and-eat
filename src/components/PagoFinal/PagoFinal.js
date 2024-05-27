import React from "react";
import "./PagoFinal.css";
import { Link } from "react-router-dom"; // Importa el componente Link

const PagoFinal = () => {
  return (
    <div className="container">
    <header>
      <div className="header-top">
        {/* Utiliza Link para el logo */}
        <Link to="/">
          <div className="logo">Logo</div>
        </Link>
        {/* Utiliza Link para el título */}
        <Link to="/">
          <div className="title">Call&Eat</div>
        </Link>
        {/* Utiliza Link para el carrito */}
        <Link to="/Carro">
          <div className="cart">Carrito</div>
        </Link>
      </div>
        <div className="header-bottom">
          <nav>
          <ul>
              {/* Utiliza Link en lugar de a */}
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
        <img src="/" alt="Imagen grande" className="large-image" />
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default PagoFinal;
