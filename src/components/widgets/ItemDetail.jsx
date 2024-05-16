import Contador from "./Contador";


export default function ItemDetail(props) {

    const { title, price , image , description } = props.producto

    return (
        <div className="h-auto w-full m-4 flex p-4 rounded-md shadow-md user-card group bg-slate-300">
                <div className="h-full w-1/2 rounded-md">
                    <img src={image} alt="" className="rounded-3xl"   />
                </div>
                <div className="h-full w-2/4 flex flex-col justify-between items-center">
                    <div>
                        <h1 className="w-full m-0 font-thin text-5xl text-center ">{title}</h1>
                        <h3 className="w-full mt-5 mb-10 font-thin text-8xl text-center">{price?"$":""} {price}</h3>
                        <p className="w-4/5 mt-5 mb-10 font-thin text-xl text-center">{description}</p>
                    </div>
                    <Contador style={{display:`${props.contador?"block":"none"}`}} handleConfirm={props.SetConfirm} cantidad={0}/>
                </div>
            </div>
)
}