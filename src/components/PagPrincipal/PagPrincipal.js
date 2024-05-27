import React from "react";
import "./PagPrincipal.css";
import { Link } from "react-router-dom";
import pagPrincipal from "../img/pagPrincipal.jpg";

const PagPrincipal = () => {
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
      <main>
        
        <div className="image-container">
          <img src={pagPrincipal} alt="Página Principal" className="pagina-principal" />
          <p>
          Call&Eat es una plataforma web diseñada para mejorar la experiencia de entrega de alimentos a domicilio para los clientes de Call&Eat, un establecimiento físico con servicio de entrega propia. La plataforma permite a los clientes realizar pedidos de comida directamente desde el sitio web, ofreciendo comodidad y variedad desde la comodidad de sus hogares.

          La implementación inicial se centrará en optimizar la funcionalidad del sitio web para garantizar una experiencia de usuario fluida y segura. Se utilizarán tecnologías modernas de desarrollo web para garantizar un rendimiento óptimo y una navegación intuitiva para los usuarios.

          Los clientes de Call&Eat serán el principal grupo de usuarios de la plataforma, beneficiándose de la conveniencia de realizar pedidos en línea y disfrutar de la entrega rápida y confiable proporcionada por los repartidores.
          Para mantenerse al día con las demandas del mercado y las preferencias de los clientes, se prevén actualizaciones regulares y mejoras en la plataforma en el futuro. Esto garantizará que Call&Eat continúe ofreciendo un servicio de entrega de alimentos de alta calidad que satisfaga las necesidades de sus usuarios.
          
          </p>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default PagPrincipal;
