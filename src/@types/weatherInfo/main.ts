import { SyntheticEvent } from '@types/common/general'

interface WeathercityInfo {
  value?: string
  error?: string
}

interface WeatherDataElement {
  city: WeathercityInfo
}
interface WeatherData {
  elements: WeatherDataElement
}

interface CityDataTransferEvent extends SyntheticEvent {
  target: WeatherData
}

export {
  WeathercityInfo,
  WeatherDataElement,
  WeatherData,
  CityDataTransferEvent,
}
