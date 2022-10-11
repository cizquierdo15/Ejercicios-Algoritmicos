//Vars
let salario;
let hTrabajadas = 0;
let tarifa = 0;

//pedir datos
function LEER_HORAS_TRABAJADA() {
  hTrabajadas = parseInt( prompt("Cuantas horas trabajaste esta semana?"));
}

function TARIFA() {
  tarifa = parseInt( prompt("Cuanto cobras por hora?"));
}
//ejecutar
LEER_HORAS_TRABAJADA();
TARIFA();

//calcular salario
if (hTrabajadas > 40) {
  let dif = hTrabajadas - 40; 
  salario = (40 * tarifa) + ( dif * (tarifa + (tarifa * 0.5) ));
}
else{
  salario = (40 * tarifa);
}
//mostrar salario
console.log( `Tu salario es de ${salario}`);