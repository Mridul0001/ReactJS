import React from 'react';
import logo from './logo.svg';
import './App.css';

function BoilingVerdict(props){
  if(props.tempC >= 100){
    return (
      <p>The water would boil.</p>
    );
  }else{
    return (
      <p>The water wouldn't boil.</p>
    );
  }
}

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.handleCelsius = this.handleCelsius.bind(this);
    this.handleFahrenheit = this.handleFahrenheit.bind(this);
    this.state = {temp: '', scale: 'c'};
  }

  handleCelsius(temperature){
    this.setState({scale: 'c', temp:temperature});
  }

  handleFahrenheit(temperature){
    this.setState({scale: 'f', temp:temperature});
  }

  render(){
    const scale = this.state.scale;
    const temperature = this.state.temp;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelesius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput scale="c" onTemperatureChange={this.handleCelsius} temperature={celsius}/>
        <TemperatureInput scale="f" onTemperatureChange={this.handleFahrenheit} temperature={fahrenheit}/>
        <BoilingVerdict tempC={celsius}/>
      </div>
    );
  }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
      this.props.onTemperatureChange(e.target.value);
    }

    render(){
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input
            value={temperature}
            onChange={this.handleChange} />
        </fieldset>
      )
    }
  }

function toCelesius(fahrenheit){
  return (fahrenheit-32)*5/9;
}

function toFahrenheit(celsius){
  return (celsius*9/5)+32;
}

function tryConvert(temperature, convert){
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output*1000)/1000;
  return rounded.toString();
}

function App(props) {
  const element = (
    <div>
      <h3>Hello! {props.name}</h3>
    </div>
  )
  return (
    element
  );
}

export default Calculator;
