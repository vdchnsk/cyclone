import type { SyntheticEvent } from 'common/general'

interface WeatherCityInfo {
  value?: string
  error?: string
}

interface WeatherDataElementMain {
  temp?: string
  pressure?: string
}

interface WeatherDataElementSystem {
  country?: string
  sunset?: string
}

export interface WeatherDataElement {
  name?: string
  main?: WeatherDataElementMain
  sys?: WeatherDataElementSystem
  city?: WeatherCityInfo
  sunset?: string
  error?: string
}
export interface WeatherData {
  elements?: WeatherDataElement
  cod?: string
}

export interface CityDataTransferEvent extends SyntheticEvent {
  target: WeatherData
}
