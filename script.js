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
        .then(personInfo => {
            name.innerHTML = personInfo.name
            color.innerHTML = personInfo.hair_color
            vehicleUrl = personInfo.vehicles[0]
            fetch(vehicleUrl)
                .then(res => res.json())
                .then(vehicleInfo => {
                    vehicle.innerHTML = vehicleInfo.vehicle
                    model.innerHTML = vehicleInfo.model
                    manufacturer.innerHTML = vehicleInfo.manufacturer
                })
        })
})

