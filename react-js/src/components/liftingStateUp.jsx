import React from 'react';

// constants

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

// helper functions

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// components

function BoilingVeredict({ celsius }) {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }

  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onTemperatureChange } = this.props;

    onTemperatureChange(e.target.value);
  }

  render() {
    const { scale, temperature } = this.props;
    
    return (
      <fieldset>
        <legend>Enter the temperature in {scaleNames[scale]}: </legend>
        <input
          onChange={this.handleChange}
          type="text"
          value={temperature} 
        />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'c',
      temperature: '',
    };

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature,
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature,
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = (scale === 'f') ?
      tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = (scale === 'c') ?
      tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          onTemperatureChange={this.handleCelsiusChange}
          temperature={celsius}
          scale="c"
        />
        <br/>
        <TemperatureInput
          onTemperatureChange={this.handleFahrenheitChange}
          temperature={fahrenheit}
          scale="f"
        />
        <BoilingVeredict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
