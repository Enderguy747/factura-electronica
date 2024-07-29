import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFormattedDate():string{
  const date = new Date();

  // Obtener la fecha en formato ISO y dividirla para insertar el signo de la zona horaria
  const isoString = date.toISOString(); // '2024-07-04T20:11:55.000Z'
  const datePart = isoString.split('.')[0]; // '2024-07-04T20:11:55'

  // Obtener el desplazamiento de la zona horaria
  const timezoneOffset = -date.getTimezoneOffset();
  const sign = timezoneOffset >= 0 ? '+' : '-';
  const offsetHours = Math.floor(Math.abs(timezoneOffset) / 60)
      .toString()
      .padStart(2, '0');
  const offsetMinutes = (Math.abs(timezoneOffset) % 60)
      .toString()
      .padStart(2, '0');
  const timezonePart = `${sign}${offsetHours}:${offsetMinutes}`;

  return `${datePart}${timezonePart}`;
}
