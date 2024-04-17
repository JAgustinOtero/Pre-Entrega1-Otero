import { Button } from "flowbite-react";

export default function ItemDetail({ pintura }) {

    const { title, price , category , images , description } = pintura
    
    return (
        <div className="h-4/5 w-full m-4 flex p-4 rounded-md shadow-md user-card group bg-slate-300">
                <div className="h-full rounded-md">
                    <img src={images} alt="" className="rounded-3xl h-full"   />
                </div>
                <div className="h-full w-2/4 flex flex-col items-center">
                    <h1 className="w-full m-0 font-thin text-5xl text-center ">{title}</h1>
                    <h3 className="w-full mt-5 mb-10 font-thin text-8xl text-center">$USD {price}</h3>
                    <p className="w-4/5 mt-5 mb-10 font-thin text-xl text-center">{description}</p>
                    <Button className="mt-20">Agregar al carrito</Button>
                    <Button className="mt-4" color="blue">Comprar Ahora</Button>
                </div>
            </div>
)
}