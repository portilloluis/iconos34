;
((d, w) => {
  const panel = d.querySelector('.Panel'),
    panelBtn = d.querySelector('.Panel-button'),
    hamburger = d.querySelector('.hamburger'),
    mq = w.matchMedia('(min-width: 64em)')
  
  function closePanel (mq) {
    if (mq.matches) {
      panel.classList.remove('is-active')
      hamburger.classList.remove('is-active')
    }
  }

  panelBtn.addEventListener('click', (e) => {
    //console.log(e)
    panel.classList.toggle('is-active')
    hamburger.classList.toggle('is-active')
  })

  mq.addListener(closePanel)
  closePanel(mq)
})(document, window);

/*
Vanilla JS
  //Manejador de Eventos Semántico - No puedo manejade diferentes funciones en el mismo evento
  window.onload = function () {
    código
  }
  //Manejador de Eventos Múltiples - Me permite gestionar varias funciones en el mismo evento
  window.addEventListener('load', function () {
    código
  })

  window.removeEventListener('load', function () {
    código
  })

  document.addEventListener('DOMContentLoaded', function () {
    alert('Ha cargado el documento')
  })

jQuery
  $(document).ready(function (){
    código
  })

  $(document).on('ready', function () {

  })

  $(document).off('ready', function() {

  })

  $(window).load(function () {
    código
  })
*/