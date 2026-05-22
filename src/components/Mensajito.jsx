import { useState, useEffect } from 'react';
// Esto es solo a modo ejemplo no usar en la pre-entrega 
function Mensajito() {

  const [producto, setProducto] = useState([])
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(respuesta => respuesta.json())
      .then(data => setProducto(data))
      .catch(error => console.error(error))
  }, []);

  return(
    <ul>{producto.map(prod => (
      <li key={prod.id}> 
        {prod.title}
        {prod.price}$
        <img src={prod.image} />
      </li>
     ))}
    </ul>
    );   
}

export default Mensajito