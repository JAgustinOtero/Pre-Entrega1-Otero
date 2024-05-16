
import { Link } from "react-router-dom";

export default function ItemList({ producto }) {

    const { title , image, id } = producto

    return (
            <Link to={`/Items/${id}`} className="w-80 m-4 p-4 flex flex-col justify-between transition-all rounded-md shadow-lg user-card bg-cyan-600 text-slate-100 hover:bg-green-300 hover:text-slate-950 hover:scale-105 duration-500">
                <div className="aspect-video">
                    <img className="w-full rounded-md" 
                    src={`${image}`} alt={title} />
                </div>
                <h2 className="my-2 font-bold">{title}</h2>
            </Link>
)
}

