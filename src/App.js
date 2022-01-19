import React, { useState } from 'react'
import './styles/App.scss'
import MainInfoForm from './components/mainWindow/mainWindow'
import WeatherTab from './components/mainWindow/weatherInfo'
import disablePunctioation from './utils/regExp'

const API_KEY = 'b6fd0cd5ec30f48c66ef2e4ede481445'

function App() {
  const [weatherData, setWeatherData] = useState({})

  const gettingWeather = async (event) => {
    event.preventDefault()
    const city = event.target?.elements?.city?.value ?? ''

    if (city) {
      const punctuationless = city.replace(/[.,<>/#!$%^&*;:{}=\-_`~()]/g, '')
      const ExtraSimpolnessCityName = punctuationless.replace(/\s{2,}/g, '')

      const apiUrl = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${ExtraSimpolnessCityName}&appid=${API_KEY}&units=metric`,
      )

      const data = await apiUrl.json()

      if (data.cod !== '404') {
        const sunset = data.sys.sunset
        const date = new Date()

        date.setTime(sunset)

        const sunset_date =
          date.getHours() +
          'hr:' +
          date.getMinutes() +
          'mn:' +
          date.getSeconds() +
          's'

        setWeatherData(data)
      }
    }
    if (!city) {
      this.setState({
        error: 'Choes the city',
      })
    }
  }
  return (
    <div className="App">
      <main className="main">
        <div className="main__window">
          <MainInfoForm weatherMethod={gettingWeather} />
          <WeatherTab weatherData={weatherData} />
        </div>
      </main>
    </div>
  )
}

export default App
