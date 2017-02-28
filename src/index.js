import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import registerListener from './lib/geowatcher'
import thunk from 'redux-thunk'
import reducer from './reducers';
import App from './App';
import './index.css';

let store;
if (process.env.NODE_ENV === "development") {
  store = createStore(
    reducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
}
else {
  store = createStore(reducer, applyMiddleware(thunk))
}

registerListener(store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
