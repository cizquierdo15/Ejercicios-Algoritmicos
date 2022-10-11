//leer nº entero
let NUMERO = parseInt( prompt( " Dame un entero " ) );

//comprobar datos
while( isNaN(NUMERO) ){
  alert("eso no es un entero");
  NUMERO = parseInt( prompt( "Dame un numero entero") );
}

function LEER_NUMERO(NUMERO) {
    //ver si es par o impar
    if ( NUMERO % 2 == 0) {
        console.log(NUMERO + " es par");
        //todos los pares hasta 0
        for (; NUMERO >= 0 ; NUMERO--) {
            if(NUMERO % 2 == 0){ console.log(NUMERO) }
        }
    }
    else{
        console.log(` ${NUMERO} es impar `);
        //todos los impares hasta 1
        while (NUMERO != 0) {
            if(NUMERO % 2 != 0){ console.log(NUMERO); }
            NUMERO --;
        }
    }
}

//ejecucion
LEER_NUMERO(NUMERO);