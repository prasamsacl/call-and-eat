import React, { useState, useEffect } from "react"; 
import { useParams, Link } from "react-router-dom"; 
import axios from "axios"; 
import "./InfPlato.css"; 
import logo from "../img/Logo.png"; 
import CestaCompra from "../img/CestaCompra.png"; 

// Definimos el componente InfPlato
const InfPlato = () => {
  const { id } = useParams(); // Obtenemos el parámetro `id` de la URL
  const [plato, setPlato] = useState(null); // Definimos el estado inicial para el plato como null

  // Efecto para obtener los datos del plato desde el backend
  useEffect(() => {
    const fetchPlato = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/platos/${id}`); // Hacemos una solicitud GET a la API
        setPlato(response.data); // Actualizamos el estado con los datos del plato
      } catch (error) {
        console.error("Error fetching plato:", error); // Manejamos cualquier error que ocurra
      }
    };

    fetchPlato(); // Llamamos a la función para obtener los datos del plato
  }, [id]); // El efecto depende del cambio del `id`

  // Función para agregar el plato al carrito
  const agregarAlCarrito = () => {
    // Aquí puedes implementar la lógica para agregar el plato al carrito
    console.log("Plato agregado al carrito:", plato); // Imprimimos el plato en la consola como un ejemplo
  };

  // Si el plato no está cargado aún, mostramos un mensaje de carga
  if (!plato) {
    return <div>Cargando plato...</div>;
  }

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
        <div className="dish-info">
          <div className="dish-image">
            {/* Imagen del plato */}
            <img src={plato.imagen} alt={plato.nombre} />
          </div>
          <div className="dish-details">
            <h2>{plato.nombre}</h2>
            <div className="allergens">
              {/* Mapeamos los alérgenos del plato */}
              {plato.allergenos.map((allergen, index) => (
                <img key={index} src={allergen} alt={`Alérgeno ${index + 1}`} />
              ))}
            </div>
            <p className="price">Precio: {plato.precio}</p>
            {/* Botón para añadir el plato al carrito */}
            <button onClick={agregarAlCarrito}>Añadir al Carrito</button>
          </div>
        </div>
        <div className="dish-description">
          {/* Descripción del plato */}
          <textarea value={plato.descripcion} readOnly placeholder="Información del plato..."></textarea>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default InfPlato; // Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación
