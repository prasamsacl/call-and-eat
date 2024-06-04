import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom"; 
import "./Platos.css"; 
import logo from "../img/Logo.png"; 
import CestaCompra from "../img/CestaCompra.png"; 
import FooterImage from "../2cabecerayfooter.jpg"; // Importa la imagen del footer
import HeaderImage from "../2cabecerayfooter.jpg"; // Importa la imagen de la cabecera


const Platos = () => {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    const cargarPlatos = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/platos/");
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        setPlatos(data);
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
        <div className="header-image">
          <img src={HeaderImage} alt="Header" />
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
        <div className="footer-image">
          <img src={FooterImage} alt="Footer" />
        </div>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Platos;
