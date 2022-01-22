import React from 'react'

const MainInfoForm = ({ weatherMethod }): JSX.Element => {
  return (
    <form onSubmit={weatherMethod} className="content__form">
      <input
        name="city"
        placeholder="City"
        className="form__inputBar"
        type="text"
      />
      <button type="submit" className="form__button">
        Find
      </button>
    </form>
  )
}

export default MainInfoForm
