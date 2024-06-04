import React from "react"; 
import "./PagPrincipal.css"; 
import { Link } from "react-router-dom"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pagPrincipal from "../img/pagPrincipal.jpg"; 
import logo from "../img/Logo.png"; 
import CestaCompra from "../img/CestaCompra.png"; 
import portadadePostres from "../img/portadadePostres.jpg"; 
import agua from "../img/Bebidas/agua.jpg"; 
import pastas3 from "../img/Pastas/pastas3.jpg"; 

// Definimos el componente PagPrincipal
const PagPrincipal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 // Tiempo de cambio en milisegundos (3 segundos)
  };

  return (
    <div className="container">
      <header>
        <div className="header-top">
          {/* Enlace al inicio con el logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" /> 
          </Link>
          {/* Enlace al inicio con el título */}
          <Link to="/">
            <div className="title">Call&Eat</div>
          </Link>
          {/* Enlace al carrito de compras */}
          <Link to="/Carro">
            <img src={CestaCompra} alt="Cesta" className="CestaCarrito" />
          </Link>
        </div>
        <div className="header-bottom">
          {/* Navegación principal */}
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/Carta">Carta</Link></li>
              <li><Link to="/CartaSemanal">Carta Semanal</Link></li>
              <li><Link to="/Galeria">Galería</Link></li>
              <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
          </nav>
          {/* Barra de búsqueda */}
          <div className="search">
            <input type="text" placeholder="Buscar..." />
            <button>Buscar</button>
          </div>
        </div>
      </header>
      <main>
        {/* Carrusel de imágenes */}
        <Slider {...settings}>
          <div>
            <img src={pagPrincipal} alt="Página Principal" className="slider-image" />
          </div>
          <div>
            <img src={portadadePostres} alt="portadadePostres" className="slider-image" />
          </div>
          <div>
            <img src={agua} alt="agua" className="slider-image" />
          </div>
          <div>
            <img src={pastas3} alt="pastas3" className="slider-image" />
          </div>
          {/* Agrega más imágenes según sea necesario */}
        </Slider>
        <div className="overlay">
          <h1>Bienvenido a Call&Eat</h1>
          <p>Descubre los mejores platos en nuestra carta y carta semanal</p>
          <p>¡Con Call&Eat, disfruta de la mejor comida sin salir de casa!</p>
          <p>Texto sobre Call&Eat...</p> {/* Agrega tu texto aquí */}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default PagPrincipal;
