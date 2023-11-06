// setTimeout(() => {
//     console.log(123);
// }, 2000)
// const handleInterval = setInterval(() => {
//     console.log('its interval');
// }, 2000)
//
// const handleClear = () => {
//     clearInterval(handleInterval)
// }
//
// setTimeout(() => {
//     handleClear()
// }, 10000)
//
// console.log(333)
// console.log('hello')
// console.log('world')

const name = document.querySelector('#name')
const color = document.querySelector('#color')
const vehicle = document.querySelector('#vehicle')
const model = document.querySelector('#model')
const manufacturer = document.querySelector('#manufacturer')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
    let value = input.value
    fetch(`https://swapi.dev/api/people/${value}`)
        .then(response => response.json())
        .then(json => {
            name.innerHTML = json.name
            color.innerHTML = json.hair_color
            fetch(`https://swapi.dev/api/vehicles/${value}`)
                .then(response => response.json())
                .then(json => {
                    vehicle.innerHTML = json.vehicle
                    model.innerHTML = json.model
                    manufacturer.innerHTML = json.manufacturer
                })
        })
})