import { createContext, useState } from "react"; 

export const contexto = createContext({
});

const Provider = contexto.Provider

export default function CustomContext(props) {

    const [carrito, setCarrito] = useState([]);

    let copia = []
    let repeat = false
    let aux = 0

    const agregarAlCarrito = (Productos) => {
        copia = [...carrito]
        copia.map((elm)=>{
            if(elm.title == Productos.title)
                {
                    elm.cantidad =   Productos.cantidad;
                    repeat = true
                }
        })
        if (!repeat) copia.push(Productos)
        setCarrito(copia)
     }
    
    const borrarDelCarrito = (Productos) => {
        copia = [...carrito]
        copia.map((elm)=>{
            if(elm.title == Productos.title)
                {
                    aux = copia.indexOf(elm)
                }
        })
        copia.splice(aux,1)
        setCarrito(copia)

     }

    const vaciarCarrito = () => {
        setCarrito([])
     }

    const valorDelContenido = {
        carrito,
        vaciarCarrito,
        agregarAlCarrito,
        borrarDelCarrito
    }


    return(
        <Provider value={valorDelContenido}>
            {props.children}
        </Provider>

    )
}
