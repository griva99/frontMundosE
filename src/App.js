import React from 'react';
import Encabezado from './componentes/Encabezado';
import About from './componentes/About';
import Product from './componentes/Product';
import Services from './componentes/Services';
import Contact from './componentes/Contact';
import Footer from './componentes/Footer';

function App() {
  return (
    <div>
      <Encabezado/>
      <About/>
      <Product/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );

}

export default App;
