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

    if(city ) { //city ,что ввел пользователь
      let punctuationless = city.replace(/[.,<>/#!$%^&*;:{}=\-_`~()]/g,"");//Удаляем всю пунктуацию/пробелы и пр.из введенного названия города. P.s.:Дико извиняюсь за нейминг,худшего придумать было просто нельзя
      let ExtraSimpolnessCityName = punctuationless.replace(/\s{2,}/g,"");
      // console.log(ExtraSimpolnessCityName)
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ExtraSimpolnessCityName}&appid=${API_KEY}&units=metric`);//апи и его фетч,получаем ссылку конеретно для введенного города
      const data = await api_url.json();
      if(data.cod!=="404"){ //Если ссылка не выдает "404",то все норм и код выполняется.Хотя консоль выдает ошибку,не смотря на то,что React не жалуется,error вывести пока не получается,но все же лучше ,чем ошибка на всю страницу 
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
      }
  } else if(!city){
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
  render(){ //Рендерим компоненты и выводим все ,что получили из API
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
