import { useContext } from "react"
import { contexto } from "../ContextCart";

const useCart = () => {
    const valorActual = useContext(contexto)
    return valorActual
}

export default useCart;