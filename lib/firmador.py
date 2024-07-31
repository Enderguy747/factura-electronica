import subprocess

import os
subprocess.call(['java', '-jar', 'lib/firmador.jar','sign_factura', 
                 'lib/050422041413.p12' , '9827' , 'lib/factura.xml', 
                 'lib/factura-firmada.xml'])

print("factura firmada con exito")