export default function TableTags(){

    return(
        <div className="font-bold ml-5 mr-5 grid grid-cols-12 justify-between border-2 border-slate-950 border-solid rounded-xl">
                    <h1 className="col-start-1 col-end-8 ">{"Item"}</h1>
                    <p className="col-start-8 col-end-10 border-l-2 border-slate-950 border-solid">Cantidad</p>
                    <p className="col-start-10 col-end-13 border-l-2 border-slate-950 border-solid">Precio Total</p>
        </div>
    );
}