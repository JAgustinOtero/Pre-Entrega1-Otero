import Brand from "../widgets/Brand";
import CartWidget from "../widgets/CartWidget";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart"
import { contextoProductos } from "../../ContextProducts";
import { useContext, useEffect, useState } from "react";

export default function Navbar() {

  const [cantItems, setcantItems] = useState();


  const cart = useCart();
  const Productos = useContext(contextoProductos)
  let cantidadItems = 0;
  let categories = []

  Productos.map(elm=>{
    if(!categories.includes(elm.category))
      categories.push(elm.category)
  })
  
  cart.carrito.map(elm=>{

    cantidadItems = cantidadItems + elm.cantidad
  })
  


  return (
    <nav className="flex w-full h-full">
      <Link
        to={"/"}
        className="w-3/12"
      >
        <Brand />
      </Link>
      <div className="w-7/12 flex text-base">
        <ul className="flex justify-around items-center w-full">
        {categories.map((elm) => {
          return <Link key={elm} to={"/categories/" + elm} className="hover:scale-125 transition-all duration-500 text-lg">{elm}</Link>;
        })}
        </ul>
      </div>
      <CartWidget items={cantidadItems}></CartWidget>
    </nav>
  );
}
