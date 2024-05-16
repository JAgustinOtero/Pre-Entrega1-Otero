import { useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../widgets/ItemList";
import { contextoProductos } from "../../ContextProducts";

export default function ItemListContainer() {
  const { id } = useParams();
  let i = 0;

  const items = useContext(contextoProductos)

  return (
    <div className="flex flex-wrap w-4/5">
      {items.map((elm) => {
        if (elm.category == id || id == undefined) 
        return <ItemList key={elm.id} producto={elm} />
      })}
    </div>
  );
}
