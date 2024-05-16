import { useContext } from "react"
import { contextoProductos } from "../ContextProducts";

const useProducts = () => {
    const valorActual = useContext(contextoProductos)
    return valorActual
}

export default useProducts;