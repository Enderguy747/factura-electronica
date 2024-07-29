"use client"

import { create } from "xmlbuilder2"
import { getFormattedDate } from "@/lib/utils";
type TFormData = {

    nombre: string;
    correo: string;
    cedula: number;
    tipoCedula: string;
    telefono: string;
    direccion: string;
    detalleArticulo: string;
    cantidadArticulo: number;
    precioUnitario: number;
    metodoPago: string;
    codImpuesto: string;
    cabys: string;
    plazoPago?: string | undefined;
    tipoDeVenta?: string | undefined;
}
/*
const transformData = (factura: TFormData) => {
    const facturaArray: Array<{ [key: string]: any }> = [];

    for (const key in factura) {

        if (factura.hasOwnProperty(key)) {
            const obj: { [key: string]: any } = {};

            obj[key as keyof TFormData] = factura[key as keyof TFormData];

            facturaArray.push(obj);
        }
    }
    return facturaArray
}
    */

const localdb = window.localStorage
localdb.setItem('contador', "0")


function generarConsecutivo() {
    let value = localdb.getItem("contador")

    if (value !== null) {
        let counter = parseInt(value, 10);
        const maxDigits = 10;
        counter++;
        localdb.setItem('contador', String(counter))
        return counter.toString().padStart(maxDigits, '0');
    }
}



export async function generateXML(formData: TFormData) {
    const codPais = 506
    const dia = new Date().getDay()
    const mes = new Date().getMonth() + 1
    const anio = new Date().getFullYear().toString().slice(2)
    const ced = 504220414
    const establecimiento = "001"
    const terminal = "00001"
    const tipoComprobante = "01"
    const numeracion = generarConsecutivo()
    const claveComercio = 159874638

    const consecutivo = establecimiento + terminal + tipoComprobante + numeracion

    const clave = `${codPais}0${dia}0${mes}${anio}0${ced}${consecutivo}1${claveComercio}`

    const facturaXML = {
        FacturaElectronica: {
            Clave: clave,
            CodigoActividad: 523202,
            NumeroConsecutivo: consecutivo,
            FechaEmision: getFormattedDate(),
            Emisor: {
                Nombre: "Mongos Boutique",
                Identificacion: {
                    Tipo: "01",
                    Numero: "504220414"
                },
                NombreComercial: "Mongos Boutique",

                Ubicacion: {
                    Provincia: 5,
                    Canton: "01",
                    Distrito: "01",
                    Barrio: "01",
                    OtrasSenas: "400 sur de gollo, condega"
                },
                Telefono: {
                    CodigoPais: 506,
                    NumTelefono: 83760811,
                },
                CorreoElectronico:"jo.sed982705@gmail.com"
            },
            Receptor:{
                Nombre:formData.nombre,
                Identificacion:formData.tipoCedula,
                Numero:formData.cedula,
                Telefono:{
                    CodigoPais:506,
                    NumTelefono:formData.telefono,
                }
            }
        }
    };

    const doc = create(facturaXML);
    const xml = doc.end({ prettyPrint: true });
    console.log(xml);
}


