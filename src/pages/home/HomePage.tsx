import React, { useState } from 'react'

import '../../styles/homePage.scss'

import { CityDataTransferEvent, WeatherDataElement } from '@types/weatherInfo/main'

import MainInfoForm from '../../components/mainWindow/mainWindow'
import WeatherTab from '../../components/mainWindow/weatherInfo'

import { CITY_IS_NOT_CHOSEN, CITY_IS_NOT_FOUND } from '../../constants/Errors'
import { ApiResponse } from '../../constants/API'

import { formatDate } from '../../utils/date'
import { formApiUri } from '../../utils/requests'
import { disablePunctioation, simplifyString } from '../../utils/regExp'

export const HomePage = () => {
  const [weatherData, setWeatherData] = useState<WeatherDataElement>({})
  const [weatherDataIsLoading, setWeatherDataIsLoading] = useState<boolean>(true)

  const requestWeatherData = async (cityName) => {
    const punctuationlessCityName = disablePunctioation(cityName)
    const simplifiedCityName = simplifyString(punctuationlessCityName)

    const response = await fetch(formApiUri(simplifiedCityName))

    const data = await response.json()

    return data
  }

  const getWeather = async (event: CityDataTransferEvent): Promise<void> => {
    event.preventDefault()

    const city = event.target?.elements?.city?.value ?? ''

    if (!city) {
      return setWeatherData({
        ...weatherData,
        error: CITY_IS_NOT_CHOSEN,
      })
    }

    const getSunset = (sunsetData: WeatherDataElement): string => {
      const sunset = sunsetData?.sys?.sunset

      return formatDate(Number(sunset))
    }

    setWeatherDataIsLoading(true)

    try {
      const data = await requestWeatherData(city)

      if (data.cod === ApiResponse.NotFound) {
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
