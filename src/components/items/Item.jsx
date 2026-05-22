import { useState } from 'react';
import estilos from './Item.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
 
function Item({ nombre, stock, precio, imagen, id }) {
 
  const [cantidad, setCantidad] = useState(0);
  const [favorito, setFavorito] = useState(false);

  const { agregarACarrito } = useCart()

  const toggleFavorito = () => setFavorito(!favorito);
 
  const incrementar = () => {
    if (cantidad < stock)
      setCantidad(cantidad + 1);
  };
 
  const decrementar = () => {
    if (cantidad > 0)
      setCantidad(cantidad - 1);
  };

  const manejarAgregarACarrito = () => {
    const producto = { id, nombre, precio, imagen };
    if(cantidad > 1)
      agregarACarrito(producto, cantidad);
  };
 
  return (
    <article className={estilos.card}>
      <Link to={`/producto/${id}`} className={estilos.imageWrapper}>
        <img src={imagen} alt={nombre} className={estilos.imagen} />
        <div className={estilos.imagenOverlay} />
      </Link>
 
      <div className={estilos.body}>
        <div className={estilos.header}>
          <Link to={`/producto/${id}`} className={estilos.nombreLink}>
            <h2 className={estilos.nombre}>{nombre}</h2>
          </Link>
          <button
            onClick={toggleFavorito}
            className={`${estilos.favorito} ${favorito ? estilos.favoritoActivo : ''}`}
            aria-label={favorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            {favorito ? '♥' : '♡'}
          </button>
        </div>
 
        <p className={estilos.precio}>
          <span className={estilos.moneda}>ARS</span>
          {Number(precio).toLocaleString('es-AR')}
        </p>
 
        <p className={estilos.stock}>
          {stock > 0
            ? <><span className={estilos.stockDot} />{stock} disponibles</>
            : <span className={estilos.sinStock}>Sin stock</span>
          }
        </p>
 
        <div className={estilos.cantidadWrapper}>
          <button
            onClick={decrementar}
            className={estilos.btnCantidad}
            disabled={cantidad === 0}
            aria-label="Decrementar"
          >
            -            
          </button>
          <span className={estilos.cantidad}>{cantidad}</span>
          <button
            onClick={incrementar}
            className={estilos.btnCantidad}
            disabled={cantidad >= stock}
            aria-label="Incrementar"
          >
            +
          </button>
        </div>
 
        <button 
          onClick={ manejarAgregarACarrito } 
          className={estilos.btnDetalle}
          disabled={cantidad <= 0}
        >
          Agregar {cantidad} a Carrito
        </button>
      </div>
    </article>
  );
}
 
export default Item;