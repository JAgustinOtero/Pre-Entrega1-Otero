import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

export default function Header( elements) {
  const{id} = useParams()
  return (
    <header className="text-xs text-center text-white bg-cyan-600"  >
      <Navbar elements={elements.elements}/>
    </header>
  );
}
