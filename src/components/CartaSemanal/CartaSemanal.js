import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartaSemanal.css";
import logo from "../img/Logo.png";
import CestaCompra from "../img/CestaCompra.png";
import entrante5 from "../img/Entrantes/entrante5.jpg";
import portadaPescado from "../img/Pescado/portadaPescado.jpg";
import helados from "../img/Postres/helados.jpg";
import portadaBebidas from "../img/Bebidas/portadaBebidas.jpg";

const CartaSemanal = ({ agregarAlCarrito }) => {
  const platos = [
    { tipo: "primerPlato", nombre: "Berenjenas a la Parmesana", imagen: entrante5 },
    { tipo: "primerPlato", nombre: "Ensalada César", imagen: entrante5 },
    { tipo: "primerPlato", nombre: "Sopa de Verduras", imagen: entrante5 },
    { tipo: "segundoPlato", nombre: "Pollo Asado", imagen: portadaPescado },
    { tipo: "segundoPlato", nombre: "Pescado al Horno", imagen: portadaPescado },
    { tipo: "segundoPlato", nombre: "Lasaña de Carne", imagen: portadaPescado },
    { tipo: "postre", nombre: "Tarta de Queso", imagen: helados },
    { tipo: "postre", nombre: "Fruta Fresca", imagen: helados },
    { tipo: "postre", nombre: "Helado", imagen: helados },
    { tipo: "bebida", nombre: "Agua", imagen: portadaBebidas },
    { tipo: "bebida", nombre: "Vino Tinto", imagen: portadaBebidas },
    { tipo: "bebida", nombre: "Refresco", imagen: portadaBebidas }
  ];

  const [seleccionados, setSeleccionados] = useState({
    primerPlato: null,
    segundoPlato: null,
    postre: null,
    bebida: null
  });

  const manejarSeleccion = (tipo, nombre) => {
    setSeleccionados((prevSeleccionados) => ({
      ...prevSeleccionados,
      [tipo]: nombre
    }));
  };

  const manejarAgregarAlCarrito = () => {
    let total = 0;
    Object.values(seleccionados).forEach((plato) => {
      if (plato) {
        agregarAlCarrito({ nombre: plato, precio: 12 });
        total += 12;
      }
    });
    return total;
  };

  const precioTotal = manejarAgregarAlCarrito();

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
      <main className="weekly-menu">
        <div className="image-grid">
          {platos.map((plato, index) => (
            <div
              key={index}
              className={`card ${seleccionados[plato.tipo] === plato.nombre ? "selected" : ""}`}
              onClick={() => manejarSeleccion(plato.tipo, plato.nombre)}
            >
              <img src={plato.imagen} alt={plato.nombre} className="image" />
              <div className="image-text">{plato.nombre}</div>
            </div>
          ))}
        </div>
        <div className="selected-platos">
          <h3>Platos Seleccionados:</h3>
          <ul>
            {Object.entries(seleccionados).map(([tipo, nombre]) =>
              nombre ? <li key={tipo}>{nombre}</li> : null
            )}
          </ul>
        </div>
        <div className="total-price">
          <p>Precio Total del Menú: <strong>{precioTotal}€</strong></p>
          <button onClick={manejarAgregarAlCarrito}>Añadir al Carrito</button>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default CartaSemanal;
