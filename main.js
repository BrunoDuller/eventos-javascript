import './style.css'


export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  
  // Botão para aumentar o contador
  element.addEventListener('click', () => setCounter(counter + 1))
  
  // Botão para diminuir o contador
  const decreaseButton = document.querySelector('#decreaseCounter')
  decreaseButton.addEventListener('click', () => setCounter(counter - 1))

  setCounter(0)
}
setupCounter(document.querySelector('#counter'))
