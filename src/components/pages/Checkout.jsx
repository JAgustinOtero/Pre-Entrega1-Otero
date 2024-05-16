import TableTags from "../widgets/TableTags"
import CheckoutItemsContainer from "../widgets/CheckoutItemsContainer"
import CheckoutTotal from "../widgets/CheckoutTotal"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import useCart from "../../hooks/useCart"
import { Button } from "flowbite-react"



export default function Checkout(props){

    const cart = useCart()
    
            return(
                <div>
                    <TableTags></TableTags>
                    <CheckoutItemsContainer/>
                    <CheckoutTotal TotalPrice={props.TotalPrice}></CheckoutTotal>
                    <Link to="/OrdendeCompra" onClick={props.handleConfirm} className="flex justify-center" >
                        <Button className="w-1/2 mt-4">FINALIZAR COMPRA</Button>
                    </Link>
                    
                </div>
            )



}