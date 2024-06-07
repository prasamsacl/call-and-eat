import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartaSemanal.css";
import logo from "../img/Logo.png";
import CestaCompra from "../img/CestaCompra.png";
import ensaladaCesar from "../img/ensalada cesar.jpeg";
import caldos1 from "../img/CaldosyPotajes/caldos1.jpg";
import descarga from "../img/Entrantes/descarga.jpeg";
import carne7 from "../img/Carnes/carne7.jpg";
import mixPescado from "../img/Pescado/pescado1mis.jpg";
import fideoschinos from "../img/Pastas/pastas1.jpg";
import helados from "../img/Postres/helados.jpg";
import postre3 from "../img/Postres/postre3.jpg";
import postre6 from "../img/Postres/postre6.jpg";
import cervezas from "../img/Bebidas/cervezas.jpg";
import agua from "../img/Bebidas/agua.jpg";
import vinos from "../img/Bebidas/vinos.jpg";

const CartaSemanal = ({ agregarAlCarrito }) => {
  // Definición de los platos semanales con su tipo, nombre e imagen
  const platos = [
    { tipo: "primerPlato", nombre: "Berenjenas a la Parmesana", imagen: descarga },
    { tipo: "primerPlato", nombre: "Ensalada César", imagen: ensaladaCesar },
    { tipo: "primerPlato", nombre: "Lentejas", imagen: caldos1 },

    { tipo: "segundoPlato", nombre: "Pollo Asado", imagen: carne7 },
    { tipo: "segundoPlato", nombre: "Mix de Pescado", imagen: mixPescado },
    { tipo: "segundoPlato", nombre: "Fideos Chinos", imagen: fideoschinos },

    { tipo: "postre", nombre: "Tarta de Queso", imagen: postre3 },
    { tipo: "postre", nombre: "Red Velvet ", imagen: postre6 },
    { tipo: "postre", nombre: "Helados", imagen: helados },
    { tipo: "bebida", nombre: "Agua", imagen: agua },
    { tipo: "bebida", nombre: "Vinos", imagen: vinos},
    { tipo: "bebida", nombre: "Cervezas", imagen: cervezas}
  ];
  //Estado local para los platos seleccionados
  const [seleccionados, setSeleccionados] = useState({
    primerPlato: [],
    segundoPlato: [],
    postre: [],
    bebida: []
  });

// Función para manejar la selección de platos
  const manejarSeleccion = (tipo, nombre) => {
    setSeleccionados((prevSeleccionados) => ({
      ...prevSeleccionados,
      [tipo]: prevSeleccionados[tipo].includes(nombre)
        ? prevSeleccionados[tipo].filter((item) => item !== nombre)
        : [...prevSeleccionados[tipo], nombre]
    }));
  };
 // Función para manejar el evento de agregar al carrito
  const manejarAgregarAlCarrito = () => {
    Object.values(seleccionados).forEach((platos) => {
      platos.forEach((plato) => {
        agregarAlCarrito({ nombre: plato, cantidad: 1, precio: 12 });
      });
    });
  };

  // Función para renderizar los platos por tipo
  const renderPlatosPorTipo = (tipo) => {
    return platos
      .filter((plato) => plato.tipo === tipo)
      .map((plato, index) => (
        <div
          key={index}
          className={`card ${seleccionados[plato.tipo].includes(plato.nombre) ? "selected" : ""}`}
          onClick={() => manejarSeleccion(plato.tipo, plato.nombre)}
        >
          <img src={plato.imagen} alt={plato.nombre} className="image" />
          <div className="image-text">{plato.nombre}</div>
          <div className="plato-count">{seleccionados[plato.tipo].includes(plato.nombre) ? "1" : ""}</div>
        </div>
      ));
  };

  return (
    <div className="container">
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
      <main className="weekly-menu">
        <div className="plato-category">
          <h2>Primer Plato</h2>
          <div className="image-grid">
            {renderPlatosPorTipo("primerPlato")}
          </div>
        </div>
        <div className="plato-category">
          <h2>Segundo Plato</h2>
          <div className="image-grid">
            {renderPlatosPorTipo("segundoPlato")}
          </div>
        </div>
        <div className="plato-category">
          <h2>Postres</h2>
          <div className="image-grid">
            {renderPlatosPorTipo("postre")}
          </div>
        </div>
        <div className="plato-category">
          <h2>Bebidas</h2>
          <div className="image-grid">
            {renderPlatosPorTipo("bebida")}
          </div>
        </div>
        <div className="selected-platos">
          <h3>Platos Seleccionados:</h3>
          <ul>
               {/* Renderizado de platos seleccionados */}
            {Object.entries(seleccionados).map(([tipo, platos]) =>
              platos.map((plato, index) => (
                <li key={index}>{plato}</li>
              ))
            )}
          </ul>
        </div>
        {/*precio total*/}
        <div className="total-price">
          <p>Precio Total del Menú: <strong>12€</strong></p>
          <button onClick={manejarAgregarAlCarrito}>Añadir al Carrito</button>
        </div>
      </main>
      {/* Pie de página */}
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default CartaSemanal;
