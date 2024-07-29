import { z } from "zod";

export const FormSchema = z.object({
    nombre: z.string()
        .min(2, { message: "El nombre debe ser mayor a 2 caracteres", }),

    correo: z.string().
        email({ message: " El correo debe ser un correo válido" }),

    cedula: z.string().
        min(9, { message: "La cedula debe tener minimo 9 digitos" }).
        transform((value) => Number(value) || 0),

    tipoCedula: z.string().
        min(1, { message: "Debe seleccionar un tipo de cedula" }),

    telefono: z.string().
        min(8, { message: "EL numero debe ser de 8 digitos" }),





    direccion: z.string().
        min(10, { message: "La dirección es requerida" }),

    detalleArticulo: z.string().
        min(1, { message: "El detalle del artículo es requerido" }),

    cantidadArticulo: z.string().
        min(1, { message: "La cantidad es requerida" }).
        transform((value) => Number(value) || 0),

    precioUnitario: z.string().
        min(1, { message: "El; precio unitario es requerido" }).
        transform((value) => Number(value) || 0),

    metodoPago: z.string().
        min(1, { message: "El método de pago es requerido" }),

    plazoPago: z.string().
        min(1, { message: "El plazo de pago es requerido" }).
        optional(),

    tipoDeVenta: z.string().
        min(1, { message: "El Tipo de venta es requerida" }).
        optional(),

    codImpuesto: z.string().
        min(1, { message: "El tipo de impuesto es requerido" }),


    cabys: z.string().
        min(1, { message: "Debe Selecionar el codigo CABYS" })



})

export const facturaElectronicaDefaulValues = {
    nombre: "",
    correo: "",
    tipoCedula: "01",
    cedula: undefined,
    telefono: "",
    //direccion del receptor
    direccion: "",
    //detalle de servicio-compra
    detalleArticulo: "",
    cantidadArticulo: undefined,
    precioUnitario: undefined,
    metodoPago: "01",
    tipoDeVenta: "01",
    plazoPago: undefined,
    codImpuesto: "",
    cabys: "",

}


export const cabys = [
    {
        id: 2933001010000,
        description: "Zapato de Cuero Hombre"
    },
    {
        id: 2933002010000,
        description: "Zapato de Cuero Mujer"
    },
    {
        id: 2932001010000,
        description: "Tenis Hombre"
    },
    {
        id: 2932002010000,
        description: "Tenis Mujer"
    },
    {
        id: 2820203029900,
        description: "Camisas"
    },
]