import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import DetalleProducto from './components/items/DetalleProducto';
import ItemListContainer from './components/items/ItemListContainer';
import FormContainer from './components/items/FormContainer';
import Contacto from './components/pages/Contacto';
import Carrito from './components/pages/Carrito';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<h1>Inicio</h1>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/panel" element={<FormContainer />} />
          </Route>
        </Routes>
       
    </>   
  );
}

export default App;