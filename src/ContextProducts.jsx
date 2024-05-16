import { createContext } from "react"; 

export const contextoProductos = createContext({
});

const Provider = contextoProductos.Provider

export default function CustomContextProducts(props)
{
    return(
        <Provider value={props.value}>
            {props.children}
        </Provider>

    )

}