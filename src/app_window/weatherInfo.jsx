import React from "react";;
class Weather extends React.Component{
    render(){  
        return(
            <div className="weatherInfoTab">
                {this.props.cityName && //ПРоверка на наличие значений
                <div>
                    <p>Местоположение:{this.props.cityName}, {this.props.countryName}</p>
                    <p>Температура:{this.props.temp} °C</p>
                    <p>Давление:{this.props.pressure} мм рт.ст.</p>
                    <p>Заход солнца:{this.props.sunset}</p>
                </div>
                }
                <p>{this.props.error}</p>
            </div>
        );
    }
}
export default Weather;