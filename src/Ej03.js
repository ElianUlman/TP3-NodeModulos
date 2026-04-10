import dayjs from "dayjs";
function horaria() {
  let horaActual = dayjs().format("HH:mm");
  console.log(`Hora actual: ${horaActual}`);
  let fechaActual = dayjs().format("DD/MM/YYYY");
  console.log(`Fecha actual: ${fechaActual}`);
  const miCumpleaños = dayjs("2009-05-13");
  console.log(`Mi cumpleaños es: ${miCumpleaños.format("DD/MM/YYYY")}`);
}
horaria()
