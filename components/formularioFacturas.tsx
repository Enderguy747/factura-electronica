'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function FormularioFacturas() {
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
            //datos del receptor
            nombre: "",
            correo: "",
            tipoCedula: "",
            cedula: 0,
            telefono: 0,
            //direccion del receptor
            provincia: 0,
            canton: 0,
            distrito: 0,
            direccion: "",
            //detalle de servicio-compra
            detalleArticulo: "",
            cantidad: 0,
            precioUnitario: 0,
            metodoPago: "",
            plazoPago: "",
            codImpuesto: 0,
            MontoImpuestp: 0,
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
                    maxLength: 50,
                    minLength: 2,
                })}
            />
            {errors.nombre?.type === "required" && <span className="text-red-500" >Nombre requerido</span>}

            {errors.nombre?.type === "maxLength" && (
                <span className="text-red-500">Nombre no debe ser mayor a 20 caracteres</span>
            )}
            {errors.nombre?.type === "minLength" && (
                <span className="text-red-500">Nombre debe ser mayor a 2 caracteres</span>
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
            {errors.correo && <span className="text-red-500">{errors.correo.message}</span>}


            <Label>Tipo de identificacion :</Label>
            <Input
                {...register("tipoCedula", {
                    required: {
                        value: true,
                        message: "el tipo de cedula es requerido",
                    }

                })}
            >
                
            </Input>
            {errors.nombre?.type === "required" && <span className="text-red-500" >El tipo de cedula es requerido</span>}




            <Button >Enviar</Button>


        </form >
    );
}

export default FormularioFacturas;
