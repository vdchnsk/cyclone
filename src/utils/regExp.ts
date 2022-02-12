export const disablePunctioation = (string: string) => {
  return string.replace(/[.,<>/#!$%^&*;:{}=\-_`~()]/g, '')
}

export const simplifyString = (string: string) => {
  return string.replace(/\s{2,}/g, '')
}
