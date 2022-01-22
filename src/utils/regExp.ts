const disablePunctioation = (string: string) =>
  string.replace(/[.,<>/#!$%^&*;:{}=\-_`~()]/g, '')

export default { disablePunctioation }
