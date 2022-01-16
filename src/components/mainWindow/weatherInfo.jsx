import React from 'react'

class Weather extends React.Component {
	render() {
		return (
			<div className="weatherInfoTab">
				{this.props.cityName && (
					<div className="weatherInfoTab__outputTab-general">
						<div className="weatherInfoTab__outputTab-secondary">
							<p className="weatherInfoTab__ouputTab-text">
								Place: {this.props.cityName}, {this.props.countryName}{' '}
							</p>{' '}
						</div>
						<div className="weatherInfoTab__outputTab-secondary">
							<p className="weatherInfoTab__ouputTab-text">Temperature: {this.props.temp} °C </p>{' '}
						</div>
						<div className="weatherInfoTab__outputTab-secondary">
							<p className="weatherInfoTab__ouputTab-text">Preassure: {this.props.pressure}</p>{' '}
						</div>
						<div className="weatherInfoTab__outputTab-secondary">
							<p className="weatherInfoTab__ouputTab-text">Sunset: {this.props.sunset} </p>{' '}
						</div>
					</div>
				)}
				<p>{this.props.error}</p>
			</div>
		)
	}
}
export default Weather
