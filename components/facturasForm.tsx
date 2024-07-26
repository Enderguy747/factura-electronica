"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
    nombre: z.string().min(2, { message: "El nombre debe ser mayor a 2 caracteres", }),
    correo: z.string().email({ message: "Debe ser un correo válido" }),
    cedula: z.string().min(9, { message: "La cedula debe contener almenos 9 digitos" }),
    tipoCedula: z.string().min(1, { message: "Debe seleccionar un tipo de cedula" }),
    /*
    telefono: z.number().positive({ message: "Debe ser un número positivo" }),
    provincia: z.number().positive({ message: "Debe ser un número positivo" }),
    canton: z.number().positive({ message: "Debe ser un número positivo" }),
    distrito: z.number().positive({ message: "Debe ser un número positivo" }),
    direccion: z.string().min(1, { message: "La dirección es requerida" }),
    detalleArticulo: z.string().min(1, { message: "El detalle del artículo es requerido" }),
    cantidad: z.number().positive({ message: "Debe ser un número positivo" }),
    precioUnitario: z.number().positive({ message: "Debe ser un número positivo" }),
    metodoPago: z.string().min(1, { message: "El método de pago es requerido" }),
    plazoPago: z.string().min(1, { message: "El plazo de pago es requerido" }),
    codImpuesto: z.number().positive({ message: "Debe ser un número positivo" }),
    MontoImpuestp: z.number().positive({ message: "Debe ser un número positivo" }),
    cabys: z.number().positive({ message: "Debe ser un número positivo" }),
    */
})

export function InputForm() {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            //datos del receptor
            nombre: "",
            correo: "",
            tipoCedula: "",
            cedula: "",
            /*
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

            nombre: "",
            correo: "",
            tipoCedula: "",
            cedula: "",
            telefono: "",
            provincia: "",
            canton: "",
            distrito: "",
            direccion: "",
            detalleArticulo: "",
            cantidad: "",
            precioUnitario: "",
            metodoPago: "",
            plazoPago: "",
            codImpuesto: "",
            MontoImpuestp: "",
            cabys: "",
            */
        },
    })




    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" container mx-auto w-2/3 space-y-6">

                <FormField
                    control={form.control}
                    name="nombre"
                   
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="Nombre" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="correo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo</FormLabel>
                            <FormControl>
                                <Input placeholder="example@some.thing" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="cedula"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cedula</FormLabel>
                            <FormControl>
                                <Input placeholder="0102340567" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="tipoCedula"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tipo de Cedula</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Nacional/juridica etc" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="1">juridica</SelectItem>
                                    <SelectItem value="2">Nacional</SelectItem>
                                    <SelectItem value="3">DIMEX</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />



                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
