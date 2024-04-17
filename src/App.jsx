import { BrowserRouter } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
import "./App.css"

function App() {

  const [artes, setArtes] = useState([]);
  const  [categories, setCategories] = useState([]);
  const { id } = useParams();
  let category_aux_id = [];
  let categories_aux = []
  class Category {
    constructor(name, cat_id) {
      (this.name = name), (this.cat_id = cat_id);
    }
  }

  useEffect(() => {
    let pedido;

    pedido = fetch("https://api.escuelajs.co/api/v1/products");

    pedido
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        res.map((elm) => {
          if (!category_aux_id.includes(elm.category.id)) {
            category_aux_id.push(elm.category.id)
            categories_aux.push(new Category(elm.category.name, elm.category.id))
          }
        });
        setCategories(categories_aux)
        setArtes(res);
        console.log(categories_aux)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <BrowserRouter>
    <Header elements={categories}/>
    <Main objects={artes} />
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
