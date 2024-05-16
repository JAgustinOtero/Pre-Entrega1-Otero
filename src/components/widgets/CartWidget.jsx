import { ShoppingCartIcon } from "lucide-react"
import { Link } from "react-router-dom";

export default function CartWidget({items}) {
  return(
    <Link to={`/Checkout${items?"":"/NoItems"}`} className="flex items-center justify-center h-full w-2/12">
    <ShoppingCartIcon width={30} height={30} className="m-1" />
    <p className="text-slate-900 bg-slate-50 font-bold rounded-lg text-lg w-8">{items}</p>
  </Link>
  );
}
