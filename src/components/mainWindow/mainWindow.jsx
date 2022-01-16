import React from 'react'

class MainInfoForm extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.weatherMethod} className="content__form">
				<input name="city" placeholder="City" className="form__inputBar" type="text" />
				<button className="form__button">Find</button>
			</form>
		)
	}
}
export default MainInfoForm
