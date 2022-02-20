import React from 'react'

import type { WeatherDataElement } from 'weatherInfo/main'
import { Alert } from '../alert/alert'
import { CHOOSE_CITY_ABOVE } from '../../constants/Errors'
import { WeatherInfoCard } from '../cards/weather_info_card/WeatherInfoCard'

export const WeatherTab = ({ weatherData }: { weatherData: WeatherDataElement }): JSX.Element => {
  if (weatherData.error) {
    return <Alert message={weatherData.error} iconSource="assets/icons/error_icon.png" />
  }

  if (!weatherData.name) {
    return <Alert message={CHOOSE_CITY_ABOVE} iconSource="assets/icons/notify_icon.png" />
  }

  return (
    <main className="weatherInfoTab">
      <div className="weatherInfoTab__outputTab-general">
        <WeatherInfoCard
          tabTitle="Place"
          content={`${weatherData?.name}, ${weatherData?.sys?.country}`}
          image="assets/icons/buildings_icon.png"
          imageAlt="Building illustraion"
        />
        <WeatherInfoCard
          tabTitle="Temperature"
          content={`${weatherData?.main?.temp} °C`}
          image="assets/icons/thermometer_icon.png"
          imageAlt="Temperature illustraion"
        />
        <WeatherInfoCard
          tabTitle="Preassure"
          content={`${weatherData?.main?.pressure} Pa`}
          image="assets/icons/preassure_icon.png"
          imageAlt="Preassure illustraion"
        />
        <WeatherInfoCard
          tabTitle="Sunset"
          content={weatherData.sunset}
          image="assets/icons/sunset_icon.png"
          imageAlt="Preassure illustraion"
        />
      </div>
    </main>
  )
}
