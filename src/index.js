import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import PagPrincipal from './components/PagPrincipal/PagPrincipal';
import Carta from './components/Carta/Carta';
import Carro from './components/Carro/Carro';
import InfPlato from './components/InfPlato/InfPlato';
import PagoFinal from './components/PagoFinal/PagoFinal';
import Platos from './components/Platos/Platos';
import CartaSemanal from './components/CartaSemanal/CartaSemanal';
import Contacto from './components/Contacto/Contacto';
import Galeria from './components/Galeria/Galeria';

const App = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (plato) => {
    setCarrito([...carrito, plato]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagPrincipal />} />
        <Route path="/Carta" element={<Carta agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/Platos" element={<Platos agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/Platos/:categoria" element={<Platos agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/CartaSemanal" element={<CartaSemanal agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Carro" element={<Carro carrito={carrito} />} />
        <Route path="/Platos/:categoria/:id" element={<InfPlato agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/InfPlato/:id" element={<InfPlato agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/PagoFinal" element={<PagoFinal />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
