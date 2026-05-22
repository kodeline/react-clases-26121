import Nav from "./Nav";
import { Link } from 'react-router-dom'; 
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { obtenerCantidadTotal } = useCart();
  const totalItems = obtenerCantidadTotal();

  return (
    <header>
      <Nav/>
      <Link to="/carrito">
        Carrito 🛒 { totalItems > 0 && <span>{totalItems}</span> }
      </Link>
    </header>
  );
};
export default Header;
