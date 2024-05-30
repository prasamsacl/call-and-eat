import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom"; 
import axios from "axios"; 
import "./Platos.css"; 
import logo from "../img/Logo.png"; 
import CestaCompra from "../img/CestaCompra.png"; 

// Definimos el componente Platos
const Platos = () => {
  // Usamos useState para definir el estado 'platos' y la función para actualizarlo 'setPlatos'
  const [platos, setPlatos] = useState([]);

  // Usamos useEffect para cargar los platos cuando el componente se monta
  useEffect(() => {
    // Definimos una función asíncrona para cargar los platos desde la API
    const cargarPlatos = async () => {
      try {
        // Hacemos una petición GET a la API para obtener los datos de los platos
        const respuesta = await axios.get("http://127.0.0.1:8000/platos/");
        // Actualizamos el estado con los datos obtenidos de la respuesta
        setPlatos(respuesta.data);
      } catch (error) {
        // Manejamos cualquier error que ocurra durante la petición
        console.error("Error al cargar los platos:", error);
      }
    };

    // Llamamos a la función para cargar los platos
    cargarPlatos();
  }, []); // El array vacío como segundo argumento asegura que esto solo se ejecute una vez al montar el componente

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
        {/* Grid de imágenes de platos */}
        <div className="image-grid">
          {platos.map((plato) => (
            <div key={plato.id} className="image-item">
              {/* Enlace a la información del plato */}
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

export default Platos; // Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación
