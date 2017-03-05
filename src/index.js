import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import registerListener from './lib/geowatcher'
import reducer from './reducers';
import App from './App';
import './index.css';

let store;
if (process.env.NODE_ENV === "development") {
  store = createStore(
    reducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
}
else {
  store = createStore(reducer)
}

registerListener(store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
