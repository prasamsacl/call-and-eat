import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";
import CestaCompra from "../img/CestaCompra.png";
import "./Carro.css"; 

const Carro = ({ carrito }) => {
  // Estado local para el carrito
  const [carritoLocal, setCarritoLocal] = useState([]);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // debemos de asegurarnis de que cada artículo tiene una propiedad `cantidad` inicializada
    const carritoInicializado = carrito.map((item) => ({
      ...item,
      cantidad: item.cantidad || 1
    }));
    setCarritoLocal(carritoInicializado);
    actualizarContador(carritoInicializado);
  }, [carrito]);

  // Función para actualizar el contador de elementos en el carrito
  const actualizarContador = (carrito) => {
    const totalCantidad = carrito.reduce((total, item) => total + item.cantidad, 0);
    setContador(totalCantidad);
  };

  // Función para eliminar un plato del carrito
  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carritoLocal];
    nuevoCarrito.splice(index, 1);
    setCarritoLocal(nuevoCarrito);
    actualizarContador(nuevoCarrito);
  };

  // Función para aumentar la cantidad de un plato
  const aumentarCantidad = (index) => {
    const nuevoCarrito = [...carritoLocal];
    nuevoCarrito[index].cantidad += 1;
    setCarritoLocal(nuevoCarrito);
    actualizarContador(nuevoCarrito);
  };

  // Función para disminuir la cantidad de un plato
  const disminuirCantidad = (index) => {
    const nuevoCarrito = [...carritoLocal];
    if (nuevoCarrito[index].cantidad > 1) {
      nuevoCarrito[index].cantidad -= 1;
      setCarritoLocal(nuevoCarrito);
      actualizarContador(nuevoCarrito);
    }
  };

  // Función para calcular el precio total del carrito
  const calcularPrecioTotal = () => {
    // Si el carrito tiene solo un elemento y ese elemento es un menú semanal, devolvemos el precio fijo(12)
    if (carritoLocal.length === 1 && carritoLocal[0].esMenuSemanal) {
      return 12;
    } else {
      // Calculamos el precio total sumando los precios de cada artículo en cada de añadir por platos
      return carritoLocal.reduce((total, plato) => total + plato.precio * plato.cantidad, 0);
    }
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
          {/* El siguiente bloque de código renderiza el icono del carrito de la compra.*/}
           {/* Si el contador es mayor que cero, también muestra el número de elementos en el carrito.*/}
            <div className="icono-carrito">
              <img src={CestaCompra} alt="Cesta" className="CestaCarrito" />
              {contador > 0 && <span className="contador-carrito">{contador}</span>}
            </div>
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
            {carritoLocal.length === 1 && carritoLocal[0].esMenuSemanal ? (
              <li className="carrito-item">
                <span className="nombre-plato">Menú Semanal</span>
                <span className="precio-plato">Precio: 12€</span>
              </li>
            ) : (
              carritoLocal.map((plato, index) => (
                <li key={index} className="carrito-item">
                  <span className="nombre-plato">{plato.nombre}</span>
                  <div className="cantidad">
                    <button onClick={() => disminuirCantidad(index)}>-</button>
                    <span>{plato.cantidad}</span>
                    <button onClick={() => aumentarCantidad(index)}>+</button>
                  </div>
                  <span className="precio-plato">Precio: {(plato.precio * plato.cantidad).toFixed(2)} €</span>
                  <button onClick={() => eliminarDelCarrito(index)} className="btn-eliminar">Eliminar</button>
                </li>
              ))
            )}
          </ul>
        </div>
        {/* Precio total del carrito */}
        <div className="precio-total">
          <h3>Total: {calcularPrecioTotal().toFixed(2)} €</h3>
        </div>
        {/* Botón para realizar la compra */}
        <Link to="/PagoFinal" className="btn-comprar">
          Realizar Compra
        </Link>
      </main>
      {/* Pie de página */}
      <footer className="footer">
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Carro;
