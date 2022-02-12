import { API_KEY, API_URI } from './../constants/API'

export const formApiUri = (cityName: string): string => {
  return `${API_URI}?units=metric&q=${cityName}&appid=${API_KEY}`
}
