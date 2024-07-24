'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast"
function Formulario() {
    const { toast } = useToast()

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        reset,
    } = useForm({
        defaultValues: {
            nombre: "",
            correo: "",
            tipoCedula: 0,
            cedula: 0,
            provincia: 0,
            canton: 0,
            distrito: 0,
            direccion: "",
            telefono: 0,

            articulo: "",
            cantidad: 0,
            precio: 0,
            metodoPago: "",
            plazoPago: "",
            impuesto: 0,
            cabys: 0,









        },
    });


    const onSubmit = handleSubmit((data) => {
        console.log(data);
        reset();
    });

    return (
        <form onSubmit={onSubmit} className="flex flex-col mx-auto gap-2">


            <Label>Nombre:</Label>
            <Input
                type="text"
                id="nombre"
                {...register("nombre", {
                    required: {
                        value: true,
                        message: "Nombre es requerido",
                    },
                    maxLength: 20,
                    minLength: 2,
                })}
            />
            {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
            
            {errors.nombre?.type === "maxLength" && (
                <span>Nombre no debe ser mayor a 20 caracteres</span>
            )}
            {errors.nombre?.type === "minLength" && (
                <span>Nombre debe ser mayor a 2 caracteres</span>
            )}




            <Label>Correo Electrónico:</Label>
            <Input
                type="email"
                id="correo"
                {...register("correo", {
                    required: {
                        value: true,
                        message: "Correo es requerido",
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Correo no válido",
                    },
                })}
            />
            {errors.correo && <span>{errors.correo.message}</span>}

            <Label>Cedula:</Label>
            <Input
                type="number"
                id="cedula"
                {...register("cedula", {
                    required: {
                        value: true,
                        message: "Correo es requerido",
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Correo no válido",
                    },
                })}
            />
            {errors.correo && <span>{errors.correo.message}</span>}


            <Button >Enviar</Button>


        </form>
    );
}

export default Formulario;
