import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import estilos from './ItemListContainer.module.css';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/data/products.json')
      .then((respuesta) => {
        if (!respuesta.ok)
          throw new Error('No se pudo cargar la información de los productos');
        return respuesta.json();
      })
      .then(datos => setProductos(datos))
      .catch(error => setError(error.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) {
    return (
      <div className={estilos.estadoWrapper}>
        <div className={estilos.spinner} aria-label="Cargando" />
        <p className={estilos.estadoTexto}>Cargando productos…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${estilos.estadoWrapper} ${estilos.errorWrapper}`}>
        <span className={estilos.errorIcono}>⚠</span>
        <p className={estilos.estadoTexto}>{error}</p>
      </div>
    );
  }

  return (
    <main className={estilos.contenedor}>
      <header className={estilos.encabezado}>
        <h1 className={estilos.titulo}>Productos</h1>
      </header>
      <ItemList productos={productos} />
    </main>
  );
};

export default ItemListContainer;