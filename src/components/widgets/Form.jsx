import InputForm from "./InputForm"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "flowbite-react"

export default function Form(props){

    const notify = () => toast("Wow so easy!");

    const handleSubmit = (e) => {
        e.preventDefault()


        class Comprador{
            constructor(email, nombre, telefono)
            {
                this.email = email
                this.nombre = nombre
                this.telefono = telefono
            }
        }

        const email = e.target[0].value
        const email2 = e.target[1].value
        const nombre = e.target[2].value
        const telefono = e.target[3].value

        if (email == email2)
        {
            const datos = new Comprador(email, nombre, telefono)
            props.handleConfirm(datos)
        }
        else
        {
            toast.error('los emails no coinciden, revisalo antes de continuar', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
                });
        }

    }

    return(
        <>
        <form
         onSubmit={handleSubmit} className="mb-5 flex flex-col"
        >
                <InputForm placeholder="Email ej: nombre.apellido@gmail.com"></InputForm>
                <InputForm placeholder="Repita el email"></InputForm>
                <InputForm placeholder="Nombre"></InputForm>
                <InputForm placeholder="Numero de Telefono"></InputForm>
                <Button to="" type="submit">Comprar</Button>
        </form>
        <ToastContainer />
        </>
    )
}