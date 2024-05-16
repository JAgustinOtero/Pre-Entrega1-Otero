import ItemListContainer from "../pages/ItemListContainer"
import ItemDetailContainer from "../pages/ItemDetailContainer"
import OrdenDeCompra from "../pages/OrdenDeCompra"
import { Routes, Route, Link } from "react-router-dom"
import Form from "../widgets/Form"
import Checkout from "../pages/Checkout"
import { useEffect, useState } from "react"
import useCart from "../../hooks/useCart"
import {app} from "../../firebase"
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";



export default function Main( )
{

    const cart = useCart()
    let carrito_aux = []
    
    const [datos,setDatos] = useState()
    const [compra,setCompra] = useState()
    const [orden, setOrden] =useState([])
    const [TotalPrice, setTotalPrice] = useState(0)

    useEffect(()=>{
        let aux = 0;
        cart.carrito.map((elm)=>{
            
            aux = aux + (elm.price * elm.cantidad)
        })
        setTotalPrice(aux)

    },[cart.carrito])
    
    const handleVerification = (formValue) => {
        setDatos(formValue)
    }
    
    const handleConfirm = () => {
        const db = getFirestore(app)
        const salesCollection = collection(db, "ventas")
        
        const venta = {
            items: cart.carrito,
            usuario: { nombre: `${datos.nombre}`, tel: `${datos.telefono}`, email: `${datos.email}` },
            fechaDeCompra: serverTimestamp(),
            status: "pendiente",
            total: `${TotalPrice}`
        }
        
        const consulta = addDoc(salesCollection, venta)
        
        
        consulta
            .then((resultado)=>{
                setOrden(resultado._key.path.segments[1])
                carrito_aux = cart.carrito
                setCompra(carrito_aux)
                cart.vaciarCarrito()
            })
            .catch((err)=>{
            console.log(err)
            })
    }

    return(
        <main className="flex justify-center bg-slate-200">
        {/* PAGINACION */}

            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>

                <Route path="/categories/:id" element={ <ItemListContainer/> }/>

                <Route path="/Items/:id" element={ <ItemDetailContainer/> }/>

                <Route path="/Contact" element={<p>contact</p>}/>

                <Route path="/Checkout" element={datos!=null?<Checkout TotalPrice={TotalPrice} handleConfirm={handleConfirm}/>:<Form handleConfirm={handleVerification}/> }></Route>

                <Route path="/Checkout/NoItems" element={<Link to={"/"} ><p>El carrito esta vacio <br/> Vuelve al inicio</p></Link>}></Route>

                <Route path="/OrdendeCompra" element={<OrdenDeCompra nroOrden={orden} datos={datos} cart={compra}></OrdenDeCompra>}></Route>

                <Route path="/OrdendeCompra/:id" element={<OrdenDeCompra id={true} nroOrden={orden} datos={datos} cart={compra}></OrdenDeCompra>}></Route>

            </Routes>
        </main>
        
    )
}