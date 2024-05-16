import { createContext } from "react"; 

export const contextoOrder = createContext({
});

const Provider = contextoOrder.Provider

export default function CustomContextOrder(props)
{
    return(
        <Provider value={props.value}>
            {props.children}
        </Provider>
    )

}