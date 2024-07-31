import subprocess

subprocess.call(['java', '-jar', 'lib/firmador.jar',
                 'send_factura', 
                 'https://api-sandbox.comprobanteselectronicos.go.cr/recepcion/v1/recepcion/' ,
                 'lib/factura-firmada.xml' , 'cpf-05-0422-0414@stag.comprobanteselectronicos.go.cr', 
                 'pb?_6vu@!oNB;5mtF?]V'])

print('Factura enviada')

