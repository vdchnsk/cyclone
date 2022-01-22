import React from 'react'
import { WeatherDataElement } from '../../@types/weatherInfo/main'

const WeatherTab = ({ weatherData }: { weatherData: WeatherDataElement }): JSX.Element => {
  if (weatherData.error) {
    return <h3 className="weatherInfoTab__errorTab">{weatherData.error}</h3>
  }

  return (
    <main className="weatherInfoTab">
      {weatherData.name && (
        <div className="weatherInfoTab__outputTab-general">
          <div className="weatherInfoTab__outputTab-secondary">
            <h3 className="weatherInfoTab__ouputTab-text">Place:</h3>
            <p className="weatherInfoTab__ouputTab-text">
              {weatherData?.name}, {weatherData?.sys?.country}
            </p>
          </div>
          <div className="weatherInfoTab__outputTab-secondary">
            <h3 className="weatherInfoTab__ouputTab-text">Temperature:</h3>
            <p>{weatherData?.main?.temp} °C</p>
          </div>
          <div className="weatherInfoTab__outputTab-secondary">
            <h3 className="weatherInfoTab__ouputTab-text">Preassure:</h3>
            <p className="weatherInfoTab__ouputTab-text">{weatherData?.main?.pressure} Pa</p>
          </div>
          <div className="weatherInfoTab__outputTab-secondary">
            <h3 className="weatherInfoTab__ouputTab-text">Sunset:</h3>
            <p className="weatherInfoTab__ouputTab-text">{weatherData.sunset}</p>
          </div>
        </div>
      )}
    </main>
  )
}
export default WeatherTab
