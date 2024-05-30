import React from "react"; 
import { Link } from "react-router-dom"; 
import "./CartaSemanal.css"; 
import logo from "../img/Logo.png";
import CestaCompra from "../img/CestaCompra.png"; 
import entrante5 from "../img/Entrantes/entrante5.jpg"; 
import portadaPescado from "../img/Pescado/portadaPescado.jpg";
import helados from "../img/Postres/helados.jpg";
import portadaBebidas from "../img/Bebidas/portadaBebidas.jpg";

const CartaSemanal = () => {
  // Definimos un array de objetos que contiene la información de los platos
  const platos = [
    { tipo: "Primer Plato", nombre1: "Berenjenas a la Parmesana", nombre2: "Ensalada César", nombre3: "Sopa de Verduras", imagen: entrante5 },
    { tipo: "Segundo Plato", nombre1: "Pollo Asado", nombre2: "Pescado al Horno", nombre3: "Lasaña de Carne", imagen: portadaPescado },
    { tipo: "Postre", nombre1: "Tarta de Queso", nombre2: "Fruta Fresca", nombre3: "Helado", imagen: helados },
    { tipo: "Bebidas", nombre1: "Agua", nombre2: "Vino Tinto", nombre3: "Refresco", imagen: portadaBebidas }
  ];

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
      <main className="weekly-menu">
        <div className="image-grid">
          {/* Mapeamos el array de platos para generar las tarjetas */}
          {platos.map((plato, index) => (
            <div key={index} className="card">
              <img src={plato.imagen} alt={plato.tipo} className="image" />
              <div className="image-text">{plato.tipo}</div>
              <div className="plato-descripcion">
                {/* Enlaces a las páginas de los platos */}
                <p><Link to={`/Plato/${plato.nombre1}`} className="plato-link">{plato.nombre1}</Link></p>
                <p><Link to={`/Plato/${plato.nombre2}`} className="plato-link">{plato.nombre2}</Link></p>
                <p><Link to={`/Plato/${plato.nombre3}`} className="plato-link">{plato.nombre3}</Link></p>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price">
          <p>Precio Total del Menú: <strong>12€</strong></p>
          {/* Enlace a la página de pago final */}
          <Link to="/PagoFinal"><button>Hacer Pedido</button></Link>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Call&Eat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default CartaSemanal; // Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación
