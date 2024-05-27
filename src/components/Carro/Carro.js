import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Carro.css";

const Carro = () => {
  // Estado para almacenar los platos en el carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un plato al carrito
  const agregarAlCarrito = (plato) => {
    setCarrito([...carrito, plato]);
  };

  // Función para eliminar un plato del carrito
  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  // Función para calcular el precio total del carrito
  const calcularPrecioTotal = () => {
    return carrito.reduce((total, plato) => total + plato.precio, 0);
  };

  return (
    <div className="containerCarro">
      <header>
        <div className="header-top">
          <Link to="/">
            <div className="logo">Logo</div>
          </Link>
          <Link to="/">
            <div className="title">Call&Eat</div>
          </Link>
          <Link to="/Carro">
            <div className="cart">Carrito</div>
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
        {/* Lista de platos en el carrito */}
        <div className="carrito">
          <h2>Carrito</h2>
          <ul>
            {carrito.map((plato, index) => (
              <li key={index}>
                {plato.nombre} - {plato.cantidad}
                <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
        {/* Precio total del carrito */}
        <div className="precio-total">
          <h3>Total: {calcularPrecioTotal()}</h3>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Carro;
