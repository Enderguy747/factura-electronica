"use server"
import fs from 'fs'
import { exec, spawn } from "child_process";


export async function writeXML(xml: string) {
    await fs.writeFile("lib/factura.xml", xml,
        {
            encoding: "utf8",
            flag: "w",
            mode: 0o666
        },
        (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
                console.log("The written has the following contents:");
                console.log(fs.readFileSync("lib/factura.xml", "utf8"));
            }
        });
}

export async function signXML() {

    await exec("python lib/firmador.py" , (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

}
export async function sendXML() {

  await  exec("python lib/enviador.py" , (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

}