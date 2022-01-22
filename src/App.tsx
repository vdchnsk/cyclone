import React, { useState } from 'react'
import './styles/App.scss'
import MainInfoForm from './components/mainWindow/mainWindow'
import WeatherTab from './components/mainWindow/weatherInfo'
import { WeathercityInfo, WeatherDataElement } from '@types/weatherInfo/main'
import disablePunctioation from './utils/regExp'

const API_KEY = 'b6fd0cd5ec30f48c66ef2e4ede481445'

const App = () => {
  const [weatherData, setWeatherData] = useState<WeathercityInfo>({})

  interface SyntheticEvent {
    bubbles: boolean
    cancelable: boolean
    currentTarget: EventTarget
    defaultPrevented: boolean
    eventPhase: number
    isTrusted: boolean
    nativeEvent: Event
    preventDefault(): void
    stopPropagation(): void
    timeStamp: Date
    type: string
  }

  interface WeatherData {
    elements: WeatherDataElement
  }

  interface CityDataTransferEvent extends SyntheticEvent {
    target: WeatherData
  }

  const gettingWeather = async (event: CityDataTransferEvent) => {
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
      setWeatherData({
        ...weatherData,
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
