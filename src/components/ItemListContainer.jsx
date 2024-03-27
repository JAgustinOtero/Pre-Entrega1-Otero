export default function ItemListContainer({greeting}){
    return(
        <div className=" h-full w-full flex items-center justify-center">
            <p className="text-5xl">{greeting}</p>
        </div>

    );
}