import React from 'react'

import { Find } from '../../localization/Strings'

export const MainInfoForm = ({ weatherMethod }: { weatherMethod }): JSX.Element => (
  <form onSubmit={weatherMethod} className="content__form">
    <input
      placeholder="City"
      className="form__inputBar"
      type="search"
      name="city"
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="on"
    />
    <button type="submit" className="form__button">
      {Find}
    </button>
  </form>
)
