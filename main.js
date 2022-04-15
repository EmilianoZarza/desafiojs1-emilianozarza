let name = prompt("¿Cual es tu nombre?"); //CON ESTO, VOY A ALMACENAR EL NOMBRE DE LA PERSONA EN LA VARIABLE NAME
let age = prompt("¿Cual es tu edad?"); //LO MISMO, PERO ALMACENO EL VALOR DE SU EDAD
let text = ""; //VOY A CREAR ESTA VARIABLE Y DEJARLA VACIA PARA LUEGO REASIGNARLA EN UNA FUNCION
let ageNum = parseInt(age); //VOY A DECLARAR QUE LA VARIABLE AGE SEA UN NUMERO Y NO UNA STRING

const currentDate = new Date(); //ESTA FUNCION SIRVE PARA OBTENER DE LA FECHA DE HOY
const year = currentDate.getFullYear() - Number(age); //ESTO SIRVE PARA DEFINIR QUE QUIERO SOLO EL ANO DE LA VARIABLE DE ARRIBA, NO LA FECHA ENTERA

let message = "Bienvenida/o " + name + ". Hoy tenes " + age + " anos." + " Naciste en el " + year + ". " + text; //CON ESTO JUNTAMOS TODOS LOS DATOS EN UNA SOLA STRING PARA MOSTRAR EN LA CONSOLA

console.log(message); //LLAMAMOS A LA STRING ANTERIORMENTE MENCIONADA PARA QUE ANDE EN LA CONSOLA

let a = prompt("¿Te gustaria saber la tabla de algun numero?¿escribe un numero?")

let info = "Genial," + name + ". La tabla del" + " " + a + " " + "es:";

console.log(info);

for (let i=0; i<=10; i+=1){
    console.log ((a) + "x" + (i) + "=" + a*(i))
}