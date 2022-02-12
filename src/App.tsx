import React, { useState } from 'react'

import './styles/App.scss'

import { CityDataTransferEvent, WeatherDataElement } from '@types/weatherInfo/main'

import MainInfoForm from './components/mainWindow/mainWindow'
import WeatherTab from './components/mainWindow/weatherInfo'

import { CITY_IS_NOT_CHOSEN, CITY_IS_NOT_FOUND } from './constants/Errors'

import { formatDate } from './utils/date'
import { formApiUri } from './utils/requests'
import { disablePunctioation, simplifyString } from './utils/regExp'

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataElement>({})
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

    const getSunset = (sunsetData: any): string => {
      const sunset = sunsetData?.sys?.sunset

      return formatDate(sunset)
    }

    if (city) {
      setWeatherDataIsLoading(true)

      try {
        const punctuationlessCityName = disablePunctioation(city)
        const simplifiedCityName = simplifyString(punctuationlessCityName)

        const response = await fetch(formApiUri(simplifiedCityName))

        const data = await response.json()

        if (data.cod === '404') {
          return setWeatherData({
            ...weatherData,
            error: CITY_IS_NOT_FOUND,
          })
        }

        setWeatherData({ ...data, sunset: getSunset(data) })

        setWeatherDataIsLoading(false)
      } catch (error: any) {
        setWeatherData({
          ...weatherData,
          error: error.message,
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
