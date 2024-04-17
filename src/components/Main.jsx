import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import { Routes, Route, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Main( {objects} )
{
    const {id} = useParams()
    return(
        <main className="flex justify-center bg-slate-200">
        {/* PAGINACION */}

            <Routes>
                <Route path="/" element={<ItemListContainer items={objects}/>}/>

                <Route path="/categories/:id" element={ <ItemListContainer items={objects}/> }/>

                <Route path="/Items/:id" element={ <ItemDetailContainer/> }/>

                <Route path="contact" element={<p>contact</p>}/>
            </Routes>
        </main>
        
    )
}