import { useState } from "react"
import BotoneraCantidad from "./BotoneraCantidad"

function Contador(props) {

    const [numero, setNumero] = useState(props.cantidad)
    
    const incrementar = () => {
        setNumero(numero + 1)
    }

    const decrementar = () => {
        numero? setNumero(numero - 1):0;
    }

    const confirmar = () => {
        props.handleConfirm(numero)
    }

    return (
        <div className="h-fit w-full" style={props.style}>
            <BotoneraCantidad decrementar={decrementar} incrementar={incrementar} confirmar={confirmar} numero={numero} className={props.className}/>
        </div>
    )
}

export default Contador