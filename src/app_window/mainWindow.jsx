import React from "react";

class MainInfoForm extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.weatherMethod} className="content__form">
                <input name="city" placeholder="Город" className="form__inputBar" type="text"/>
                <button className="form__button">Найти</button>
            </form>
        );
    }
}
export default MainInfoForm;