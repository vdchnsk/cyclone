import React from 'react'
import './App.css'
import MainInfoForm from './components/mainWindow/mainWindow'
import Weather from './components/mainWindow/weatherInfo'

const API_KEY = 'b6fd0cd5ec30f48c66ef2e4ede481445'

class App extends React.Component {
	state = {
		temp: undefined,
		cityName: undefined,
		countryName: undefined,
		pressure: undefined,
		sunset: undefined,
		error: undefined,
	}

	gettingWeather = async (event) => {
		event.preventDefault()
		const city = event.target?.elements?.city?.value ?? ''

		if (city) {
			const punctuationless = city.replace(/[.,<>/#!$%^&*;:{}=\-_`~()]/g, '')
			const ExtraSimpolnessCityName = punctuationless.replace(/\s{2,}/g, '')

			const api_url = await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${ExtraSimpolnessCityName}&appid=${API_KEY}&units=metric`,
			)

			const data = await api_url.json()

			console.log(data)
			if (data.cod !== '404') {
				const sunset = data.sys.sunset
				const date = new Date()

				date.setTime(sunset)

				const sunset_date = date.getHours() + 'hr:' + date.getMinutes() + 'mn:' + date.getSeconds() + 's'

				this.setState({
					temp: data.main.temp,
					cityName: data.name,
					countryName: data.sys.country,
					pressure: data.main.pressure,
					sunset: sunset_date,
					error: undefined,
				})
			}
		} else if (!city) {
			this.setState({
				temp: undefined,
				cityName: undefined,
				countryName: undefined,
				pressure: undefined,
				sunset: undefined,
				error: 'Choes the city',
			})
		}
	}
	render() {
		return (
			<div className="App">
				<main className="main">
					<div className="main__window">
						<MainInfoForm weatherMethod={this.gettingWeather} />
						<Weather
							temp={this.state.temp}
							cityName={this.state.cityName}
							countryName={this.state.countryName}
							sunset={this.state.sunset}
							pressure={this.state.pressure}
							error={this.state.error}
						/>
					</div>
				</main>
			</div>
		)
	}
}

export default App
