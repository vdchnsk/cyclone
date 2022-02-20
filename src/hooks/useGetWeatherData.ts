import { useState } from 'react'

export const useGetWeatherData = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState()
  const [isLoding, setIsloading] = useState<boolean>(true)

  setIsloading(false)

  return { data, error, isLoding }
}
