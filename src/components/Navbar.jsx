import Brand from "./Brand";
import { useEffect, useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Navbar({elements}) {
  const { id } = useParams();

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
        {elements.map((elm) => {
          return <Link key={elm.cat_id} to={"/categories/" + elm.cat_id} className="hover:scale-125 transition-all duration-500 text-lg">{elm.name}</Link>;
        })}
        </ul>
      </div>
      <CartWidget items="4"></CartWidget>
    </nav>
  );
}
