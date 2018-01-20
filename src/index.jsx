import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from "react-redux";
import { createStore } from "redux";

import Routes from './routes'
import reducers from "./reducers";


let store = createStore(reducers);

ReactDOM.render(
  <AppContainer>
    <Provider store={ store }>
      <Routes />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const App = require('./app').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={ store }>
          <App/>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
