
function LEER_PERSONAS() {
    //Vars
    let nPersonas = 50;
    const PERSONAS = [];
    let adultos = 0;
    let menores = 0;
    let hMayores = 0;
    let mMenores = 0;
    let pAdultos = 0;
    let pMujeres = 0;
    let mujeres = 0;
  
    //rellenar datos PERSONAS
    for (let i = 0; i < nPersonas; i++) {
      let sexo = prompt( "dime tu sexo:(M o F), Nº" + i );
      let edad = parseInt( prompt("dime tu edad") );
  
      let dato = [sexo, edad];
      PERSONAS.push(dato);
    }
  
    for (const persona of PERSONAS) {
        console.log(persona);
        //cantidad mayores de edad
        if (persona[1] >= 18) { adultos++; }
        //cantidad de menores
        else{ menores++; }
  
        // hombres mayores
        if (persona[0] == "M" && persona[1] >= 18) { hMayores++; }
        //mujerers menores
        if (persona[0] == "F" && persona[1] < 18) { mMenores++; }
        //mujeres 
        if (persona[0] == "F"){ mujeres++; }
    }
  
    // % de mayores del total
    pAdultos = parseInt( (adultos / nPersonas) * 100 );
  
    // % de mujeres del total
    pMujeres = parseInt( (mujeres / nPersonas) * 100 );
  
    return alert(`
            Hay ${adultos} mayores de edad,
            Hay ${menores} menores de edad,
            Hay ${hMayores} hombres mayores de edad,
            Hay ${mMenores} mujeres menores de edad,
            El porcentaje de adultos es del ${pAdultos}%,
            El porcentaje de mujeres es del ${pMujeres}%,
            
    `);
  }
  //ejecucion
  LEER_PERSONAS();