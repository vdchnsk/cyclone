import { SMTH_WENT_WRONG } from '../../constants/Errors'

export const Alert = ({ message, iconSource }) => {
  if (!iconSource) {
    iconSource = '../../../public/assets/icons/error_icon.png'
  }

  return (
    <div className="weatherInfoTab__errorTab">
      <img width={128} height={128} src={iconSource} alt={`Error: ${message}`} />
      <h3 className="errorTab_message">{message ?? SMTH_WENT_WRONG}</h3>
    </div>
  )
}
