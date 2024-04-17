/* import { Button } from "antd"; */
import { Link } from "react-router-dom";

export default function ItemList({ pintura }) {

    const { title , images , artist_title , style_title , department_title , id } = pintura
    
    return (
            <div className="w-1/5 m-4 p-4 transition rounded-md shadow-md user-card hover:scale-105 group bg-slate-300">
                <div className="aspect-video">
                    <img className="w-full transition-all duration-500 rounded-md group-hover:scale-105" 
                    src={`${images[0]}`} alt="card image " />
                </div>
                <h2 className="my-2 font-bold">{title}</h2>
                <h3>{artist_title}</h3>
                <h3>{department_title}</h3>
                <h3>{style_title}</h3>
                <Link to={`/Items/${id}`}>ver mas</Link>
            </div>
)
}

