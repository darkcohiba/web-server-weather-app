//selectors
const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

console.log("Client side javascript is loading");

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = searchTerm.value

    messageOne.textContent = 'Loading weather'
    messageTwo.textContent= ""

    fetch(`http://localhost:3000/weather?address=${location}`)
    .then(response => response.json())
    .then(data => {
        if (data.error){
            messageOne.textContent= `${data.error}`
            messageTwo.textContent= ""
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent= `${data.forcast}`
        }
    })
})