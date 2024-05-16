import { Button } from "flowbite-react"

export default function BotoneraCantidad(props)
{
    const {decrementar, incrementar, confirmar, numero, className} = props
    
    return(
        <div className={props.className + "w-full h-fit grid grid-cols-3 p-2"}>
            <div className="col-start-1 col-end-4 grid grid-cols-3 items-center h-full" >
                    <Button onClick={decrementar} className=" text-black bg-white">-</Button>
                    <p className="text-2xl">{numero}</p>
                    <Button onClick={incrementar} className=" text-black bg-white">+</Button>
                </div>
                <div className="col-start-1 col-end-4 h-fit">
                    <Button onClick={confirmar} className="w-full mt-3">CONFIRMAR</Button>
                </div>
        </div>
    )

}