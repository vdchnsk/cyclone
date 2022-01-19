const disablePunctioation = (string) =>
  string.replace(/[.,<>/#!$%^&*;:{}=\-_`~()]/g, '')

export default { disablePunctioation }
