import React from "react";
import "./CartaSemanal.css";
import { Link } from "react-router-dom";

const CartaSemanal = () => {
  const platos = [
    { tipo: "Primer Plato", nombre1: "Berenjenas a la Parmesana", nombre2: "Ensalada César", nombre3: "Sopa de Verduras", imagen: "../img/PatatasyArroces/arroces5.jpg" },
    { tipo: "Segundo Plato", nombre1: "Pollo Asado", nombre2: "Pescado al Horno", nombre3: "Lasaña de Carne", imagen: "pagPrincipal2.jpg" },
    { tipo: "Postre", nombre1: "Tarta de Queso", nombre2: "Fruta Fresca", nombre3: "Helado", imagen: "pagPrincipal3.jpg" },
    { tipo: "Bebidas", nombre1: "Agua", nombre2: "Vino Tinto", nombre3: "Refresco", imagen: "pagPrincipal4.jpg" }
  ];

  return (
    <div className="container">
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
      <main className="weekly-menu">
        <div className="image-grid">
          {platos.map((plato, index) => (
            <div key={index} className="card">
              <img src={require(`../img/${plato.imagen}`).default} alt={plato.tipo} className="image" />
              <div className="image-text">{plato.tipo}</div>
              <div className="plato-descripcion">
                <p><Link to={`/Plato/${plato.nombre1}`} className="plato-link">{plato.nombre1}</Link></p>
                <p><Link to={`/Plato/${plato.nombre2}`} className="plato-link">{plato.nombre2}</Link></p>
                <p><Link to={`/Plato/${plato.nombre3}`} className="plato-link">{plato.nombre3}</Link></p>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price">
          <p>Precio Total del Menú: <strong>12€</strong></p>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default CartaSemanal;
