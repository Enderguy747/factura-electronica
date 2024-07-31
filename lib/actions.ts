"use client"

import { create } from "xmlbuilder2"
import { getFormattedDate } from "@/lib/utils";
import { sendXML, signXML, writeXML } from "@/lib/xmlActions";
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
    const subtotal = (formData.precioUnitario * formData.cantidadArticulo)
    const montoImpuesto = formData.codImpuesto === "01" ? subtotal * 0.13 : subtotal
    const montoTotal = (formData.precioUnitario * formData.cantidadArticulo)

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
                CorreoElectronico: "jo.sed982705@gmail.com"
            },
            Receptor: {
                Nombre: formData.nombre,
                Identificacion: {
                    Tipo: formData.tipoCedula,
                    Numero: formData.cedula
                },
                Telefono: {
                    CodigoPais: 506,
                    NumTelefono: formData.telefono,
                },
                CorreoElectronico: formData.correo,
            },

            CondicionVenta: formData.tipoDeVenta,
            MedioPago: formData.metodoPago,

            DetalleServicio: {
                LineaDetalle: {
                    NumeroLinea: 1,
                    CodigoComercial: {
                        Tipo: "04",
                        Codigo: formData.cabys,
                    },
                    Cantidad: formData.cantidadArticulo,
                    UnidadMedida: "Unid",
                    Detalle: formData.detalleArticulo,
                    PrecioUnitario: formData.precioUnitario,
                    MontoTotal: montoTotal,
                    SubTotal: subtotal,
                    Impuesto: {
                        Codigo: formData.codImpuesto,
                        CodigoTarifa: formData.codImpuesto === "01" ? "08" : "01",
                        Tarifa: formData.codImpuesto === "01" ? "13.0000" : "0.0000",
                        Monto: montoImpuesto,
                    },
                    ImpuestoNeto: 0.0000,
                    MontoTotalLinea: montoTotal + montoImpuesto
                }
            },
            ResumenFactura: {
                TotalServGravados: 0.0000,
                TotalServExentos: 0.0000,
                TotalMercanciasGravadas: subtotal,
                TotalMercanciasExentas: 0.0000,
                TotalGravado: subtotal,
                TotalExento: 0.0000,
                TotalVenta: subtotal,
                TotalDescuentos: 0.0000,
                TotalVentaNeta: subtotal,
                TotalImpuesto: montoImpuesto,
                TotalComprobante: montoTotal + montoImpuesto,
            }

        }
    };

    const doc = create(facturaXML);
    const xml = doc.end({ prettyPrint: true });

    writeXML(xml)
    signXML()
    sendXML()
    console.log(xml);
}


