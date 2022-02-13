import React from 'react'
import { SMTH_WENT_WRONG } from '../../constants/Errors'

export const Alert = ({
  message,
  iconSource,
}: {
  message: string
  iconSource: string
}): JSX.Element => {
  const defaultIcon = '../../../public/assets/icons/error_icon.png'

  return (
    <div className="weatherInfoTab__errorTab">
      <img width={128} height={128} src={iconSource ?? defaultIcon} alt={`Error: ${message}`} />
      <h3 className="errorTab_message">{message ?? SMTH_WENT_WRONG}</h3>
    </div>
  )
}
