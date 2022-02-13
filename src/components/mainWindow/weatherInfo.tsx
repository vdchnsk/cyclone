import React from 'react'

import { Alert } from '../alert/alert'
import { WeatherDataElement } from '../../@types/weatherInfo/main'
import { CHOOSE_CITY_ABOVE } from '../../constants/Errors'
import { WeatherInfoCard } from '../cards/weather_info_card/WeatherInfoCard'

const WeatherTab = ({ weatherData }: { weatherData: WeatherDataElement }): JSX.Element => {
  if (weatherData.error) {
    return (
      <Alert message={weatherData.error} iconSource="../../../public/assets/icons/error_icon.png" />
    )
  }

  if (!weatherData.name) {
    return (
      <Alert
        message={CHOOSE_CITY_ABOVE}
        iconSource="../../../public/assets/icons/notify_icon.png"
      />
    )
  }

  return (
    <main className="weatherInfoTab">
      <div className="weatherInfoTab__outputTab-general">
        <WeatherInfoCard
          tabTitle="Place"
          content={`${weatherData?.name}, ${weatherData?.sys?.country}`}
          image="../../../public/assets/icons/buildings_icon.png"
          imageAlt="Building illustraion"
        />
        <WeatherInfoCard
          tabTitle="Temperature"
          content={`${weatherData?.main?.temp} °C`}
          image="../../../public/assets/icons/thermometer_icon.png"
          imageAlt="Temperature illustraion"
        />
        <WeatherInfoCard
          tabTitle="Preassure"
          content={`${weatherData?.main?.pressure} Pa`}
          image="../../../public/assets/icons/preassure_icon.png"
          imageAlt="Preassure illustraion"
        />
        <WeatherInfoCard
          tabTitle="Sunset"
          content={weatherData.sunset}
          image="../../../public/assets/icons/sunset_icon.png"
          imageAlt="Preassure illustraion"
        />
      </div>
    </main>
  )
}
export default WeatherTab
