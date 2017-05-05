;
((c, d) => {
  const lista = d.querySelector('#lista'),
    primerLi = lista.firstElementChild,
    nuevaLi = d.createElement('li'),
    txtLi = d.createTextNode('Lista 6'),
    p1 = d.querySelector('#uno'),
    p2 = d.querySelector('#dos'),
    container = d.querySelector('#container'),
    a = d.querySelector('.link')
    
  let p3

  c(
    lista,
    'Nodos',
    lista.parentNode,
    lista.childNodes,
    lista.firstChild,
    lista.lastChild,
    lista.previousSibling,
		lista.nextSibling,
    'Elementos',
    lista.parentElement,
    lista.children,
		lista.firstElementChild,
    lista.children[0],
		lista.lastElementChild,
		lista.previousElementSibling,
		lista.nextElementSibling,
    primerLi.parentElement.parentElement
  )

  nuevaLi.appendChild(txtLi)
  lista.appendChild(nuevaLi)
  p3 = p2.cloneNode(true)
  //container.appendChild(p3)
  container.insertBefore(p3, lista)
  lista.removeChild(lista.firstElementChild)
  lista.replaceChild(lista.children[4], lista.children[0])

  p3.innerText = '<b>Contenido del Párrafo 3</b>'
  p1.innerHTML = '<b>Contenido del Párrafo 1</b>'

  c(
    container.className,
    container.classList,
    container.classList[0],
    container.classList[1],
    container.classList.contains('fixed'),
    container.classList.contains('item')
  )
  
  container.classList.add('item')
  container.classList.remove('section')
  container.classList.toggle('palanca')
  container.classList.toggle('palanca')

  //getters
  c(
    a.href,
    a.getAttribute('target'),
    a.style,
    a.style.color
  )

  //setters
  a.href = 'https://jonmircha.github.io/edjs-paradigmas2017/'
  a.setAttribute('target', '_self')
  a.style.borderRadius = '.5rem'
  a.style.padding = '.5rem 1rem'
  a.style.fontSize = '200%'
  p3.id = 'tres'

  d.documentElement.lang = 'es'
  d.head.querySelector('title').innerText = 'Cambiando el Título'
  
  c(
    d.body,
    d.head,
    d.documentElement
  )
})(console.log, document);