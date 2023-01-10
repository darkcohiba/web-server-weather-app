//selectors
const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('input')

console.log("Client side javascript is loading");


// fetch('https://puzzle.mead.io/puzzle')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
    


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = searchTerm.value
    console.log(location)

    fetch(`http://localhost:3000/weather?address=${location}`)
    .then(response => response.json())
    .then(data => {
        if (data.error){
            console.log(data.error)
        }else{
            console.log(data.location)
            console.log(data.forcast)
        }
    })
})