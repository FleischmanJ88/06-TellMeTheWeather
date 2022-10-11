const form = document.querySelector('#form')
const input = document.querySelector('#input')
const feedbackElement = document.querySelector('#feedback')
var apiKey = '0d293cb76a4297200575f4c5a735a2a2'


// fetch the weather 
function getWeather(location) {
  var { lat } = location
  var { lon } = location

  console.log(location)

  const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${apiKey}`
  console.log('this is from get weather', url)
}


// refactor to a function that fetches coordinates 
form.addEventListener("submit", e => {
  e.preventDefault();

  let inputVal = input.value

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&limit=5&appid=${apiKey}`

  fetch(url)
    .then(response => response.json())
    .then(function (data) {
      getWeather(data)
    })

    //feedbackElement.textContent = data
    .catch(() => {
      feedbackElement.textContent = "Please search for valid location"
    })
})

