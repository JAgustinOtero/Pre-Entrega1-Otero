import { BrowserRouter } from "react-router-dom"
import { useEffect, useState } from "react";
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import Footer from "./Footer.jsx"
import "../../App.css"
import CustomContext from "../../ContextCart.jsx";
import CustomContextProducts from "../../ContextProducts.jsx";
import CustomContextOrder from "../../ContextOrder.jsx";
import { app } from "../../firebase.js";
import { collection, getDocs, getFirestore } from "firebase/firestore";



function App() {

  const [list, setList] = useState([]);

  useEffect(() => {

    const db = getFirestore(app)
    const productCollection = collection(db,"Productos")
    const products = getDocs(productCollection)

    products.then((res)=>{
      const productos = res.docs.map(doc=>{
        const producto = doc.data()
        producto.id = doc.id
        return producto})
      return productos
    })
    .then(res=>{
      setList(res)
    })
    .catch((err)=>{
      console.log(err)
    })

  }, []);

  return (
    <>
    <BrowserRouter>
      <CustomContextProducts value = {list}>
        <CustomContext>
          <CustomContextOrder>
            <Header/>
            <Main/>
            <Footer/>
          </CustomContextOrder>
        </CustomContext>
      </CustomContextProducts>
    </BrowserRouter>
    </>
  )
}

export default App
