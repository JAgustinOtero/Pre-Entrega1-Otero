import useCart from "../../hooks/useCart";
import Contador from "./Contador";


function CheckoutItems(props){

    const valorContexto = useCart()

    const SetConfirm = (numero) => {
        const NewItem = props.Item
        NewItem.cantidad = numero
        numero?
        valorContexto.agregarAlCarrito(NewItem):
        valorContexto.borrarDelCarrito(NewItem)
    }


    return(
        <div className="grid grid-cols-12 ml-5 mr-5 items-center border-2 border-slate-950 border-solid  rounded-xl m-0.5">
            <div className="col-start-1 col-end-8 grid grid-cols-10 items-center">
                <img src={props.Item.image} alt=""className="shadow-2xl col-start-2 col-end-3 m-1 rounded-lg border-2 border-slate-950 border-solid"/>
                <h1 className="col-start-3 col-end-7 font-bold">{props.Item.title}</h1>
                <h1 className="col-start-7 col-end-10">{`$${props.Item.price}`}</h1>
            </div>
            <div className="col-start-8 col-end-10 h-full flex items-center border-l-2 justify-center border-slate-950 border-solid">
               <Contador style={{display:`${props.contador?"block":"none"}`}} handleConfirm={SetConfirm} cantidad={props.Item.cantidad} className="scale-50" />
                <p style={{display:`${props.contador?"none":"block"}`}}>{props.Item.cantidad}</p>
                
            </div>
            <div className="col-start-10 col-end-13 h-full flex items-center justify-center border-l-2 border-slate-950 border-solid">
                <p className="text-xl">{`$${props.Item.price*props.Item.cantidad}`}</p>
            </div>
        </div>
    );
}

export default CheckoutItems