import React from "react"; 
import { Link } from "react-router-dom"; 
import "./Contacto.css"; 
import logo from "../img/Logo.png"; 
import CestaCompra from "../img/CestaCompra.png"; 
import Facebook from "../img/facebook.png"; 
import Instagram from "../img/instagram.png"; 
import Twitter from "../img/gorjeo.png"; 

const Contacto = () => {
  const direccion = "Calle Ejemplo, 123";
  const codigoPostal = "12345";
  const telefono = "123-456-7890";
  const redesSociales = [
    { nombre: "Facebook", url: "https://www.facebook.com", img: Facebook },
    { nombre: "Instagram", url: "https://www.instagram.com", img: Instagram },
    { nombre: "Twitter", url: "https://www.twitter.com", img: Twitter }
  ];
  const horario = {
    Lunes: ["10:00 - 16:30", "19:30 - 23:30"],
    Martes: ["10:00 - 16:30", "19:30 - 23:30"],
    Miércoles: ["10:00 - 16:30", "19:30 - 23:30"],
    Jueves: ["10:00 - 16:30", "19:30 - 23:30"],
    Viernes: ["10:00 - 16:30", "19:30 - 23:30"],
    Sábado: ["10:00 - 16:30"],
    Domingo: ["Cerrado"]
  };

  return (
    <div className="containerContacto">
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
      <main className="contact-main">
        <div className="map-container">
          <iframe
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7933.231968769435!2d-8.4035865!3d43.368688099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7c7db9232ecb%3A0xe4c1193c49181d21!2sR%C3%BAa%20Estrella%2C%2022%2C%2015003%20A%20Coru%C3%B1a!5e0!3m2!1sen!2ses!4v1620091787239!5m2!1sen!2ses"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-info">
          <h2>Contacto</h2>
          <p><strong>Dirección:</strong> {direccion}</p>
          <p><strong>Código Postal:</strong> {codigoPostal}</p>
          <p><strong>Teléfono:</strong> {telefono}</p>
          <p><strong>Redes Sociales:</strong></p>
          <div className="redes-sociales">
            {redesSociales.map((redSocial, index) => (
              <a key={index} href={redSocial.url} target="_blank" rel="noopener noreferrer">
                <img src={redSocial.img} alt={redSocial.nombre} className="icono-red-social" />
              </a>
            ))}
          </div>
          <p><strong>Horario:</strong></p>
          <ul>
            {Object.entries(horario).map(([dia, horarios], index) => (
              <li key={index}>
                <strong>{dia}:</strong> {horarios.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Contacto;
