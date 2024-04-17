import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export default function ItemListContainer({ items }) {
  const { id } = useParams();

  return (
    <div className="flex flex-wrap">
      {items.map((elm) => {
        if (elm.category.id == id || id == undefined) 
        return <ItemList key={elm.id} pintura={elm} />;
      })}
    </div>
  );
}
