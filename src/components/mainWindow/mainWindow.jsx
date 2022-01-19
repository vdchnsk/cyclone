import React from 'react'

function MainInfoForm({ weatherMethod }) {
  return (
    <form onSubmit={weatherMethod} className="content__form">
      <input
        name="city"
        placeholder="City"
        className="form__inputBar"
        type="text"
      />
      <button className="form__button">Find</button>
    </form>
  )
}
export default MainInfoForm
