import Brand from "./Brand"
import CartWidget from "./CartWidget"


export default function Navbar()
{
    return(
        <nav className="flex w-full h-full">
            <Brand/>
            <div className="w-7/12 flex text-base">
                <ul className="flex justify-around items-center w-full">
                    <li><a href="">Impresoras3D</a></li>
                    <li><a href="">Servicio de Impresion</a></li>
                    <li><a href="">Componentes</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>
            <CartWidget items="4"></CartWidget>
        </nav>
    )
}