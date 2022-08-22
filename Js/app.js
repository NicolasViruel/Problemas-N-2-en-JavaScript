/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
 si la edad ingresada no es un número válido indicarlo en un mensaje.
 */

 /*
let edad = parseInt(prompt("Por favor diga su edad"))

if (edad >= 18) {
    document.write("Usted es admitido para conducir")
} else if (edad < 18){
    alert ("Usted aun no cumple con la edad solicitada")
}else{
    !isNaN(edad)
    alert("Por favor digite solo numeros")
}

*/


/*
2- Escribir un programa que solicite una nota (número) de 0  a 10.
 Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”
. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

*/

/*
let nota = parseInt(prompt("Digite una Numero de 0 a 10"))

if (nota >=0 || nota <=10) {
    switch (nota) {
        case 0:
        case 1:
        case 2:
            document.write("Muy Deficiente");
            break;
        case 3:
        case 4:
            document.write("Insuficiente");
            break;    
        case 5:
        case 6:
            document.write("Suficiente");
            break;
        case 7 :
            document.write("Bien");
            break;
        case 8:
        case 9:
            document.write("Notable");
            break;
        case 10:
            document.write("Sobresaliente");
            break;          
        default:
            alert("Numero erróneo");
            break;
    }
} else {
    !isNaN (nota) 
    alert("Introduce un numero valido")
}  

*/

/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/

/*
let palabras = ""

do { let texto = prompt("Ingrese una cadena de texto");
         palabras = palabras + texto + "-"
     
}while (confirm("Pulse aceptar si quiere agregar otra palabra"));

document.write("La frase que armo es: " + palabras)

*/

/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert»
 y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

*/
/*
let suma = 0;

do { let numero_usuario = parseInt(prompt ("Ingrese un numero")) 
    
    if (!isNaN (suma)) {
        suma = suma + numero_usuario;
    } else {
         
        alert ("por favor digite un numero")
    }
    
}while (confirm("Pulse aceptar si quiere agregar otro numero"));
    document.write("la suma es: " + suma  )

*/
/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/
/*
let numero= 0
let inmput= ""
let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"] // Esto es un array

while (inmput =(prompt("Ingrese un numero por favor"))) {
    console.log (inmput)
    if (isNaN (inmput)) {
        alert ("Por favor digite un numero")
    }else{
        numero = parseInt (inmput) 
        if (numero < 0) {
            numero = 0
        }
        if (numero > 99999999) { // esto es un control de rango
            numero = 99999999
        }

        let resto= numero % 23

       document.write ("el resultado es " + letras  [resto])

    }
}
*/
/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/

/*
for (let index = 0; index < 30; index++) {
    
    for (let numero = 0; numero < index; numero++) {;
        document.write(index);
        
    }
    document.write("<br>")

}
*/
/*
7- Haz un script que escriba una pirámide inversa de los números
 del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
*/
/*
let j = 0
let numero_usuario = prompt ("Ingrese un numero")

while ((numero_usuario <= 1) || (numero_usuario > 50)) {
    alert("Su rango maximo es 50")
    numero_usuario = prompt ("Ingrese un numero")
}

for (let index = numero_usuario; index >= 1; index--) {
    for (let j = 0; j < index; j++) {
        document.write(index)
        
    }
    document.write("<br>")
} 
*/

/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/
/*
let numero = parseInt(prompt("Ingrese un numero"))
let j = 0

while (numero < 1 || numero > 50) {
    alert("Ingrese un numero dentro del rango")
    numero = parseInt(prompt("Ingrese un numero dentro del rangos"))
}for (let index = 0; index < numero; index++) {
    
    for (let j = 1; j < index; j++) {
       document.write(j) 
        
    }
    document.write("<br>")
}
*/
/*
9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9
 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/
/*
for (let index = 1; index < 501; index++) {
    document.write(index)
    
    if (index % 4 ==0 ) {
        document.write(" Multiplo de 4")
    }
    if (index % 9 == 0){
        document.write (" Multiplo de 9")
    }
    if (index % 5 == 0)
        document.write ("<br>__________________- ")
    document.write("<br>")
}
*/
/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla.
 Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente
 . Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/
/*
let numero_tabla = parseInt(prompt("Ingrese un numero de tabla"))

if (!isNaN) {
    alert ("ingrese un valor numerico")
}for (let index = 0; index <= 10 ; index++) {
    document.write("La tabla del " + numero_tabla + " es " + index + "x" + numero_tabla + "=" + index*numero_tabla + "<br> <br>")
    
}
*/
/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

*/
/*
    let edad1 = parseInt(prompt("Ingrese la edad 1"))
    let edad2 = parseInt(prompt("Ingrese la edad 1"))
    let edad3 = parseInt(prompt("Ingrese la edad 1"))

    let edades = [edad1, edad2 , edad3];
    
    let nombre1 = prompt("Ingrese la nombre 1")
    //nombres.push (nombre1)
    let nombre2 = prompt("Ingrese la nombre 2")
   // nombres.push (nombre2)
    let nombre3 = prompt("Ingrese la nombre 3")
   // nombres.push (nombre3)
   let nombres = [nombre1, nombre2, nombre3];
    
    let posMaxima = 0
    let edadMaxima = Math.max.apply(null, edades);
         posMaxima = edades.indexOf(edadMaxima)
    
   document.write("La edad Maxima es " + edadMaxima + " del nombre " + nombres[posMaxima])
   // document.write("la cual le correspode a: " + nombres [edades.indexOf(edadMaxima)]);

*/    
/*
12- Realiza un script que genere un número aleatorio entre 1 y 99
*/
/*
    let numero = 30;
    let numeroAleatorio = Math.round(Math.random() * numero)

    document.write(numeroAleatorio)
*/
/*
13- Realiza un script que pida un texto y lo muestre en mayúsculas.
*/
/*
let texto = prompt("Ingrese un texto")
let convertidorMay = texto.toUpperCase()   
    document.write (convertidorMay) 

*/

/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace.
 Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/
/*
let text = prompt("Ingrese un texto")
let letras = ""

for (let index = 0; index < text.length; index++) {
    
     letras = letras + text.charAt(index) + "-"
}
document.write(letras)
*/

/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/
/*
let texto = prompt("Ingrese un texto");
let vocales = ["a" , "e", "i" , "o", "u", "A" , "E" , "I" , "O" , "U"];
let contador = 0;
let i = ""

for (let i = 0; i < texto.length; i++); {
    if (vocales.indexOf(texto[i]) <= 0) {
        console.log(texto + " su texto es ") ; 
        contador = contador + 1 ;
    }
    
}document.write("Sus vocales son " + contador)
*/
/*
16- Realiza un script que pida una cadena de texto y la devuelva al revés.
 Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/ 
/*    
let text = prompt("Ingrese un texto")
let letras = ""

for (let index = text.length -1 ; index >= 0; index--) {
    
    letras = letras + text.charAt(index)
     
}
document.write(letras)
*/
/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

/*
let str=prompt("Ingrese un texto");
let i=0;
let posicion=0;

do{
    if(str.substr(posicion,1)=="a"||str.substr(posicion,1)=="e"||str.substr(posicion,1)=="i"||str.substr(posicion,1)=="o"||str.substr(posicion,1)=="u"){
        document.write("<br>La posicion de la primera vocal es: "+posicion);
        i++;
    }else{
        posicion++;
    }  
}while(i==0)
*/

