import Contador from "../Contador"
import FormContainer from "../productos/FormContainer"
import ItemListContainer from "../productos/ItemListContainer"
import estilo from "./MainLayout.module.css"

const MainLayout = () => {
  return(
    <>
      <h1 className={estilo.titulo}>Ferreteria de Juancho</h1>
      <h2 className={estilo.productos}>Probando Producto</h2>
      <ItemListContainer />
      <FormContainer />
    </>
  )
}

export default MainLayout
