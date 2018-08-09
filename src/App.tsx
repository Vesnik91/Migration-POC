import * as React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { ManageYourGoals } from './components/ManageYourGoals';
import './App.css';

import { createStore } from 'redux'

import logo from './logo.svg';

function storeReducer(state = {}, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return state;
    case 'DECREMENT':
      return state;
    default:
      return state
  }
}

let store = createStore(storeReducer);

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          <ManageYourGoals/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
