import React from 'react';
import './App.css';
import MainInfoForm from "./app_window/mainWindow.jsx";
import Weather from "./app_window/weatherInfo.jsx";

const API_KEY = "b6fd0cd5ec30f48c66ef2e4ede481445";

class  App extends React.Component {
  // e - event
  state = {
    temp: undefined,
    cityName:undefined,
    countryName:undefined,
    pressure:undefined,
    sunset:undefined,
    error:undefined
  }
  gettingWeather = async (e) => {
    e.preventDefault(); //Уничтожение обыкновенного поведения страницы,при отправики формы - обновления
    let city = e.target.elements.city.value;//получаем значение введенное пользователем в инпут

    if(city ) { //city именно из API,не cityName
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);//апи и его фетч
      const data = await api_url.json();
      
      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date = date.getHours() + "hr:" + date.getMinutes() + "mn:" + date.getSeconds() + "s";

      this.setState({
        temp:data.main.temp,
        cityName:data.name,
        countryName:data.sys.country,
        pressure:data.main.pressure,
        sunset:sunset_date,
        error:undefined
      });
    } else {
      this.setState({
        temp:undefined,
        cityName:undefined,
        countryName:undefined,
        pressure:undefined,
        sunset:undefined,
        error:"Введите название города"
      });
    }
  }
  render(){
    return (
      <div className="App">
        {/* bg */}
        <main className="main">
          {/* window interface */}
          <div className="main__window">
            {/* window content */}
            <MainInfoForm weatherMethod={this.gettingWeather}/>
            <Weather
            //Передача свойств из API в компонент weather
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
    );
  }
}

export default App;
