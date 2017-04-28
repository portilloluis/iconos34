;
//alert->nombre del método ()->invocación
//alert('Hola Mundo')

//Funciones Anónimas Auto Invocadas versión ES5
/*(function () {
  alert('Hola Mundo al Navegador')
  console.log('Hola Mundo a la Consola')
})();*/

//Función Anónimas Auto Invocada versión ES5 que recibe parametros
/*(function (a, c) {
  a('Hola Mundo al Navegador')
  c('Hola Mundo a la Consola')
})(alert, console.log);*/

//Funcion Anónima Auto Invocada versión ES6
((a, c) => {
  //a('Hola Mundo al Navegador')
  c('Hola Mundo a la Consola')
})(alert, console.log);

((c, d) => {
  //Objeto Literal
  let perro = {
    nombre: 'kEnAi',
    edad: 4,
    esterilizado: true,
    ladrar: () => c('Guauuu Guauuu!!!'),
    comer: function (comida = 'croqueta') {
      //ES5
      c(this.nombre + ' come ' + comida)
      //ES6 - templates strings: interpolar variables dentro de strings
      c(`${this.nombre} come ${comida}`)
    },
    aparecer: function (imagen) {
      let figure = d.createElement('figure'),
        figcaption = d.createElement('figcaption')
        img = d.createElement('img')
      
      img.src = imagen
      figcaption.textContent = this.nombre

      figure.appendChild(img)
      figure.appendChild(figcaption)
      d.body.appendChild(figure)
    }
  }

  c(
    perro,
    perro.nombre,
    perro.edad,
    perro.esterilizado
  )

  perro.ladrar()
  perro.comer()
  perro.comer('tacos')
  perro.aparecer('https://camo.githubusercontent.com/b77a181ad750ac763cf3effac9857e6373000b41/687474703a2f2f626578746c616e2e636f6d2f696d672f706172612d637572736f732f6b656e61692e6a7067')

  //Clases - apartir de ES6
  //JS es Case sensitive distingue entre MAYÚSCULAS y minúsculas
  class Perro {
    constructor (nombre, edad, esterilizado = false) {
      this.nombre = nombre
      this.edad = edad
      this.esterilizado = esterilizado
    }

    ladrar () {
      c('Guauuu Guauuu!!!')
    }

    comer (comida = 'croquetas') {
      c(`${this.nombre} come ${comida}`)
    }

    aparecer (imagen) {
      let figure = d.createElement('figure'),
        figcaption = d.createElement('figcaption')
        img = d.createElement('img')
      
      img.src = imagen
      figcaption.textContent = this.nombre

      figure.appendChild(img)
      figure.appendChild(figcaption)
      d.body.appendChild(figure)
      d.write(`<img src="${imagen}">`)
    }
  }

  //kenai es una instancia de la Clase Perro
  let kenai = new Perro('kEnAi', 4, true),
    boni = new Perro('Boni', 10)

  c(
    kenai,
    kenai.nombre,
    kenai.edad,
    kenai.esterilizado,
    boni,
    boni.nombre,
    boni.edad,
    boni.esterilizado
  )

  kenai.ladrar()
  boni.ladrar()
  kenai.comer()
  boni.comer('bife')
  kenai.aparecer('https://camo.githubusercontent.com/b77a181ad750ac763cf3effac9857e6373000b41/687474703a2f2f626578746c616e2e636f6d2f696d672f706172612d637572736f732f6b656e61692e6a7067')
  boni.aparecer('http://de10.com.mx/sites/default/files/styles/detalle_nota/public/field/image/shutterstock_122056762-boxer.jpg')
})(console.log, document);
