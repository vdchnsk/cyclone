import React from "react";;
class Weather extends React.Component{
    render(){  
        return(
            <div className="weatherInfoTab">
                {this.props.cityName && //ПРоверка на наличие значений
                <div className="weatherInfoTab__outputTab-general">
                    <div className="weatherInfoTab__outputTab-secondary"><p className="weatherInfoTab__ouputTab-text">Местоположение:{this.props.cityName}, {this.props.countryName} </p> </div>
                    <div className="weatherInfoTab__outputTab-secondary"><p className="weatherInfoTab__ouputTab-text">Температура:{this.props.temp} °C </p> </div>
                    <div className="weatherInfoTab__outputTab-secondary"><p className="weatherInfoTab__ouputTab-text">Давление:{this.props.pressure} мм рт.ст.</p> </div>
                    <div className="weatherInfoTab__outputTab-secondary"><p className="weatherInfoTab__ouputTab-text">Заход солнца:{this.props.sunset} </p> </div>
                </div> 
                }
                <p>{this.props.error}</p>
            </div>
        );
    }
}
export default Weather;