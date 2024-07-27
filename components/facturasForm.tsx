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
import { FormSchema } from "@/lib/schemas"


export function InputForm() {


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            //datos del receptor
            nombre: "",
            correo: "",
            tipoCedula: "",
            cedula: undefined,
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
