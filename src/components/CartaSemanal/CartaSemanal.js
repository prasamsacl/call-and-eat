import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartaSemanal.css";
import logo from "../img/Logo.png";
import CestaCompra from "../img/CestaCompra.png";
import entrante5 from "../img/Entrantes/entrante5.jpg";
import portadaPescado from "../img/Pescado/portadaPescado.jpg";
import helados from "../img/Postres/helados.jpg";
import portadaBebidas from "../img/Bebidas/portadaBebidas.jpg";

const CartaSemanal = () => {
  const platos = [
    { tipo: "Primer Plato", nombre1: "Berenjenas a la Parmesana", nombre2: "Ensalada César", nombre3: "Sopa de Verduras", imagen: entrante5 },
    { tipo: "Segundo Plato", nombre1: "Pollo Asado", nombre2: "Pescado al Horno", nombre3: "Lasaña de Carne", imagen: portadaPescado },
    { tipo: "Postre", nombre1: "Tarta de Queso", nombre2: "Fruta Fresca", nombre3: "Helado", imagen: helados },
    { tipo: "Bebidas", nombre1: "Agua", nombre2: "Vino Tinto", nombre3: "Refresco", imagen: portadaBebidas }
  ];

  const [seleccionados, setSeleccionados] = useState([]);

  const manejarSeleccion = (plato) => {
    setSeleccionados((prevSeleccionados) => {
      if (prevSeleccionados.includes(plato)) {
        return prevSeleccionados.filter((p) => p !== plato);
      } else {
        return [...prevSeleccionados, plato];
      }
    });
  };

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
              className={`card ${seleccionados.includes(plato) ? "selected" : ""}`}
              onClick={() => manejarSeleccion(plato)}
            >
              <img src={plato.imagen} alt={plato.tipo} className="image" />
              <div className="image-text">{plato.tipo}</div>
              <div className="plato-descripcion">
                <p><Link to={`/Plato/${plato.nombre1}`} className="plato-link">{plato.nombre1}</Link></p>
                <p><Link to={`/Plato/${plato.nombre2}`} className="plato-link">{plato.nombre2}</Link></p>
                <p><Link to={`/Plato/${plato.nombre3}`} className="plato-link">{plato.nombre3}</Link></p>
              </div>
            </div>
          ))}
        </div>
        <div className="selected-platos">
          <h3>Platos Seleccionados:</h3>
          <ul>
            {seleccionados.map((plato, index) => (
              <li key={index}>{plato.nombre1} / {plato.nombre2} / {plato.nombre3}</li>
            ))}
          </ul>
        </div>
        <div className="total-price">
          <p>Precio Total del Menú: <strong>12€</strong></p>
          <Link to="/PagoFinal"><button>Hacer Pedido</button></Link>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default CartaSemanal;
