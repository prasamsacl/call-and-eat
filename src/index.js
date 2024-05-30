import React from 'react';
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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<PagPrincipal />} />
        <Route path="/Carta" element={<Carta />} />
        {/* Eliminamos esta línea, ya que la siguiente ruta ya cubre los platos por categoría */}
         <Route path="/Platos" element={<Platos />} /> 
        <Route path="/Platos/:categoria" element={<Platos />} />

        <Route path="/CartaSemanal" element={<CartaSemanal />} /> 
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Carro" element={<Carro />} />
       {/*  <Route path="/InfPlato" element={<InfPlato />} /> */}
       <Route path="/Platos/:categoria/:id" element={<InfPlato />} />
       <Route path="/InfPlato/:id" element={<InfPlato />} />
        <Route path="/PagoFinal" element={<PagoFinal />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
