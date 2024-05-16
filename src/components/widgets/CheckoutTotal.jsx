export default function CheckoutTotal(props){

    return(

        <div >
            <div className="ml-5 mr-5 flex justify-between text-3xl">
                    <p className="w-1/2">Precio Total de la compra</p>
                    <h1 className="w-1/4"></h1>
                    <p className="w-1/4">{`$${props.TotalPrice}`}</p>
            </div>
            
        </div>

    )
}