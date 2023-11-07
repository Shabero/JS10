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

const getCat = document.querySelector('#get-cat')
const cat = document.querySelector('#cat')
const apiToken = 'live_Zc4tnamzIqO5XLpMD8aXqETRSVqpdasICqw0bsSiuJ6Hkh6OKyb3o7mkgTJqonnI'
getCat.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(imgData => {
            imgUrl = imgData[0].url
            cat.setAttribute('src', imgUrl)
        })
})