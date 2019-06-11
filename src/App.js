import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactComponentLibrary from 'react-reusable-components-library';

class App extends Component {
  state = {
    text: '',
    textInputError: '',
    selectedValue: 'one',
    buttonList: [
      {
        key: '1',
        value: 'one',
        style: {
          color: 'red',
          'font-weight': 'bold',
        }
      },
      {
        key: '2',
        value: 'Two',
        style: {
          color: 'yellow',
          'font-weight': 'bold',
        }
      },
      {
        key: '2',
        value: 'Three',
        style: {
          'font-weight': 'bold',
          color: '#eee',
        }
      }
    ]
  }

  handleChange = (value, key) => {
    this.setState({
      text: value
    })
  }

  handleErrorInput = (value, key) => {
    this.setState({
      textInputError: value
    })
  }

  buttonClicked = (value) => {
    console.log('disabled button click')
  }

  handleButtonGroupClick = (val) => {
    this.setState({
      selectedValue: val
    })
  }

  render() {
    const { text, buttonList, selectedValue, textInputError } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Reusable componets</h2>
        </div>
        <br />
        The Reusable componet are :  <br />
        Button:
        <ReactComponentLibrary.Button 
          title="Customizable Button"
          id="1"
          buttonClick={this.buttonClicked}
          primaryBgColor='lightblue'
          customStyle={{
            margin: '20px',
            width: '200px',
          }}
        /> <br />
        Disabled Button:
        <ReactComponentLibrary.Button 
          title="Disabled Button"
          id="1"
          buttonClick={this.buttonClicked}
          customStyle={{
            margin: '20px',
            width: '250px',
            color: '#FFF',
          }}
          primaryBgColor='orange'
          disabled
        /> <br />
        Input Box: 
        <ReactComponentLibrary.Input
          id="2"
          inputValue={this.handleChange}
          inputText={text}
          customStyle={{
            margin: '20px',
          }}
        /> <br />
        Input Box with Error Message option: 
        <ReactComponentLibrary.Input
          id="2"
          inputValue={this.handleErrorInput}
          inputText={textInputError}
          customStyle={{
            margin: '20px',
          }}
          errorMessage='Please Enter Value!!!'
        /> <br />
        Grouped Buttons: 
        <ReactComponentLibrary.ButtonGroup
          buttonList={buttonList}
          selectedValue={selectedValue}
          buttonClicked={this.handleButtonGroupClick}
          primaryBgColor="green"
          customStyle={{
            'font-size': '15px',
          }}
        />
      </div>
    );
  }
}

export default App;
