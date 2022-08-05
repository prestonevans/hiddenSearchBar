const form = document.querySelector('form')
const input = document.querySelector('input')

form.addEventListener('click',() => {
    form.classList.toggle('show')
    input.focus()
})
