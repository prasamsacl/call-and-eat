import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./InfPlato.css";
import logo from "../img/Logo.png"; 
import CestaCompra from "../img/CestaCompra.png";

const InfPlato = () => {
  const { id } = useParams();
  const [plato, setPlato] = useState(null);

  useEffect(() => {
    const fetchPlato = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/platos/${id}`);
        setPlato(response.data);
      } catch (error) {
        console.error("Error fetching plato:", error);
      }
    };

    fetchPlato();
  }, [id]);

  const agregarAlCarrito = () => {
    // Aquí puedes implementar la lógica para agregar el plato al carrito
    console.log("Plato agregado al carrito:", plato);
  };

  if (!plato) {
    return <div>Cargando plato...</div>;
  }

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
      <main>
        <div className="dish-info">
          <div className="dish-image">
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
          <textarea value={plato.descripcion} readOnly placeholder="Información del plato..."></textarea>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default InfPlato;
