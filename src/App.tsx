import React, { useState } from 'react'
import './styles/App.scss'
import MainInfoForm from './components/mainWindow/mainWindow'
import WeatherTab from './components/mainWindow/weatherInfo'
import { CITY_IS_NOT_CHOSEN, CITY_IS_NOT_FOUND } from 'constants/Errors'
import { WeathercityInfo, CityDataTransferEvent } from '@types/weatherInfo/main'

const API_KEY = 'b6fd0cd5ec30f48c66ef2e4ede481445'

const App = () => {
  const [weatherData, setWeatherData] = useState<WeathercityInfo>({})
  const [weatherDataIsLoading, setWeatherDataIsLoading] = useState<boolean>(true)

  const getWeather = async (event: CityDataTransferEvent) => {
    event.preventDefault()
    const city = event.target?.elements?.city?.value ?? ''

    if (!city) {
      setWeatherData({
        ...weatherData,
        error: CITY_IS_NOT_CHOSEN,
      })
    }

    if (city) {
      try {
        const punctuationless = city.replace(/[.,<>/#!$%^&*;:{}=\-_`~()]/g, '')
        const simplifiedCityName = punctuationless.replace(/\s{2,}/g, '')

        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${simplifiedCityName}&appid=${API_KEY}`,
        )

        const data = await response.json()

        if (data.cod === '404') {
          return setWeatherData({
            ...weatherData,
            error: CITY_IS_NOT_FOUND,
          })
        }

        setWeatherData(data)

        // * Commented, because it is supposed to be represented as a single function
        //   if (data.cod !== '404') {
        //     const sunset = data.sys.sunset
        //     const date = new Date()

        //     date.setTime(sunset)

        //     const sunset_date =
        //       date.getHours() +
        //       'hr:' +
        //       date.getMinutes() +
        //       'mn:' +
        //       date.getSeconds() +
        //       's'

        // }
      } catch (error: any) {
        setWeatherData({
          ...weatherData,
          error: error,
        })
      }
    }
  }
  return (
    <div className="App">
      <main className="main">
        <div className="main__window">
          <MainInfoForm weatherMethod={getWeather} />
          <WeatherTab weatherData={weatherData} />
        </div>
      </main>
    </div>
  )
}

export default App
