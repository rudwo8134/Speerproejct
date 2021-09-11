import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router} from 'react-router-dom'

// redux setting
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {store, Persistor} from './Redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={Persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);


