export const formatDate = (data: number): string => {
  const date: Date = new Date()

  date.setTime(data)

  const sunsetDate = `${date.getHours()}hr ${date.getMinutes()}mn ${date.getSeconds()}s `

  return sunsetDate
}
