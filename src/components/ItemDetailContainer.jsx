import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

  const [item, setIrte] = useState([]);
  const { id } = useParams();

    useEffect(() => {
      let pedido;
      
      pedido = fetch("https://api.escuelajs.co/api/v1/products/" + id);

      pedido
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setIrte(res)
        })
        .catch((err) => {
          console.log(err);
        });
        
      }, [id]);

  return (
    <div className="flex flex-wrap">
                <ItemDetail pintura={item} />
    </div>
  );
}
