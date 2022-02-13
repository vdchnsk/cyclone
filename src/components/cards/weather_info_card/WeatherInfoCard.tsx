import React from 'react'

import { Loading } from '../../../localization/Strings'

export const WeatherInfoCard = ({
  image = '',
  tabTitle = Loading,
  content = Loading,
  imageAlt = Loading,
}: {
  image: string
  tabTitle: string
  content: string
  imageAlt: string
}) => (
  <div className="weatherInfoTab__outputTab-secondary">
    <img src={image} width={64} height={64} alt={imageAlt} />
    <h3 className="weatherInfoTab__ouputTab-text">{tabTitle}:</h3>
    <p className="weatherInfoTab__ouputTab-text">{content}</p>
  </div>
)
