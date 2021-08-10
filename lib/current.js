let state = { currentPlay }
let elements = document.querySelectorAll('[data-bind]')
elements.forEach( element => element.innerText = state[element.dataset.bind])