import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./InfPlato.css";

const InfPlato = () => {
  // Estado para almacenar los platos en el carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un plato al carrito
  const agregarAlCarrito = (plato) => {
    setCarrito([...carrito, plato]);
  };

  // Información del plato (sustituye este objeto con la información real del plato)
  const plato = {
    nombre: "Nombre del Plato",
    precio: "$00.00",
    imagen: "/path/to/image.jpg",
    allergenos: ["/path/to/allergen1.png", "/path/to/allergen2.png"],
    descripcion: "Información del plato...",
  };

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
        {/* Contenido del plato */}
        <div className="dish-info">
          {/* Imagen del plato */}
          <div className="dish-image">
            <img src={plato.imagen} alt="Imagen del plato" />
          </div>
          {/* Detalles del plato */}
          <div className="dish-details">
            {/* Nombre del plato */}
            <h2>{plato.nombre}</h2>
            {/* Alérgenos */}
            <div className="allergens">
              {plato.allergenos.map((allergen, index) => (
                <img key={index} src={allergen} alt={`Alérgeno ${index + 1}`} />
              ))}
            </div>
            {/* Precio del plato */}
            <p className="price">Precio: {plato.precio}</p>
            {/* Botón "Añadir al Carrito" con evento onClick */}
            <button onClick={() => agregarAlCarrito(plato)}>Añadir al Carrito</button>
          </div>
        </div>
        {/* Descripción del plato */}
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
