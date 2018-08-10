import * as React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ManageYourGoals from './components/ManageYourGoals';
import { StoreData, initialCardsData } from './beans/StoreData';
import { Provider } from 'react-redux';
import './App.css';

import { createStore } from 'redux'

import logo from './logo.svg';

function storeReducer(state = new StoreData({cards: initialCardsData}), action: any) {
  switch (action.type) {
    case 'SOME_ACTION':
      console.log('WE CAN UPDATE STORE HERE. WOOHOO!!!');
      return state;
    default:
      return state
  }
}

let store = createStore(storeReducer);

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <ManageYourGoals/>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
