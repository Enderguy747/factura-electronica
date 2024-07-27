import { z } from "zod";

export const FormSchema = z.object({
    nombre: z.string()
    .min(2, { message: "El nombre debe ser mayor a 2 caracteres", }),
    
    correo: z.string().
    email({ message: "Debe ser un correo válido" }),

    cedula: z.string().
    min(9, { message: "Lacedula debe tener minimo 9 digitos" }).
    transform((value) => Number(value) || 0),

    tipoCedula: z.
    string().
    min(1, { message: "Debe seleccionar un tipo de cedula" }),
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