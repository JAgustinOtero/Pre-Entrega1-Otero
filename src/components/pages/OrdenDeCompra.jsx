import { doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../firebase.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutItems from "../widgets/CheckoutItems.jsx";
import TableTags from "../widgets/TableTags.jsx";
import CheckoutTotal from "../widgets/CheckoutTotal.jsx";
import 'react-toastify/dist/ReactToastify.css';




export default function OrdenDeCompra(props){
    
    const {id} = useParams();
    
    const [order, setOrder] = useState({
        usuario: {
            nombre: "",
            title: "title",
            email: ""
        },
        items: [{
            id:"1"

        }],
        id: "",
        cantidad: ""})
    
    useEffect(() => {
        
        if(props.nroOrden.length || (id&&props.id))
            {
                const db = getFirestore(app)
                const productCollection = doc(db,"ventas/" + props.nroOrden.toString() + (props.id?id:""))
                const products = getDoc(productCollection)
            
                products.then((res)=>{
                    const orden = res.data()
                    orden.id = res.id
                    return orden
                })
                .then(res=>{
                    setOrder(res)
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
            
        }, [props.nroOrden]);
        
        
        return(
            <div className="">
                <h1>ID DE COMPRA: {order.id}</h1>
                <p>Recibe: {order.usuario.nombre}</p>
                <p>Telefono: {order.usuario.tel}</p>
                <p className="mb-5">Pronto te estara llegando un correo con la confirmacion del pedido a este email: {order.usuario.email}</p>
                <p>Resumen:</p>
                <TableTags></TableTags>
                {order.items.map((elm)=>
                {
                    return <CheckoutItems key={elm.id} Item={elm} contador={false}></CheckoutItems>
                })
                }
                <CheckoutTotal TotalPrice={order.total}></CheckoutTotal>

                <p>{props.id?"":"guarda este link si queres revisar tu compra mas adelante:"}</p>

            </div>
        )
    }