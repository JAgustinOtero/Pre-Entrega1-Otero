import { useParams } from "react-router-dom";
import ItemDetail from "../widgets/ItemDetail";
import { contextoProductos } from "../../ContextProducts";
import { useContext } from "react";
import useCart from "../../hooks/useCart";

export default function ItemDetailContainer() {

  const { id } = useParams();
  const valorContexto = useCart()
  let producto = {
    title: "Producto no existente"
  }

  const items = useContext(contextoProductos)

  items.forEach(element => {
  if(element.id == id)
    {
      producto = element
    }
    })


  const SetConfirm = (numero) => {
    const Item = producto
    Item.cantidad = numero
    numero?
    valorContexto.agregarAlCarrito(Item):
    valorContexto.borrarDelCarrito(Item)
}
  
  return (
    <div className="flex flex-wrap">
         <ItemDetail producto={producto} SetConfirm={SetConfirm} contador={producto.id} />
    </div>
  );
}
