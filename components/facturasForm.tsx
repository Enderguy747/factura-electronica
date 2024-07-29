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
import { FormSchema, facturaElectronicaDefaulValues, cabys } from "@/lib/definitions"
import { useState } from "react"
import { SelectItems } from "@/components/selectItems"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { generateXML } from "@/lib/actions"



export function FacturasForm() {


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: facturaElectronicaDefaulValues
        ,
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

        generateXML(data)

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" container mx-auto w-2/3 gap-5 my-6 flex flex-row  ">

                <Card className="">
                    <CardHeader>
                        Datos del cliente
                    </CardHeader>
                    <CardContent>
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
                            name="telefono"

                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Telefono</FormLabel>
                                    <FormControl>
                                        <Input min="0" type="number" placeholder="88068216" {...field} />
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
                                                <SelectValue placeholder="--Selecione El tipo--" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="01">Nacional</SelectItem>
                                            <SelectItem value="02">Juridica</SelectItem>
                                        </SelectContent>
                                    </Select>
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
                                        <Input type="number" placeholder="0102340567" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />




                        <FormField
                            control={form.control}
                            name="direccion"

                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Direccion</FormLabel>
                                    <FormControl>
                                        <Input placeholder="200 norte del pali del almendro" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        Seccion de articulos
                    </CardHeader>
                    <CardContent>

                        <FormField
                            control={form.control}
                            name="detalleArticulo"

                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Articulo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Zapatos" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="cabys"

                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tipo de Articulo</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="--Selecione El tipo--" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItems cabys={cabys} />
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />

                        <FormField
                            control={form.control}
                            name="cantidadArticulo"

                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cantidad</FormLabel>
                                    <FormControl>
                                        <Input min="1" type="number" placeholder="5" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="precioUnitario"

                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Precio Unitario</FormLabel>
                                    <FormControl>
                                        <Input min="0" type="number" placeholder="₡500" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="metodoPago"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Metodo de pago</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="--Selecione El tipo--" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="01">Efectivo</SelectItem>
                                            <SelectItem value="02">Tarjeta</SelectItem>
                                            <SelectItem value="03">Transferencia Bancaria</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="tipoDeVenta"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tipo de venta</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="--Selecione El tipo--" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent >
                                            <SelectItem value="01">Contado</SelectItem>
                                            <SelectItem value="02">Credito</SelectItem>

                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="plazoPago"

                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Plazo de pago</FormLabel>
                                    <FormControl>
                                        <Input min="0" type="number" placeholder="1 Dia - 30 Dias" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Solo necesario si el tipo de venta es de credito
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="codImpuesto"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tipo de Impuesto</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="--Selecione El tipo--" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="01">IVA 13%</SelectItem>
                                            <SelectItem value="02">Exonerado</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </CardContent>
                    <CardFooter>
                        <Button className="hidden" variant={"secondary"}>Agregar Producto</Button>
                    </CardFooter>
                </Card>







                <Button className="fixed right-8" type="submit">Registrar</Button>
            </form>
        </Form>
    )
}
