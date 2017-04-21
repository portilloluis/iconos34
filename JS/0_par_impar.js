/*
Comentario
de varias
lineas
*/
//comentario de un linea

/* Código JS Frontend */
function parImpar() {
  let numero = prompt('Ingresa un número'),
    modulo = numero % 2,
    //concatenación
    par = 'El número: ' + numero + ' es Par',
    //templates string ES6
    impar = `El número ${numero} es Impar`,
    ternario = ( modulo === 1 ) ? impar : par

  return ternario

    /*if ( modulo === 0 ) {
      return par
    } else {
      return impar
    }*/
    
    //operador ternario
    // variable = (condicion) ? true : false

}

/* Código JS Backend */
/*function parImpar() {
	process.stdout.write('Ingresa un número: ')		
	
	process.stdin.once('data', numero => {
		let modulo = numero % 2,
			par = `El número: ${numero} es Par`,
			impar = `El número: ${numero} es Impar`,
			residuo = (modulo === 1) ? impar : par
		
		process.stdout.write(residuo)
		process.exit()
	})
}*/

parImpar()