import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots,requestRobots } from './reducer';
import './index.css';
import App from './containers/App';
import "tachyons";
import * as serviceWorker from './serviceWorker';


const rootReducers = combineReducers({searchRobots,requestRobots})
const logger = createLogger();
const store = createStore(rootReducers,applyMiddleware(ThunkMiddleware,logger))

ReactDOM.render(
  <React.StrictMode>
          <Provider store={store}>
             <App />
          </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
