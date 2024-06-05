import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";
import CestaCompra from "../img/CestaCompra.png";

const Carro = ({ carrito }) => {
  // Función para calcular el precio total del carrito
  const calcularPrecioTotal = (carrito) => {
    return carrito.reduce((total, plato) => total + plato.precio * plato.cantidad, 0);
  };

  // Estado local para el carrito y el precio total
  const [carritoLocal, setCarritoLocal] = useState(carrito);
  const [precioTotal, setPrecioTotal] = useState(calcularPrecioTotal(carritoLocal));

  // Función para eliminar un plato del carrito
  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carritoLocal];
    nuevoCarrito.splice(index, 1);
    setCarritoLocal(nuevoCarrito);
    setPrecioTotal(calcularPrecioTotal(nuevoCarrito));
  };

  // Función para aumentar la cantidad de un plato
  const aumentarCantidad = (index) => {
    const nuevoCarrito = [...carritoLocal];
    nuevoCarrito[index].cantidad += 1;
    setCarritoLocal(nuevoCarrito);
    setPrecioTotal(calcularPrecioTotal(nuevoCarrito));
  };

  // Función para disminuir la cantidad de un plato
  const disminuirCantidad = (index) => {
    const nuevoCarrito = [...carritoLocal];
    if (nuevoCarrito[index].cantidad > 1) {
      nuevoCarrito[index].cantidad -= 1;
    } else {
      eliminarDelCarrito(index);
    }
    setCarritoLocal(nuevoCarrito);
    setPrecioTotal(calcularPrecioTotal(nuevoCarrito));
  };

  // Función para mostrar el precio total del carrito
  const mostrarPrecioTotal = () => {
    return isNaN(precioTotal) ? "0.00" : precioTotal.toFixed(2);
  };

  return (
    <div className="containerCarro">
      {/* Encabezado */}
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
      {/* Contenido principal */}
      <main>
        {/* Lista de platos en el carrito */}
        <div className="carrito">
          <h2>Carrito</h2>
          <ul>
            {carritoLocal.map((plato, index) => (
              <li key={index} className="carrito-item">
                <div className="plato-info">
                  <span>{plato.nombre}</span>
                  <div className="cantidad-controles">
                    <button onClick={() => disminuirCantidad(index)}>-</button>
                    <span>{plato.cantidad}</span>
                    <button onClick={() => aumentarCantidad(index)}>+</button>
                  </div>
                  <span>Precio por unidad: {plato.precio} €</span>
                  <span>Precio total: {plato.precio * plato.cantidad} €</span>
                </div>
                <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
        {/* Precio total del carrito */}
        <div className="precio-total">
          <h3>Total: {mostrarPrecioTotal()} €</h3>
        </div>
        {/* Botón "Siguiente" */}
        <div className="siguiente">
          <Link to="/PagoFinal"><button>Siguiente</button></Link>
        </div>
      </main>
      {/* Pie de página */}
      <footer className="footer">
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Carro;
