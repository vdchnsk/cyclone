import React from 'react'

const MainInfoForm = ({ weatherMethod }): JSX.Element => {
  return (
    <form onSubmit={weatherMethod} className="content__form">
      <input
        placeholder="City"
        className="form__inputBar"
        type="search"
        name="city"
        autoComplete="off"
        autoCapitalize="on"
      />
      <button type="submit" className="form__button">
        Find
      </button>
    </form>
  )
}

export default MainInfoForm
