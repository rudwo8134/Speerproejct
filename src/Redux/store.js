import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const Middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === "development"){
  // I dont use any middleware. I usually use logger but this time. i will use redux dev tools
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...Middlewares))
);


// sagaMiddleware.run();

export const Persistor = persistStore(store)

const redux = {store, Persistor}

export default redux