import CheckoutItems from "./CheckoutItems"
import useCart from "../../hooks/useCart"

export default function CheckoutItemsContainer(){

    const cart = useCart().carrito


    return(

        <div className="w-full">
            {cart.map((elm)=>
                {
                    return <CheckoutItems key={elm.title} Item={elm} contador={true}></CheckoutItems>
                })
            }
        </div>

    );
}    

